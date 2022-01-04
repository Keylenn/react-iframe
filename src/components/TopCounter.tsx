import { FC } from "react";
import { createBox } from "@hobox/core";
import { useBoxState } from "@hobox/plugin-react-use-box-state";
import Counter from "./Counter";

const counterBox = createBox(0);

export type TopCounterBoxType = typeof counterBox

declare global {
  interface Window {
    counterBox: TopCounterBoxType;
  }
}

window.counterBox = counterBox;

const TopCounter: FC = () => {
  const [count, setCount] = useBoxState(counterBox);
  return <Counter from="top" count={count} onClick={() => {
    setCount((d) => {
      d.current += 1;
    });
  }} />;
};

export default TopCounter;
