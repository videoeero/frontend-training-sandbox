import Header from "@/components/Header/Header";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}></main>
    </>
  );
}
