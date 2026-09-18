import styles from './styles.module.scss'
import Image from 'next/image'
export default function Index({statue,image,name,client,desc,dev,communication,designer}) {
    

    return (
        <div className={`${styles.card} ${styles[`card__${statue}`]}`}>
            
            {image?(<div className={styles.image}> <Image src={image} alt={`Image du projet ${name}`} objectFit="cover" className={styles.img}></Image> </div>):(<div className={styles.image}>Aucune image disponible</div>)}
            <div className={styles.info}>
                <div className={styles.info__name}>
                    <div className={styles.title_block}>
                        <span className={styles.name}>{name}</span>
                        <span className={`${styles.status} ${styles[`status__${statue}`]}`}>{statue === 'in_progress' ? 'En cours' : statue === 'ended' ? 'Terminé' : 'En attente'}</span>
                    </div>
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