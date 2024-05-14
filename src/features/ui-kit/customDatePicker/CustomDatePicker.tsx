import React from "react";
import { Col, DatePicker, DatePickerProps, Row } from "antd";
import styles from "./CustomDatePicker.module.scss";

type CustomDatePickerProps = DatePickerProps & {
  label?: string;
  placeholder?: string;
};

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  placeholder = "Выберите дату:",
  ...rest
}) => {
  return (
    <Row className={styles.customDatePicker} gutter={[0, 8]}>
      {label && (
        <Col className={styles.customDatePickerLabel} span={24}>
          {label}
        </Col>
      )}
      <Col span={24}>
        <DatePicker
          picker="date"
          mode="date"
          format={"DD.MM.YYYY"}
          suffixIcon={false}
          {...rest}
          placeholder={placeholder}
        />
      </Col>
    </Row>
  );
};
