
import styles from './NavMenu.module.css';
import Image from 'next/image';
import Link from 'next/link';


export default function NavMenu() {
    return (
        <nav className={styles.nav}>
            <Link href={'/'}>
                <Image 
                    src="/logo.svg"
                    width={216}
                    height={30}
                    alt="NextSpace Logo"
                />
            </Link>
            <ul className={styles.links}>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
            </ul>
        </nav>
    )
}