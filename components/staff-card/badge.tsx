import styles from './styles.module.scss'
export default function Index({badgeName}) {
    const badges = {
        fondateur: ['Fondateur', 'fondateur'],
        communication: ['Communication', 'communication'],
        design: ['Design', 'design'],
        designer: ['Designer', 'design'],
        sysadmin: ['Administrateur Système', 'sysadmin'],
        dev: ['Développeur', 'dev'],
        developpeur: ['Développeur', 'dev'],
        frontend: ['Frontend', 'firstdev'],
        web: ['Web', 'web'],
        python: ['Python', 'python'],
        strategie: ['Stratégie', 'communication'],
        'direction artistique': ['Direction artistique', 'design'],
        'first-dev': ['Staff de la première heure', 'firstdev'],
    }
    const badge = badges[String(badgeName).toLowerCase()] || [badgeName, 'web']

    switch (badge[1]) {
        case 'fondateur':
            return (
                <div className={`${styles.badge} ${styles.fondateur}`}> <span>{badge[0]}</span> </div>
            )
        case 'communication':
            return (
                <div className={`${styles.badge} ${styles.communication}`}> <span>{badge[0]}</span> </div>
            )
        case 'design':
            return (
                <div className={`${styles.badge} ${styles.design}`}> <span>{badge[0]}</span> </div>
            )
        case 'sysadmin':
            return (
                <div className={`${styles.badge} ${styles.sysadmin}`}> <span>{badge[0]}</span> </div>
            )
        case 'dev':
            return (
                <div className={`${styles.badge} ${styles.dev}`}> <span>{badge[0]}</span> </div>
            )
        case 'web':
            return (
                <div className={`${styles.badge} ${styles.web}`}> <span>{badge[0]}</span> </div>
            )
        case 'python':
            return (
                <div className={`${styles.badge} ${styles.python}`}> <span>{badge[0]}</span> </div>
            )
        case 'firstdev':
            return (
                <div className={`${styles.badge} ${styles.firstdev}`}> <span>{badge[0]}</span> </div>
            )
        default:
            return null
    }

}