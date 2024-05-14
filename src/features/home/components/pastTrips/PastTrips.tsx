import React from "react";
import { Col, Row } from "antd";
import styles from "./PastTrips.module.scss";
import { TripsCart } from "@features/home/components";
import { useIsNarrowScreen } from "@utils/useIsNarrowScreen";
import { useGetMainPastTripsQuery } from "@store/buraboatApi.ts";
export const PastTrips: React.FC = () => {
  const { narrowScreen } = useIsNarrowScreen(1024);
  const { data = [] } = useGetMainPastTripsQuery();

  return (
    <Row gutter={[0, 22]} className={styles.pastTrips}>
      <Col span={24} className={styles.title}>
        Past trips
      </Col>
      <Col span={24}>
        <Row justify="space-between" gutter={[0, 60]}>
          {data.map((item, index) => {
            return (
              <Col key={`${item.id}-${index}`} span={narrowScreen ? 24 : 7}>
                <TripsCart {...item} />
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};
