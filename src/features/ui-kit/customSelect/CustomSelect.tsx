import React from "react";
import { Col, Row, Select, SelectProps } from "antd";
import styles from "./CustomSelect.module.scss";
import { DownOutlined } from "../../../assets/DownOutlined.tsx";

type CustomSelectProps = SelectProps & {
  placeholder?: string;
  label?: string;
};

export const CustomSelect: React.FC<CustomSelectProps> = ({
  placeholder = "Select",
  label,
  ...rest
}) => {
  return (
    <Row className={styles.customSelect} gutter={[0, 8]}>
      {label && (
        <Col className={styles.customSelectLabel} span={24}>
          {label}
        </Col>
      )}
      <Col span={24}>
        <Select
          suffixIcon={<DownOutlined />}
          {...rest}
          placeholder={placeholder}
        />
      </Col>
    </Row>
  );
};
