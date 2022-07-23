import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import Unsplash from "./ui/Unsplash";

const nTable: Record<string, string> = {
  1: "st",
  2: "nd",
  3: "rd",
  11: "th",
  12: "th",
  13: "th",
};

const nth = (n: string) => {
  if (nTable[n] !== undefined) return nTable[n];

  const modN = Number(n) % 10;
  return nTable[modN] !== undefined ? nTable[modN] : "th";
};

const images = {
  free: "photo-1510100831744-b8d7fea7ca2e",
  freeAlt: "photo-1526269982786-96fcd6b53d45",
  brownGradient: "photo-1616714192343-fd8ba7a853f1",
};

const typeImages = {
  free: images.free,
};

const GramoView = styled(Unsplash)({
  border: "3px solid red",

  "&>*": {
    gridArea: "main",
  },
});

const Cover = styled.div({
  padding: "1em",
});

const Title = styled.div({
  color: "white",
});

const A = styled.a({
  textDecoration: "none",
});

const Nth = styled.span({
  fontSize: "0.7em",
  verticalAlign: "top",
  fontWeight: "600",
  textTransform: "uppercase",
});

const Theme = styled.div({
  color: "white",
  fontSize: "2em",
  fontWeight: "100",
});

type Props = PropsWithChildren<{
  id: string;
  url: string;
  imgId?: string;
}>;

const Gramo = ({ id, url, imgId, children }: Props) => {
  return (
    <GramoView id={imgId || typeImages.free}>
      <A href={url}>
        <Cover>
          <Title>
            {id}
            <Nth>{nth(id)}</Nth> Gramophone
          </Title>
          {children && <Theme>{children}</Theme>}
        </Cover>
      </A>
    </GramoView>
  );
};

export default Gramo;
