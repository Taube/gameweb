import React from "react";

import Head from "next/head";

// The Storyblok Client & hook
import Storyblok, { useStoryblok } from "../lib/storyblok";
import DynamicComponent from "../components/DynamicComponent";
import { Sidebar } from "../components/Sidebar";
import { classes } from "../utility/classes";

export default function Account({ story, preview }) {
  const enableBridge = true; // load the storyblok bridge everywhere
  // const enableBridge = preview; // enable bridge only in prevew mode
  const [isOpen, setOpen] = React.useState<boolean>(false);

  story = useStoryblok(story, enableBridge);

  return (
    <>
      <Head>
        <title>Upload Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes("home", isOpen ? "" : "closed")}>
        <Sidebar isOpen={isOpen} setOpen={setOpen} />
        <div className={classes("text")}>Upload Game</div>
      </div>
    </>
  );
}
