### 参考書

- [実践Next.js](https://gihyo.jp/book/2024/978-4-297-14061-8)

### プロジェクト作成

```sh
npx create-next-app
```

### 開発モードで起動

```sh
nvm install 22.13.0
nvm use 22.13.0

npm run dev
```
http://localhost:3000

### プロダクションモードで起動

```sh
npm run build

npm run start
```

### リンターの実行

```sh
npm run lint
```

### Next.js 15 対応

#### router.push("URL") でエラーが出る

```javascript
import { useRouter } from "next/router";

router = userRouter();
router.push("/hoge")
```
- appディレクトリ内では `import { useRouter } from "next/navigation";`を使うべし

```javascript
import { useRouter } from "next/navigation";
router = userRouter();
router.push("/hoge")
```

#### 動的APIに同期的にアクセスすると警告が表示される

- [動的 API](https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-apis) は、リクエスト時にのみ知ることができる情報に依存する
- searchParams がそれ
- [React.use() でラップしてやる](https://nextjs.org/docs/messages/sync-dynamic-apis)必要がある

```javascript
import * as React from 'react'

const { id } = React.use(params)
```
