import React from "react";
import { Col, DatePicker, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "./MobileContent.module.scss";
import dayjs, { Dayjs } from "dayjs";
import {
  CustomInputNumber,
  CustomSwitch,
  CustomTooltip,
} from "@features/ui-kit";
import TextArea from "antd/es/input/TextArea";

const dataSwitch = [
  { name: "Free bar", id: 1 },
  { name: "Free bar", id: 2 },
  { name: "Free bar", id: 3 },
  { name: "Free bar", id: 4 },
  { name: "Free bar", id: 5 },
  { name: "Free bar", id: 6 },
  { name: "Free bar", id: 7 },
  { name: "Free bar", id: 8 },
  { name: "Free bar", id: 9 },
  { name: "Free bar", id: 11 },
];

export const MobileContent: React.FC = () => {
  const customFormat = (date: Dayjs) => {
    return dayjs(date).format("dddd, Do MMMM");
  };
  return (
    <Row gutter={[0, 20]} className={styles.mobileContent}>
      <Col span={24}>
        <DatePicker
          className={styles.datePicker}
          picker="date"
          mode="date"
          format={customFormat}
          suffixIcon={<DownOutlined />}
        />
      </Col>
      <Col span={24}>
        <Row gutter={[0, 20]}>
          <Col span={12}>
            <div className={styles.peopleCount}>
              People <CustomInputNumber min={1} />
            </div>
          </Col>
          <Col span={12}>
            <div className={styles.peopleCount}>
              Children <CustomTooltip title={"TOOLTIP"} />
              <CustomInputNumber min={1} />
            </div>
          </Col>
          <Col span={24}>
            <Row gutter={[0, 30]}>
              <Col span={24}>
                <Row gutter={20} justify={"center"} align="middle">
                  <Col>
                    <CustomSwitch />
                  </Col>
                  <Col className={styles.switchText}>Diving</Col>
                </Row>
              </Col>
              <Col span={24}>
                <TextArea rows={2} disabled placeholder="Description" />
              </Col>
              <Col span={24}>
                <Row gutter={[28, 28]}>
                  {dataSwitch.map((item) => (
                    <Col key={item.id} span={12}>
                      <Row justify="center" gutter={20} align="middle">
                        <Col>
                          <CustomSwitch />
                        </Col>
                        <Col className={styles.switchText}>{item.name}</Col>
                      </Row>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
