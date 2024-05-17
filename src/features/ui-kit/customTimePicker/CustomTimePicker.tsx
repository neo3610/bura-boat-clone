import React from "react";
import styles from "../customDatePicker/CustomDatePicker.module.scss";
import { Col, Row, TimePicker, TimePickerProps } from "antd";

type ICustomTimePickerProps = TimePickerProps & {
  label?: string;
  placeholder?: string;
};

export const CustomTimePicker: React.FC<ICustomTimePickerProps> = ({
  label,
  placeholder,
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
        <TimePicker
          mode="date"
          format={"HH:mm"}
          suffixIcon={false}
          {...rest}
          placeholder={placeholder}
          showNow={false}
        />
      </Col>
    </Row>
  );
};
