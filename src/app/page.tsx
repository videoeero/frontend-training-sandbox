"use client";

import { useState } from "react";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import Heading from "../components/Heading/Heading";
import Card from "../components/Card/Card";
import cardData from "./card_data";
import Test from "../components/Test/Test";
import styles from "./page.module.scss";

export default function Home() {
  const [cardsVisibility, setCardsVisibility] = useState<boolean>(false);

  const toggleCards = () => {
    setCardsVisibility(!cardsVisibility);
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Heading size="lg">Main Content</Heading>

        <Test />

        <Button handleClick={toggleCards} variant="primary">
          Toggle Movie Cards
        </Button>
        {cardsVisibility && (
          <div className={styles.container}>
            {cardData.map((card) => (
              <Card key={`card_${card.id}`} data={card} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
