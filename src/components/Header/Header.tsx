"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import BodyText from "../BodyText/BodyText";

export default function Header() {
  const [intensityLevel, setIntensityLevel] = useState<number>(1);

  const addExclamationMark = () => {
    setIntensityLevel(intensityLevel + 1);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <Heading size="lg" level={1}>
          Welcome to Mess Around App{"!".repeat(intensityLevel)}
        </Heading>
        {intensityLevel < 10 ? (
          <Button handleClick={() => addExclamationMark()}>
            Increase Intensity
          </Button>
        ) : (
          <BodyText>Maximum intensity reached</BodyText>
        )}
      </div>
      {intensityLevel < 5 && (
        <Image
          src="/images/alvan-nee-eoqnr8ikwFE-unsplash-min.jpg"
          alt="Short-coated Brown and White Puppy. Source: Unsplash.com / Alvan Nee"
          className={styles.header__image}
          width="100"
          height="24"
          priority
        />
      )}
      {intensityLevel >= 5 && intensityLevel < 10 && (
        <Image
          src="/images/victor-grabarczyk-N04FIfHhv_k-unsplash-min.jpg"
          alt="Jack Russell Terrier for PuppyHero.com. Source: Unsplash.com / Victor Grabarczyk"
          className={styles.header__image}
          width="100"
          height="24"
          priority
        />
      )}
      {intensityLevel >= 10 && (
        <Image
          src="/images/joe-caione-qO-PIF84Vxg-unsplash-min.jpg"
          alt="Shallow Focus Photography of White Shih Tzu Puppy Running on the Grass. Source: Unsplash.com / Joe Calone"
          className={styles.header__image}
          width="100"
          height="24"
          priority
        />
      )}
    </header>
  );
}
