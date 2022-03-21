import React from "react";
import { sbEditable, SbEditableBlok } from "@storyblok/storyblok-editable";

type TeaserProps = {
  headline?: string;
} & SbEditableBlok;

const Teaser = ({ blok }: { blok: TeaserProps }) => {
  return <h2 {...sbEditable(blok)}>{blok.headline}</h2>;
};

export default Teaser;
