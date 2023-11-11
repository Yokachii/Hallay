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

    // const handleSubmit = async () => {
    //     const response = await fetch('/api/createprojet', {
    //         method: 'POST',
    //         headers: {
    //         'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ 
    //             name:`Porjet N°6`,
    //             image:`img`,
    //             statue:`in_progress`,
    //             client:`Client N°6`,
    //             desc:`Une description pour le projet Numero3`,
    //             dev:`Yokachi :)`,
    //             communication:`Elio`,
    //             designer:`Plus d'idées`,
    //         }), // Envoyer le message dans le corps de la requête
    //     });
        
    //     const datass = await response.json();
    //     setDataS(JSON.stringify(datass))
    //     console.log(datass)
    // };
    // handleSubmit()

    // const handleSubmit = async () => {
    //     const message = 'Votre message à envoyer'; // Le message que vous voulez envoyer
    //     const response = await fetch('/api/getprojet', {
    //         method: 'POST',
    //         headers: {
    //         'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ message }), // Envoyer le message dans le corps de la requête
    //     });
        
    //     const data = await response.json();
    //     setDataS(JSON.stringify(data))
    // };

    // useEffect(() => {
    //     handleSubmit();
    // }, []);

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

            {/* <Card statue='ended' image={require('../../public/img.jpg')} name="Nom du projet" client="Client" desc="Un projet numéro 1 avec une description un peux plus longue que d'habitude" dev="Developeur" communication="Comunication" designer="Designer"></Card>
            <Card statue='in_progress' image={require('../../public/img.jpg')} name="Nom du projet" client="Client" desc="Un projet numéro 2 avec une description" dev="Developeur" communication="Comunication" designer="Designer"></Card>
            <Card statue='waiting' image={null} name="Nom du projet" client="Client" desc="Un projet numéro 3 avec une description beaucoup plus longue que les autre Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi optio modi iusto vero iure beatae labore sit culpa atque tempore quos, quia aliquam fuga perferendis," dev="Developeur" communication="Comunication" designer="Designer"></Card> */}
            
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