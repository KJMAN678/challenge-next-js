import styles from "@/app/_components/Footer/style.module.css";
import Link from "next/link";

export function Footer() {
    return (
        <footer className={styles.footer}>
        <ul>
            <li>
                <Link href="/privacy-policy">privacy-policy</Link>
            </li>
            <li>
                <Link href="/company-info">運営企業</Link>
            </li>
        </ul>
        </footer>
    );
}
