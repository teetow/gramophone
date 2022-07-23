import gramophones from "./data/gramophones.json";
import Gramo from "./Gramo";
import Grid from "./ui/Grid";
import { Global, css } from "@emotion/react";
import { mauveDark } from "@radix-ui/colors";

type Gramo = {
  url: string;
  theme?: string;
  imgId?: string;
};

type GramoList = {
  [key: number]: Gramo;
};

const fonts = ["Inter:wght@100..900"];
const fq = (name: string) => `family=${name}`;
const fontString = `https://fonts.googleapis.com/css2?${fonts.map(fq).join("&")}&display=swap`;

function App() {
  return (
    <>
      <Global
        styles={css`
          @import url("${fontString}");
        `}
      />
      <Global
        styles={{
          body: {
            backgroundColor: mauveDark.mauve3,
            fontWeight: "300",
            fontFamily: `"Inter", sans-serif`,
          },
        }}
      />
      <div className="App">
        <Grid>
          {Object.entries(gramophones as GramoList).map(([key, { url, theme, imgId }]) => (
            <Gramo id={key} url={url} imgId={imgId}>
              {theme}
            </Gramo>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default App;
