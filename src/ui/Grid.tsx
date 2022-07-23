import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const GridView = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, 256px)",
  gap: "2em",
  justifyContent: "center",
});

type Props = PropsWithChildren<{}>;

const Grid = ({ children }: Props) => {
  return <GridView>{children}</GridView>;
};

export default Grid;
