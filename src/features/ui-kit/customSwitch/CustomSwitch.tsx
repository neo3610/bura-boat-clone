import React from "react";
import { Switch, SwitchProps } from "antd";
import styles from "./CustomSwitch.module.scss";
export const CustomSwitch: React.FC<SwitchProps> = () => {
  return <Switch className={styles.customSwitch} />;
};
