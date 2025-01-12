import "@/styles/globals.css";
import styles from "./layout.module.css";
import {Header} from "@/app/_components/Header";
import {Footer} from "@/app/_components/Footer";
import {Nav} from "@/app/_components/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className={styles.container}>
          <Header />
          <div className={styles.content}>
            <Nav />
            <main className={styles.main}>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
