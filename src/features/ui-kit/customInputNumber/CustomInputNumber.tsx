import React from "react";
import { InputNumber, InputNumberProps } from "antd";
import styles from "./CustomInputNumber.module.scss";
type CustomInputNumber = InputNumberProps;

export const CustomInputNumber: React.FC<CustomInputNumber> = ({
  ...props
}) => {
  return <InputNumber className={styles.customInputNumber} {...props} />;
};
