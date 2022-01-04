import { FC, CSSProperties } from "react";

interface Props {
  className: string;
  style?: CSSProperties;
}

const IconFont: FC<Props> = ({ className, style }) => (
  <i className={`iconfont ${className}`} style={style} />
);

export default IconFont;
