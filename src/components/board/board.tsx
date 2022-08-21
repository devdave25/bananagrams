import React from "react"; // importing FunctionComponent
import { LetterTile } from "../letter-tile/letter-tile";

type BoardProps = {};

export const Board: React.FC<BoardProps> = () => {
  return (
    <div>
      <LetterTile letter={"A"} />
      <LetterTile letter={"C"} />
      <LetterTile letter={"E"} />
    </div>
  );
};
