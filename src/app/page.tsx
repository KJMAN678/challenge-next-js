import Link from "next/link";
import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>トップ画面</h1>
      <ul>
        <li>
          <Link href={`/photos/1`}>写真1</Link>
        </li>
        <li>
          <Link href={`/photos/2`}>写真2</Link>
        </li>
        <li>
          <Link href={`/photos/3`}>写真3</Link>
        </li>
      </ul>
    </div>
  );
}
