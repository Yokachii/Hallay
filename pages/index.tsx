import Nav from '../components/navbar/index'
import styles from './styles.module.scss'
import Image from 'next/image'
import arrow from '../public/arrow_down.png'
import infoImg from '../public/info.png'
import { useEffect, useState } from 'react'

export default function Index() {

  // const [textSliderTransform, setTextSliderTransform] = useState(-5.5)
  // const [textSliderArray, setTextSliderArray] = useState(['De A à Z','comme des pros','Gratuitement'])
  // const [textSliderTrans, setTextSliderTrans] = useState(.4)

  // function returnArray() {
  //   let tmp = textSliderArray.slice()

  //   let toadd = [tmp.pop()]
  //   console.log(`poped : ${toadd}  and  ${tmp}`)
    
  //   let newArray = toadd.concat(tmp)
  //   tmp = newArray
  //   setTextSliderArray(newArray) // PROBLEME HERE DONT MAKE ANY EFFECT
  //   console.log(tmp)
  //   console.log(textSliderArray)
  // }

  // function slide(){

  //   setTextSliderTransform(0)

  //   setTimeout(() => {

  //     setTextSliderTrans(0)
  //     returnArray()
  //     setTextSliderTransform(-5.5)

  //   }, 400);

  // }

  // useEffect(()=>{
  //   // slide()
  //   // setTimeout(() => {
  //   //   slide()
  //   // }, 2500);
  // },[])

  return (
    <div className={styles.main}>
      
      <div className={styles.start}>

        <div className={styles.start__title}> 

          <span className={styles.title__white}>Votre projet créé</span> 
          <div className={styles.text__slider}>

            <span className={styles.textSlider}>De A à Z</span>
            <span className={styles.textSlider}>comme des pros</span>
            <span className={styles.textSlider}>Gratuitement</span>

          </div> 
          
        </div>
        <div className={styles.start__learn}>
          <span>On vous explique</span>
          <Image className={styles.start__image} src={arrow} alt="arrow down" />
          {/* <p>{JSON.stringify(textSliderArray)}</p>
          <p>{textSliderTransform}</p> */}
        </div>

      </div>
      <div className={styles.process}>

        <div className={styles.process_absolute}>

          <div className={`${styles.line_1} ${styles.line_left}`}></div>

          <div className={`${styles.circle_cont} ${styles.circle_cont1}`}>
            <div className={styles.circle__main}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className={styles.circle}><circle cx="15" cy="15" r="15" fill="#FCBB15"/></svg>
              <div className={styles.circle__textcontainer}>
                <span className={styles.circle__text}>Vous envoyez votre demande</span>
                <span className={styles.circle__info}>Elle est traitée par notre robot et envoyée à nos équipes qui choisissent de s’occuper ou non de votre projet.</span>
              </div>
            </div>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none" className={`${styles.line_left} ${styles.arc_1}`}>
            <path d="M2 0.5C1.99998 15.5 2.00001 26 27 26" stroke="black" strokeWidth="3"/>
          </svg>

          <div className={`${styles.line_2}`}></div>
          
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" fill="none" className={`${styles.arc_2}`}>
            <path d="M0 2C24 2 24 4.99988 24 28" stroke="black" strokeWidth="3"/>
          </svg>
          
          <div className={`${styles.line_3}`}></div>

          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none" className={`${styles.arc_3}`}>
            <path d="M26 0C26 24 23.0001 24 3.8147e-06 24" stroke="black" strokeWidth="3"/>
          </svg>

          <div className={`${styles.line_4}`}></div>

          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none" className={`${styles.arc_4}`}>
            <path d="M27.25 2C12.25 1.99998 1.75 2.00001 1.75 27" stroke="black" strokeWidth="3"/>
          </svg>

          <div className={`${styles.circle_cont} ${styles.circle_cont2}`}>
            <div>
              <div className={styles.circle__main}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className={styles.circle}><circle cx="15" cy="15" r="15" fill="#FCBB15"/></svg>
                <div className={styles.circle__textcontainer}>
                  <span className={styles.circle__text}>Votre projet est accepté</span>
                  <span className={styles.circle__info}>Votre projet est réalisable, notre communication manager vous contacte pour que vous puissiez être au plus prêt de votre site.</span>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.circle__main}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className={styles.circle}><circle cx="15" cy="15" r="15" fill="#D70000"/></svg>
                <div className={styles.circle__textcontainer}>
                  <span className={styles.circle__text}>Votre projet a un problème</span>
                  <span className={styles.circle__info}>Votre projet est estimé non réalisable par nos équipes. Notre communication manager vous contacte pour rendre réalisable votre projet. </span>
                </div>
              </div>
            </div>
          </div>

          

          <div className={`${styles.circle_cont} ${styles.circle_cont3}`}>
            <div>
              <div className={styles.circle__main}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className={styles.circle}><circle cx="15" cy="15" r="15" fill="#FCBB15"/></svg>
                <div className={styles.circle__textcontainer}>
                  <span className={styles.circle__text}>Votre projet est accepté</span>
                  <span className={styles.circle__info}>Votre projet est réalisable, notre communication manager vous contacte pour que vous puissiez être au plus prêt de votre site.</span>
                </div>
              </div>
            </div>

            <div className={styles.info}>
              <div className={styles.info__logo}>
                <div className={styles.info__image}><Image src={infoImg} alt="info" /></div>
              </div>

              <div className={styles.info__text}>
                <span >Nous restons en contact avec vous</span>
              </div>
              
            </div>

          </div>

          <div className={`${styles.circle_cont} ${styles.circle_cont4}`}>
            <div className={styles.circle__main}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className={styles.circle}><circle cx="15" cy="15" r="15" fill="#16AB09"/></svg>
              <div className={styles.circle__textcontainer}>
                <span className={styles.circle__text}>C’est terminé</span>
                <span className={styles.circle__info}>
                  <span style={{fontStyle: "bold",}}>Ca y est, votre projet est terminé</span>
                  <span>Votre projet est hébergé chez nous et la maintenance est assurée jusqu’à la fin de notre contrat.</span>
                </span>
              </div>
            </div>
          </div>

          

        </div>


        <div className={styles.process__spacer}></div>

      </div>

    </div>
  )
}










