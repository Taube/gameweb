import React from "react";
import { classes } from "../utility/classes";

import styles from "./GameCard.module.scss";

function styling(path?: string) {
  if (!path) {
    return;
  }
  return {
    backgroundImage: `url(${path})`,
  };
}

export const GameCard = ({
  image,
  children,
}: {
  image?: string;
  children: React.ReactNode;
}) => {
  return (
    <div style={styling(image)}>
      <div className={styles.game}>{children}</div>
      <button className={styles.button}>
        <i className={classes("bx", "bx-play", styles.play)} />
      </button>
    </div>
  );
};
