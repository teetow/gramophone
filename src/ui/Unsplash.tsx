// https://images.unsplash.com/photo-1510100831744-b8d7fea7ca2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80
// https://images.unsplash.com/photo-1526269982786-96fcd6b53d45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80

import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { mauveDark } from "@radix-ui/colors";

// https://images.unsplash.com/
// photo-1510100831744-b8d7fea7ca2e
// ?ixlib=rb-1.2.1
// &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8
// &auto=format
// &fit=crop
// &w=256
// &h=256
// &q=80

// const usId = "photo-1510100831744-b8d7fea7ca2e"

const prefix = "https://images.unsplash.com/";
const size = 512;
const suffix =
  `?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${size}&h=${size}&q=80`;
const defaultId = "photo-1510100831744-b8d7fea7ca2e";

const unsplashUrl = (id: string) => `${prefix}${id}${suffix}`;

const UnsplashView = styled.div(
  {
    display: "grid",
    gridTemplateAreas: `"main"`,

    "& > *": {
      gridArea: "main",
    },

    "&:hover": {
      "&:after": {
        opacity: "0.8",
        transition: "opacity 60ms ease-in-out",
      },
    },
  },
  (props: { imgUrl: string; hue: number }) => ({
    "&:before": {
      content: `""`,
      backgroundColor: mauveDark.mauve1,
      gridArea: "main",
      zIndex: "-2",
    },
    "&:after": {
      content: `""`,
      gridArea: "main",
      backgroundImage: props.imgUrl,
      backgroundSize: "cover",
      filter: `hue-rotate(${props.hue * 360}deg) saturate(${props.hue > 0 ? 2.0 : 1.0})`,
      opacity: "0.5",
      transition: "opacity 120ms ease-in-out",
      zIndex: "-1",
    },
  })
);

type Props = PropsWithChildren<{ className?: string; hue?: number; id?: string }>;

const Unsplash = ({ className, hue = 0, id = defaultId, children }: Props) => {
  return (
    <UnsplashView hue={hue} className={className} imgUrl={`url(${unsplashUrl(id)})`}>
      {children}
    </UnsplashView>
  );
};

export default Unsplash;
