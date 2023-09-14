import styles from './Footer.module.css'

function Footer() {
    const currentYear = new Date().getFullYear()
    return <>
        <footer className={styles.footer}>© {currentYear} Copyright: Kira Peters</footer>
    </>
}

export default Footer