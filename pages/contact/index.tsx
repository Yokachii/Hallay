import Nav from '../../components/navbar/index'
import Card from '../../components/projet-card/index'
import styles from './styles.module.scss'
import Image from 'next/image'
import arrow from '../public/arrow_down.png'
import infoImg from '../public/info.png'
import { useEffect, useState } from 'react'
// import nodemailer from "nodemailer"
import 'net'


import useSWR from 'swr'
const fetcher = (url: string) => fetch(url).then((res) => res.text())
import { useRouter } from 'next/router'

export default function Index() {
    
    const [name,setName] = useState('')
    const [projectName,setProjectName] = useState('')
    const [mail,setMail] = useState('')
    const [desc,setDesc] = useState('')

    const { data, error, isLoading } = useSWR<string>(`/api/getprojet`, fetcher)

    if (error) return <div>Failed to load</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return <div>No loaded data</div>
    const dataJson = data?JSON.parse(data):[]
    let ended = [];
    let progress = [];
    let waiting = [];

    // const smtpOptions = {
    //     host: "smtp.mailtrap.io",
    //     port: parseInt("2525"),
    //     secure: false,
    //     auth: {
    //       user: "user",
    //       pass: "password",
    //     },
    // }

    // nodemailer.createTransport({
        
    // })
    
    // function test() {
    //     let transporter = nodemailer.createTransport({
    //         service: "gmail",
    //         auth: {
    //               user: "elliot.deco26400@gmail.com",
    //               pass: "gamy lbdr xpwo qlwq" //gamy lbdr xpwo qlwq / couyon9090
    //             }
    //     });

    //     const mailOptions = {
    //         subject: "Test",
    //         text: "I am sending an email from nodemailer!",
    //         to: "smurfzbiturccouyon@gmail.com",
    //         from: "elliot.deco26400@gmail.com"
    //     };
        
    //     transporter.sendMail(mailOptions, function (error, info) {
    //         if (error) {
    //           throw new Error('',error);
    //         } else {
    //           console.log("Email Sent");
    //           return true;
    //         }
    //       });

    //     console.log('sent')

    // }
    
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

        {/* <form className={styles.contact_form}> */}
        <div id="contact" className={styles.contact_form}>
            <h1>Nous contacter :</h1>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="539" height="4" viewBox="0 0 539 4" fill="none" className={styles.line}>
                <path d="M2 2L537 2" stroke="black" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            
            <input type="text" name="name" placeholder="Nom et prénom" className={styles.input} value={name} onChange={e=>{setName(e.currentTarget.value)}}/>
            <input type="text" name="projectName" placeholder="Nom de votre projet/site" className={styles.input} value={projectName} onChange={e=>{setProjectName(e.currentTarget.value)}}/>
            <input type="text" name="email" placeholder="Adresse Email" className={styles.input} value={mail} onChange={e=>{setMail(e.currentTarget.value)}}/>

            <textarea placeholder="Description complète de votre projet...." required className={styles.input} rows={5} value={desc} onChange={e=>{setDesc(e.currentTarget.value)}}></textarea>
            {/* <input type="text" name="description" placeholder="Description complète de votre projet" className={styles.description}/> */}

            {/* <button onClick={()=>{test()}} className={styles.btn__send}> <div>Envoyer <Image src={require('../../public/images/email-send.png')} alt='email-send' className={styles.img}></Image></div> </button> */}

        </div>

    </div>
  )
}