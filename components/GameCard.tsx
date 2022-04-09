import React from "react";
import { classes } from "../utility/classes";
import styles from "./GameCard.module.scss";
import Image from "next/image";
import Link from "next/link";

type GameCardProps = {
  slug: string;
  image?: string;
  children?: React.ReactNode;
};

export const GameCard = ({ image, slug, children }: GameCardProps) => {
  return (
    <div className={styles.game}>
      {image ? (
        <Image src={image} layout="fill" className={styles.image} />
      ) : null}
      <div className={styles.content}>{children}</div>
      <Link href={`/games/${slug}`}>
        <a className={styles.button}>
          <i className={classes("bx", "bx-play", styles.play)} />
        </a>
      </Link>
    </div>
  );
};
