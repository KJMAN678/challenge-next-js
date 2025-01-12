import styles from "@/app/_components/Header/style.module.css";
import Link from "next/link";

export function Header() {
    return (
        <header className={styles.header}>
            <p>
                <Link href="/">Photo Share</Link>
            </p>
        </header>
    );
}
