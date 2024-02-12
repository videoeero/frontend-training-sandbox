import React from "react";
import { CardData } from "../../types/types";
import Heading from "../Heading/Heading";
import BodyText from "../BodyText/BodyText";
import styles from "./Card.module.scss";

type Props = {
  data: CardData;
};

function Card({ data }: Props) {
  return (
    <article className={styles.card}>
      <Heading level={4} size="md">
        {data.title}
      </Heading>
      <strong>
        <BodyText marginBottom="xs">Release Year: {data.year}</BodyText>
      </strong>
      <Heading level={5} size="sm">
        Actors and their Roles
      </Heading>
      <ul className={styles.card__list}>
        {data.actors.map((actor) => (
          <li
            className={styles.card__list__item}
            key={`${data.title}_${actor.name}`}
          >
            {actor.name} as {actor.role}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default Card;
