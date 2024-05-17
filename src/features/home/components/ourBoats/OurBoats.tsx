import React, { useMemo, useState } from "react";
import { Col, Row, Typography } from "antd";
import { CustomCarousel } from "@features/ui-kit";
import { BoatsCart } from "@features/home/components/ourBoats/components";
import styles from "./OurBoats.module.scss";
import { useGetMainBoatsListQuery } from "@store/buraboatApi.ts";
export const OurBoats: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { data = [] } = useGetMainBoatsListQuery();
  const carouselComponents = useMemo(
    () =>
      data.map((item) => (
        <BoatsCart
          image={item.image}
          peoples={item.size}
          description={item.description}
          name={item.name}
          active={item.slider_number === activeSlide + 1}
        />
      )),
    [activeSlide, data],
  );
  return (
    <Row className={styles.ourBoats} gutter={[0, 50]}>
      <Col span={24}>
        <Row gutter={[0, 22]}>
          <Col span={24}>
            <Typography.Title>Our Boats</Typography.Title>
          </Col>
          <Col span={24}>
            <CustomCarousel
              setActiveSlide={setActiveSlide}
              compressed
              data={carouselComponents}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
