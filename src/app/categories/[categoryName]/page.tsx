"use client";

import { useRouter } from "next/navigation";
import * as React from 'react'

type Props = {
    params: {categoryName: string};
    searchParams: { [key: string]: string | string[] | undefined};
}

export default function Page({params, searchParams}: Props) {
    const _params = React.use(params)
    const _searchParams = React.use(searchParams)
    const page = typeof _searchParams.page === "string" ? searchParams.page : "1";
    const router = useRouter();
    return (
        <div>
            <div>
                <h1>カテゴリー別一覧画面</h1>
                <h2>カテゴリー「{_params.categoryName}」</h2>
                <p>ページ番号: 「{page}」</p>
                <button onClick={() => {
                    router.push("/categories");
                }}>
                    カテゴリー一覧へ戻る
                </button>
            </div>
        </div>
    );
}
