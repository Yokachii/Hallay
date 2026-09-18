import styles from './styles.module.scss'
import { useState } from 'react'

export default function Index() {
    
    const [name,setName] = useState('')
    const [projectName,setProjectName] = useState('')
    const [mail,setMail] = useState('')
    const [desc,setDesc] = useState('')
    const [sent, setSent] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        setSent(true)
    }

  return (
    <div className={styles.main}>

        <form id="contact" className={styles.contact_form} onSubmit={handleSubmit}>
            <h1>Nous contacter :</h1>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="539" height="4" viewBox="0 0 539 4" fill="none" className={styles.line}>
                <path d="M2 2L537 2" stroke="black" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            
            <input required type="text" name="name" placeholder="Nom et prénom" className={styles.input} value={name} onChange={e=>{setName(e.currentTarget.value)}}/>
            <input required type="text" name="projectName" placeholder="Nom de votre projet/site" className={styles.input} value={projectName} onChange={e=>{setProjectName(e.currentTarget.value)}}/>
            <input required type="text" name="email" placeholder="Adresse Email" className={styles.input} value={mail} onChange={e=>{setMail(e.currentTarget.value)}}/>

            <textarea name="description" placeholder="Description complète de votre projet...." required className={styles.input} rows={5} value={desc} onChange={e=>{setDesc(e.currentTarget.value)}}></textarea>

            <button type="submit" className={styles.btn__send}>Envoyer</button>
            {sent && <span role="status">Votre demande a bien été préparée.</span>}
        </form>

    </div>
  )
}