import React from "react";

import { GameCard } from "./GameCard";
import styles from "./GameList.module.scss";
import { sbEditable, SbEditableBlok } from "@storyblok/storyblok-editable";

type Game = {
  content: {
    id: number;
    title?: string;
    bio?: string;
    image?: {
      id: number;
      name: string;
      filename?: string; // the actual file url
      alt?: string;
      title?: string;
      copyright?: string;
      focus: null;
    };
  };
} & SbEditableBlok;

type GameListProps = {
  games?: Array<Game>;
} & SbEditableBlok;

export const GameList = ({ blok }: { blok?: GameListProps }) => {
  return (
    <>
      <div className="text">GAMES</div>
      <div className={styles["games-grid"]} {...sbEditable(blok)}>
        {blok?.games.map((game) => (
          <GameCard
            key={game.id}
            slug={game.slug}
            image={game.content?.image.filename}
          >
            <strong>{game.content?.title}</strong>: {game.content?.bio}
          </GameCard>
        ))}
      </div>
    </>
  );
};

/*
export const GameList = () => {
  return (
    <>
      <div className="text">GAMES</div>
      <div className={styles["games-grid"]}>
        <div className={styles.hero}>
          This is the first game, it is awesome!
        </div>

        <GameCard image="/games/cyberpunk-2077.jpg">
          Cyberpunk: Cyberpunk can be played in a bunch of different gamemodes
          like multiplayer, solo or red VS blue.
        </GameCard>

        <GameCard image="/games/minecraft.jpg">
          Minecraft: Minecraft is a fun survivalbased game were you can do
          whater you want, with whoever you want.
        </GameCard>

        <GameCard image="/games/valorant.jpg">
          Valorant: Valorant is a high pased multiplayer shootergame were your
          objective is to destroy the other team.
        </GameCard>

        <GameCard image="/games/Trackmania.png">
          Trackmania: Trackmania is a car racing game with a lot of obstacles to
          dodge while still trying to get to the finishline first.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>
        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>
        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>

        <GameCard image="/games/cyberpunk-2077.jpg">
          The games name: What the game is about and more.
        </GameCard>
      </div>
    </>
  );
};
*/
