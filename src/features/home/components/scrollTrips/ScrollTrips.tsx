import React, { useMemo } from "react";
import { Col, Row } from "antd";
import styles from "./ScrollTrips.module.scss";
import { CustomCarousel } from "@features/ui-kit";
import { TripsCart } from "@features/home/components";
import { useGetMainTipsTodayQuery } from "@store/buraboatApi.ts";

export const ScrollTrips: React.FC = () => {
  const { data = [] } = useGetMainTipsTodayQuery();

  const carouselData = useMemo(() => {
    return data.map((item) => {
      return <TripsCart key={item.id} {...item} />;
    });
  }, [data]);

  return (
    <Row className={styles.scrollTrips}>
      <Col span={24}>
        <CustomCarousel data={carouselData} />
      </Col>
    </Row>
  );
};
