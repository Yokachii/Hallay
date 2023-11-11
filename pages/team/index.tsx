import Nav from '../../components/navbar/index'
import Staff from '../../components/staff-card/index'
import styles from './styles.module.scss'
import Image from 'next/image'
import arrow from '../public/arrow_down.png'
import infoImg from '../public/info.png'
import { useEffect, useState } from 'react'

import useSWR from 'swr'
const fetcher = (url: string) => fetch(url).then((res) => res.text())
import { useRouter } from 'next/router'

export default function Index() {

    const { data, error, isLoading } = useSWR<string>(`/api/getteam`, fetcher)

    if (error) return <div>Failed to load</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return <div>No loaded data</div>
    const dataJson = data?JSON.parse(data):[]

    return (
        <div className={styles.main}>

            <div className={styles.legend_container}>
                <h1>Notre staff :</h1>
            </div>


            <div className={styles.card__container}>

                {dataJson.map((member,i) =>
                    <Staff name={member.name} picture={member.picture} badge={JSON.parse(member.badge)} key={i}></Staff>
                )}

            </div>
            
        </div>
    )
}