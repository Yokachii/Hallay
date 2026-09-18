import Nav from '../../components/navbar/index'
import Card from '../../components/projet-card/index'
import styles from './styles.module.scss'
import Image from 'next/image'
import arrow from '../public/arrow_down.png'
import infoImg from '../public/info.png'
import { useEffect, useState } from 'react'

import useSWR from 'swr'
const fetcher = (url: string) => fetch(url).then((res) => res.text())
import { useRouter } from 'next/router'

export default function Index() {
    // const [dataS,setDataS] = useState('a')

    const { data, error, isLoading } = useSWR<string>(`/api/getprojet`, fetcher)

    if (error) return <div>Failed to load</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return <div>No loaded data</div>
    const dataJson = data?JSON.parse(data):[]
    let ended = [];
    let progress = [];
    let waiting = [];
    
    for(let item of dataJson){
        if(item.statue==='ended'){
            ended.push(item)
        }else if(item.statue==='waiting'){
            waiting.push(item)
        }else{
            progress.push(item)
        }
    }

  return (
    <div className={styles.main}>

        <div className={styles.legend_container}>
            <h1>Légende :</h1>
            <div className={styles.legend}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={styles.circle}><circle cx="10" cy="10" r="10" fill="#16AB09"/></svg>
                    <span>Projet terminé</span>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={styles.circle}><circle cx="10" cy="10" r="10" fill="#1877E6"/></svg>
                    <span>Projet en cours</span>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={styles.circle}><circle cx="10" cy="10" r="10" fill="#D70000"/></svg>
                    <span>Projet en attente</span>
                </div>
            </div>
        </div>


        <div className={styles.card__container}>

            {ended.map((card,i) =>
                <Card statue={card.statue} image={card.image?require(`../../public/${card.image}`):null} name={card.name} client={card.client} desc={card.desc} dev={card.dev} communication={card.communication} designer={card.designer} key={i}></Card>
            )}  

            {progress.map((card,i) =>
                <Card statue={card.statue} image={card.image?require(`../../public/${card.image}`):null} name={card.name} client={card.client} desc={card.desc} dev={card.dev} communication={card.communication} designer={card.designer} key={i}></Card>
            )}  

            {waiting.map((card,i) =>
                <Card statue={card.statue} image={card.image?require(`../../public/${card.image}`):null} name={card.name} client={card.client} desc={card.desc} dev={card.dev} communication={card.communication} designer={card.designer} key={i}></Card>
            )}  

        </div>
        
    </div>
  )
}