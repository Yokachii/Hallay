import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Badge from './badge'

import { useState,useEffect } from 'react'

export default function Index({name,picture,badge}) {
    
    let pictureHTML = (<div className={styles.image}>Dont find the image to display</div>)
    if(picture){
        let tmp = true
        try {
            require(`../../public/${picture}.jpg`)
        } catch (error) {
            tmp=false
        }

        if(tmp){
            pictureHTML=(<Image src={require(`../../public/${picture}.jpg`)} alt={`cant display image`} object-fit="cover" className={styles.image}></Image>)
        }
    }

    return (
        <div className={`${styles.card}`}>

            {pictureHTML}

            {/* {picture?(<Image src={require('../../public/img3.jpg')} alt={`cant display image`} object-fit="cover" className={styles.image}></Image>):(<div>non</div>)} */}
            {/* <div className={styles.image}> */}
                {/* {picture?(<div className={styles.picture}> <Image src={picture} alt="image projet" object-fit="cover" className={styles.img}></Image> </div>):(<div className={styles.image}>Aucune image disponible</div>)} */}
            {/* </div> */}

            <div className={styles.info}>
                <span className={styles.name}>{name}</span>
                <div className={styles.badge__container}>
                    {(Array.isArray(badge) ? badge : []).map((name,i) =>
                        <Badge badgeName={name} key={`${name}-${i}`}></Badge>
                    )}
                </div>
            </div>
            
            
            

        </div>
    )
  
}