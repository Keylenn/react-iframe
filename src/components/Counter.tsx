import { FC } from "react";
import IconFont from "./IconFont";
import { Card, Button } from "antd";

interface Props {
  from: "top" | "iframe";
  count: number;
  onClick: () => void;
}

const Counter: FC<Props> = ({ from, count, onClick }) => (
  <Card
    title={
      <p>
        <IconFont className="icon-counter" />
        Conter-{from}
      </p>
    }
  >
    <p>count: {count}</p>
    <Button
      type="primary"
      onClick={onClick}
    >
      +1
    </Button>
  </Card>
);

export default Counter;
