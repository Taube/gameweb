import React from "react";

import Head from "next/head";

// The Storyblok Client & hook
import Storyblok, { useStoryblok } from "../lib/storyblok";
import DynamicComponent from "../components/DynamicComponent";
import { Sidebar } from "../components/Sidebar";
import { classes } from "../utility/classes";

export default function Home({ story, preview }) {
  const enableBridge = true; // load the storyblok bridge everywhere
  // const enableBridge = preview; // enable bridge only in prevew mode
  const [isOpen, setOpen] = React.useState<boolean>(false);

  story = useStoryblok(story, enableBridge);

  return (
    <>
      <Head>
        <title>Gameweb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes("home", isOpen ? "" : "closed")}>
        <Sidebar isOpen={isOpen} setOpen={setOpen} />
        <DynamicComponent blok={story.content} />
      </div>
    </>
  );
}

export async function getStaticProps({ preview = true }) {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
  // load the published content outside of the preview mode
  let sbParams = {
    version: "draft", // or 'published'
    cv: 0,
    resolve_relations: "featured-games.games",
  };

  if (preview) {
    // load the draft version inside of the preview mode
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
}
