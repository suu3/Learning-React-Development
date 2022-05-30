import React from "react";
import "styles/counter.css";

interface Props {
  number: number;
  color: string;
  onIncrement: () => void;
  onDecrement: () => void;
  onSetColor: () => void;
}

const initialProps = {
  number: 0,
  color: "black",
  onIncrement: () => console.warn("onIncrement not defined"),
  onDecrement: () => console.warn("onDecrement not defined"),
  onSetColor: () => console.warn("onSetColor not defined"),
};
const Counter = ({
  number,
  color,
  onIncrement,
  onDecrement,
  onSetColor,
}: Props) => {
  return (
    <div
      className="Counter"
      onClick={onIncrement}
      onContextMenu={(e) => {
        e.preventDefault();
        onDecrement();
      }}
      onDoubleClick={onSetColor}
      style={{ backgroundColor: color }}
    >
      {number}
    </div>
  );
};

export default Counter;
Counter.defaultProps = initialProps;
