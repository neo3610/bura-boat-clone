import React, { useRef } from "react";
import { Carousel, Col, Row } from "antd";
import styles from "./CustomCarousel.module.scss";
import { CarouselRef } from "antd/es/carousel";
import { GreenLeftArrowIcon } from "@assets/GreenLeftArrowIcon.tsx";
import { GreenRightArrowIcon } from "@assets/GreenRightArrowIcon.tsx";
import { useIsNarrowScreen } from "@utils/useIsNarrowScreen";

interface ICustomCarouselProps {
  data: React.JSX.Element[];
  setActiveSlide?: (number: number) => void;
  compressed?: boolean;
  navigateArrow?: boolean;
  customRef?: any;
}

export const CustomCarousel: React.FC<ICustomCarouselProps> = ({
  data,
  setActiveSlide,
  navigateArrow = true,
  customRef,
}) => {
  const carouselRef = useRef<CarouselRef>(null);
  const { narrowScreen } = useIsNarrowScreen(1024);

  const onPrevClick = () => {
    carouselRef.current?.prev();
  };

  const onNextClick = () => {
    carouselRef.current?.next();
  };

  const handleSlideChange = (current: number) => {
    setActiveSlide && setActiveSlide(current);
  };

  return (
    <Row className={styles.customCarousel} justify="start" gutter={[0, 50]}>
      <Col span={24}>
        <Row gutter={[0, 22]}>
          <Col span={24}>
            <Carousel
              afterChange={handleSlideChange}
              infinite={true}
              ref={customRef || carouselRef}
              dots={false}
              className={styles.customCarousel}
              slidesToShow={narrowScreen ? 1 : 3}
            >
              {data.map((item, index) => (
                <div key={index + 1}>{item}</div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Col>
      {navigateArrow && (
        <Col span={narrowScreen ? 24 : ""} className={"navigateArrowBlock"}>
          <Row justify="space-between" align="middle" gutter={50}>
            <Col className={styles.navigateArrow}>
              <div onClick={onPrevClick}>
                <GreenLeftArrowIcon />
              </div>
            </Col>
            <Col className={styles.navigateArrow}>
              <div onClick={onNextClick}>
                <GreenRightArrowIcon />
              </div>
            </Col>
          </Row>
        </Col>
      )}
    </Row>
  );
};
