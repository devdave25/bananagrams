import React, { useRef } from "react"; // importing FunctionComponent
import Draggable from "react-draggable";

type LetterTileProps = {
  letter: string;
};

export const LetterTile: React.FC<LetterTileProps> = ({ letter }) => {
  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      defaultPosition={{ x: 0, y: 0 }}
      // position={null}
      // grid={[25, 25]}
      scale={1}
      // onStart={this.handleStart}
      // onDrag={this.handleDrag}
      // onStop={this.handleStop}
    >
      <div ref={nodeRef}>{letter}</div>
    </Draggable>
  );
};
