"use client";

import Header from "@/components/Header/Header";
import Button from "@/components/Button/Button";
import Heading from "@/components/Heading/Heading";
import { useState } from "react";
import Card from "@/components/Card/Card";
import styles from "./page.module.scss";
import cardData from "./card_data";
import { Test } from "@/components/Test/Test";

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
          <div className={styles.card_container}>
            {cardData.map((card) => (
              <Card key={`card_${card.id}`} data={card} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
