import React from "react";

import Head from "next/head";

// The Storyblok Client & hook
import { Sidebar } from "../../components/Sidebar";
import { classes } from "../../utility/classes";
import { Game } from "../../components/Game";

export default function Marge({ story, preview }) {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Unity WebGL Player | marge game</title>
        <link rel="shortcut icon" href="/marge/TemplateData/favicon.ico" />
        <link rel="stylesheet" href="/marge/TemplateData/style.css" />
      </Head>
      <div className={classes("home", isOpen ? "" : "closed")}>
        <Sidebar isOpen={isOpen} setOpen={setOpen} />
        <div className={classes("text")}>Marge</div>
        <Game
          jsonUrl="/marge/Build/marge-web.json"
          loaderUrl="/marge/Build/UnityLoader.js"
        />
      </div>
    </>
  );
}
