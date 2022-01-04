import { FC } from "react";
import { getSharedBox } from "@hobox/plugin-share-box";
import { useBoxState } from "@hobox/plugin-react-use-box-state";
import Counter from "./Counter";
import {TopCounterBoxType} from './TopCounter'

const counterBox = getSharedBox<TopCounterBoxType>({
  source: () => (window.top as any)?.counterBox,
  fallback: 0
});

const IframeCounter: FC = () => {
  const [count, setCount] = useBoxState(counterBox);
  return <Counter from="iframe" count={count} onClick={() => {
    setCount((d) => {
      d.current += 1;
    });
  }} />;
};

export default IframeCounter;
