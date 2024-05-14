import React from "react";
import { Rate, RateProps } from "antd";

type ICustomRateProps = RateProps & {
  label?: string;
  placeholder?: string;
};

export const CustomRate: React.FC<ICustomRateProps> = ({ ...rest }) => {
  return <Rate {...rest} />;
};
