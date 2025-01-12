import Link from "next/link";
import styles from "@/app/_components/Nav/style.module.css";

export function Nav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/categories">カテゴリー一覧</Link>
                </li>
            </ul>
        </nav>
    );
}
