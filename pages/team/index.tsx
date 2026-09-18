import Staff from '../../components/staff-card/index'
import styles from './styles.module.scss'
import useSWR from 'swr'
const fetcher = (url: string) => fetch(url).then((res) => res.text())

export default function Index() {

    const { data, error, isLoading } = useSWR<string>(`/api/getteam`, fetcher)

    if (error) return <div>Failed to load</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return <div>No loaded data</div>
    const dataJson = data?JSON.parse(data):[]

    return (
        <div className={styles.main}>

            <div className={styles.legend_container}>
                <h1>Notre staff <span>({dataJson.length})</span> :</h1>
            </div>


            <div className={styles.card__container}>

                {dataJson.map((member,i) =>
                    <Staff name={member.name} picture={member.picture} badge={typeof member.badge === 'string' ? JSON.parse(member.badge) : member.badge} key={member.id || i}></Staff>
                )}

            </div>
            
        </div>
    )
}