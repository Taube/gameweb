import React from "react";
import Head from "next/head";

import Storyblok, { useStoryblok } from "../../lib/storyblok";
import { Sidebar } from "../../components/Sidebar";
import { classes } from "../../utility/classes";

export type Page = "home" | "analytics" | "messages" | "account" | "settings";

export default function Page({ data, preview }) {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  const enableBridge = true; // load the storyblok bridge everywhere
  // const enableBridge = preview; // enable bridge only in prevew mode
  const blok = useStoryblok(data, enableBridge);
  const name = blok?.data.story.name;
  const content = blok?.data.story.content;

  return (
    <>
      <Head>
        <title>{name}</title>
        <link rel="shortcut icon" href="/marge/TemplateData/favicon.ico" />
        <link rel="stylesheet" href="/marge/TemplateData/style.css" />
      </Head>
      <div className={classes("home", isOpen ? "" : "closed")}>
        <Sidebar isOpen={isOpen} setOpen={setOpen} />
        <div className={classes("text")}>{name}</div>
        <img src={content?.image.filename} />
      </div>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const slug = params.slug ? params.slug : "home";
  const sbParams = {
    version: "draft",
  };
  let data = null;

  if (preview) {
    // set the version to draft in the preview mode
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  try {
    data = await Storyblok.get(`cdn/stories/games/${slug}`, sbParams);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  // get all links from Storyblok
  let { data } = await Storyblok.get("cdn/links/");

  let paths = [];

  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug;
    paths.push({ params: { slug } });
  });

  return {
    paths: paths,
    fallback: true,
  };
}
