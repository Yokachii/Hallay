import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import { useState,useEffect } from 'react'

export default function Index({statue,image,name,client,desc,dev,communication,designer}) {
    

    return (
        <div className={`${styles.card} ${styles[`card__${statue}`]}`}>
            
            {image?(<div className={styles.image}> <Image src={image} alt="image projet" object-fit="cover" className={styles.img}></Image> </div>):(<div className={styles.image}>Aucune image disponible</div>)}
            <div className={styles.info}>
                <div className={styles.info__name}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.client}>{client}</span>
                </div>

                <span className={styles.desc}>{desc}</span>

                <div className={styles.team}>
                    <span>{dev}</span>
                    <span>{communication}</span>
                    <span>{designer}</span>
                </div>
            </div>

        </div>
    )
  
}