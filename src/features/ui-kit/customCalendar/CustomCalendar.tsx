import React from "react";
import { Calendar, CalendarProps, Col, Row } from "antd";
import { Dayjs } from "dayjs";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styles from "./CustomCalendar.module.scss";
export const CustomCalendar: React.FC = () => {
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const headerRender = ({ value, onChange }: any) => {
    const handlePrevMonth = () => {
      const newValue = value.clone().subtract(1, "month");
      onChange(newValue);
    };

    const handleNextMonth = () => {
      const newValue = value.clone().add(1, "month");
      onChange(newValue);
    };

    return (
      <Row
        className={styles.headerRender}
        align="middle"
        justify="space-between"
      >
        <Col onClick={handlePrevMonth}>
          <LeftOutlined className={styles.navigateArrow} />
        </Col>
        <Col className={styles.monthName}>{value.format("MMMM YYYY")}</Col>
        <Col onClick={handleNextMonth}>
          <RightOutlined className={styles.navigateArrow} />
        </Col>
      </Row>
    );
  };

  return (
    <Calendar
      className={styles.customCalendar}
      headerRender={headerRender}
      fullscreen={false}
      onPanelChange={onPanelChange}
    />
  );
};
