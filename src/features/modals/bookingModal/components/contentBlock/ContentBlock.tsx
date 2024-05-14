import React from "react";
import { Col, Row } from "antd";
import {
  CustomCalendar,
  CustomInputNumber,
  CustomSwitch,
  CustomTooltip,
} from "@features/ui-kit";
import TextArea from "antd/es/input/TextArea";
import styles from "@features/modals/bookingModal/BookingModal.module.scss";
import { useIsNarrowScreen } from "@utils/useIsNarrowScreen";

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

export const ContentBlock: React.FC = () => {
  const { narrowScreen } = useIsNarrowScreen(1250);

  return (
    <Row gutter={124}>
      <Col span={narrowScreen ? 12 : 7}>
        <Row>
          <Col span={24}>
            <CustomCalendar />
          </Col>
          <Col span={24}>
            <TextArea placeholder="Tell us your wishes.." />
          </Col>
        </Row>
      </Col>
      <Col span={narrowScreen ? 12 : 14}>
        <Row gutter={[60, 40]}>
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
            <Row gutter={[0, 47]}>
              <Col span={24}>
                <Row gutter={20} justify="space-between" align="middle">
                  <Col>
                    <Row gutter={20} align="middle">
                      <Col>
                        <CustomSwitch />
                      </Col>
                      <Col className={styles.switchText}>Diving</Col>
                    </Row>
                  </Col>
                  <Col span={16}>
                    <TextArea rows={2} disabled placeholder="Description" />
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row gutter={[28, 28]}>
                  {dataSwitch.map((item) => (
                    <Col key={item.id} span={12}>
                      <Row gutter={20} align="middle">
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
