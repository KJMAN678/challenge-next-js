// "use client"; 親コンポーネントで use client を使用しているため、子コンポーネントでは宣言不要

import styles from "@/app/_components/Nav/style.module.css";

type Props = {
    onClick: () => void;
    children: React.ReactNode;
};

export function IconButton({ onClick, children}: Props) {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    )
}
