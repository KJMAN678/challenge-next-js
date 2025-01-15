"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/_components/Nav/style.module.css";
import { IconButton } from "@/app/_components/Nav/IconButton";

// 現在のページに応じた aria-current="page" 属性を動的に付与する
function getAriaCurrent(flag: boolean) {
    return flag ? { "aria-current": "page" as const} : undefined;
}

export function Nav() {
    // usePathname() は現在表示している URL の Path を取得する
    // Client Component でのみ使用できる
    const pathName = usePathname();
    const openModal = () => {
        // モーダルを開く処理
    };
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/" {...getAriaCurrent(pathName === "/")}>Home</Link>
                </li>
                <li>
                    <Link href="/categories" {...getAriaCurrent(pathName.startsWith("/categories"))}>カテゴリー一覧</Link>
                </li>
                <IconButton onClick={openModal}>写真を投稿する</IconButton>
            </ul>
        </nav>
    );
}
