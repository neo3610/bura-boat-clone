import React from "react";
import { Tooltip, TooltipProps } from "antd";
import styles from "./CustomTooltip.module.scss";

type ICustomTooltipProps = TooltipProps;

export const CustomTooltip: React.FC<ICustomTooltipProps> = ({ ...props }) => {
  return (
    <Tooltip className={styles.customTooltip} {...props}>
      ?
    </Tooltip>
  );
};
