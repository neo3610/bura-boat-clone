import React from "react";
import { Col, Row } from "antd";
import styles from "./TripsToday.module.scss";
import { TripsCart } from "@features/home/components";
import { useIsNarrowScreen } from "@utils/useIsNarrowScreen";
import { CustomCarousel } from "@features/ui-kit";
import { useGetMainTipsTodayQuery } from "@store/buraboatApi.ts";
export const TripsToday: React.FC = () => {
  const { narrowScreen } = useIsNarrowScreen(1024);
  const { data = [] } = useGetMainTipsTodayQuery();

  const carouselData = narrowScreen
    ? data.map((item) => {
        return <TripsCart key={item.id} {...item} />;
      })
    : [];
  return (
    <Row gutter={[0, 22]} className={styles.tripsToday}>
      <Col span={24} className={styles.title}>
        Trips today
      </Col>
      <Col span={24}>
        {narrowScreen ? (
          <Row className={styles.scrollTrips}>
            <Col span={24}>
              <CustomCarousel data={carouselData} />
            </Col>
          </Row>
        ) : (
          <Row justify="space-between" gutter={[0, 60]}>
            {data.map((item, index) => {
              return (
                <Col key={`${item.id}-${index}`} span={narrowScreen ? 24 : 7}>
                  <TripsCart {...item} />
                </Col>
              );
            })}
          </Row>
        )}
      </Col>
    </Row>
  );
};
