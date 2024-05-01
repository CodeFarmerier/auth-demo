"use client";
import { CSSProperties, useEffect, useState } from "react";

import createJazzIcon from "./createJazzIcon";

const JazzAvatar: React.FC<{
  style?: CSSProperties;
  address: string;
  diameter?: number;
  rounded?: boolean;
}> = ({ style = {}, address, diameter = 64, rounded = true }) => {
  const [containerBg, setContainerBg] = useState("transparent");
  const [avatarElStr, setAvatarElStr] = useState("");

  useEffect(() => {
    const { svg, bg } = createJazzIcon(address.toLowerCase(), diameter);

    !!svg?.outerHTML && setAvatarElStr(svg.outerHTML);
    !!bg && setContainerBg(bg);
  }, [address]);

  return (
    <div
      style={{
        width: `${diameter}px`,
        height: `${diameter}px`,
        background: containerBg,
        overflow: "hidden",
        borderRadius: rounded ? 999 : 0,
        ...style,
      }}
      dangerouslySetInnerHTML={{ __html: avatarElStr }}
    ></div>
  );
};

export default JazzAvatar;
