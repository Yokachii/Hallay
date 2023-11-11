import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import { useState,useEffect } from 'react'

export default function Index({badgeName}) {
    
    switch (badgeName) {
        case 'fondateur':
            return (
                <div className={`${styles.badge} ${styles.fondateur}`}> <span>Fondateur</span> </div>
            )
        case 'communication':
            return (
                <div className={`${styles.badge} ${styles.communication}`}> <span>Communication</span> </div>
            )
        case 'design':
            return (
                <div className={`${styles.badge} ${styles.design}`}> <span>Design</span> </div>
            )
        case 'sysadmin':
            return (
                <div className={`${styles.badge} ${styles.sysadmin}`}> <span>Administrateur Système</span> </div>
            )
        case 'dev':
            return (
                <div className={`${styles.badge} ${styles.dev}`}> <span>Développeur</span> </div>
            )
        case 'web':
            return (
                <div className={`${styles.badge} ${styles.web}`}> <span>Web</span> </div>
            )
        case 'python':
            return (
                <div className={`${styles.badge} ${styles.python}`}> <span>Python</span> </div>
            )
        case 'first-dev':
            return (
                <div className={`${styles.badge} ${styles.firstdev}`}> <span>Staff de la première heure</span> </div>
            )
    
        default:
            break;
    }

}