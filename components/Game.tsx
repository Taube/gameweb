import React from "react";

import Unity, { UnityContent } from "react-unity-webgl";

export const Game = ({
  jsonUrl,
  loaderUrl,
}: {
  jsonUrl: string;
  loaderUrl: string;
}) => {
  const [unityContent, setUnityContent] = React.useState<UnityContent>(null);

  React.useEffect(() => {
    const unityContent = new UnityContent(jsonUrl, loaderUrl);
    setUnityContent(unityContent);
  }, []);

  return (
    <div>{unityContent ? <Unity unityContent={unityContent} /> : null}</div>
  );
};
