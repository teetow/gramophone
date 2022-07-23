import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const GridView = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(16%, 256px))",
  gap: "2em",

  "& > *": {
    display: "grid",
    gridTemplateAreas: `"main"`,
  },

  "& > *:after": {
    content: `""`,
    gridArea: "main",
    paddingTop: "100%",
    pointerEvents: "none",
  },
});

type Props = PropsWithChildren<{}>;

const Grid = ({ children }: Props) => {
  return <GridView>{children}</GridView>;
};

export default Grid;
