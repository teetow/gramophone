import { useState } from "react";
import gramophones from "./data/gramophones.json";

type Gramo = {
  url: string;
  theme?: string;
};

type GramoList = {
  [key: number]: Gramo;
};

function App() {
  return (
    <div className="App">
      {Object.entries(gramophones as GramoList).map(([key, { url, theme }]) => (
        <div>
          <a href={url}>
            <span>{key}:th Gramophone</span>
            {theme && <span>Theme: {theme}</span>}
          </a>
        </div>
      ))}
    </div>
  );
}

export default App;
