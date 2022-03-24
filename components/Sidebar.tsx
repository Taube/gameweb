import React from "react";
import { classes } from "../utility/classes";

import styles from "./Sidebar.module.scss";

export const Sidebar = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  console.log("isOpen", isOpen);
  return (
    <nav className={classes(styles.sidebar, isOpen ? "" : styles["closed"])}>
      <header>
        <div className={styles["image-text"]}>
          <span className={styles["image"]}></span>

          <div className={classes(styles["text"], styles["logo-text"])}>
            <span className={styles["name"]}>Leo Taube</span>
            <span className={styles["profession"]}>Web developer</span>
          </div>
        </div>

        <i
          className={classes(styles["toggle"], "bx", "bx-chevron-right")}
          onClick={() => setOpen(!isOpen)}
        />
      </header>

      <div className={styles["menu-bar"]}>
        <div className={styles["menu"]}>
          <li className={styles["search-box"]}>
            <i className={classes(styles["icon"], "bx", "bx-search")} />
            <input type="text" placeholder="Search games..." />
          </li>

          <ul className={styles["menu-links"]}>
            <li className={styles["nav-link"]}>
              <a href="#">
                <i
                  className={classes(styles["icon"], "bx", "bx-joystick-alt")}
                />
                <span className={classes(styles["text"], styles["nav-text"])}>
                  Games
                </span>
              </a>
            </li>

            <li className={styles["nav-link"]}>
              <a href="#">
                <i
                  className={classes(styles["icon"], "bx", "bxs-user-circle")}
                />
                <span className={classes(styles["text"], styles["nav-text"])}>
                  Account
                </span>
              </a>
            </li>

            <li className={styles["nav-link"]}>
              <a href="#">
                <i className={classes(styles["icon"], "bx", "bx-slider")} />
                <span className={classes(styles["text"], styles["nav-text"])}>
                  Settings
                </span>
              </a>
            </li>

            <li className={styles["nav-link"]}>
              <a href="#">
                <i
                  className={classes(
                    styles["icon"],
                    "bx",
                    "bxs-pie-chart-alt-2"
                  )}
                />
                <span className={classes(styles["text"], styles["nav-text"])}>
                  Analytics
                </span>
              </a>
            </li>

            <li className={styles["nav-link"]}>
              <a href="#">
                <i className={classes(styles["icon"], "bx", "bx-upload")} />
                <span className={classes(styles["text"], styles["nav-text"])}>
                  Upload game
                </span>
              </a>
            </li>

            <li className={styles["nav-link"]}>
              <a href="https://mail.google.com/mail/u/0/#inbox" target="new">
                <i className={classes(styles["icon"], "bx", "bxl-gmail")} />
                <span className={classes(styles["text"], styles["nav-text"])}>
                  Gmail
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
