import React from "react";
import { classes } from "../utility/classes";
import styles from "./GameCard.module.scss";
import Image from "next/image";

type GameCardProps = {
  image?: string;
  children?: React.ReactNode;
};

export const GameCard = ({ image, children, ...rest }: GameCardProps) => {
  return (
    <div {...rest} className={styles.game}>
      {image ? (
        <Image src={image} layout="fill" className={styles.image} />
      ) : null}
      <div className={styles.content}>{children}</div>
      <a href="/games/marge" className={styles.button}>
        <i className={classes("bx", "bx-play", styles.play)} />
      </a>
    </div>
  );
};
