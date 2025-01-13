import styles from "@/app/categories/layout.module.css";

type Props = {
    children: React.ReactNode;
}

// categories 配下で全適用されるレイアウト
export default function Layout({ children}: Props) {
    return <div className={styles.container}>{children}</div>;
}
