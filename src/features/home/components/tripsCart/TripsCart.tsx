import React from "react";
import { Col, Row } from "antd";
import styles from "./TripsCart.module.scss";
import { StartIcon } from "@assets/StartIcon.tsx";
import { ClockIcon } from "@assets/ClockIcon.tsx";
import { SearchIcon } from "@assets/SearchIcon.tsx";
import { useIsNarrowScreen } from "@utils/useIsNarrowScreen";
import { CustomRate } from "@features/ui-kit/customRate";
interface ITripsCartProps {
  image: string;
  name: string;
  description: string;
  price?: number;
  rate?: number;
  hours?: number;
  duration?: string;
  slider_number?: number;
}

export const TripsCart: React.FC<ITripsCartProps> = ({
  image,
  name,
  description,
  price,
  rate,
  hours,
  duration,
}) => {
  const { narrowScreen } = useIsNarrowScreen(1485);
  const { narrowScreen: hideDuration } = useIsNarrowScreen(1040);
  return (
    <Row className={styles.tripsCart} gutter={[0, 23]}>
      <Col span={24} className={styles.tripsCartIcon}>
        <img src={image} alt="" />
        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
      </Col>
      <Col span={24}>
        <Row gutter={[0, 8]}>
          <Col span={24}>
            <Row align="middle" gutter={10}>
              <Col className={styles.title}>{name}</Col>
              {duration && !hideDuration && (
                <Col className={styles.duration}>{duration}</Col>
              )}
            </Row>
          </Col>
          <Col span={24} className={styles.description}>
            {description}
          </Col>
        </Row>
      </Col>
      {hours && (
        <Col span={24}>
          <Row
            justify="space-between"
            align="middle"
            gutter={[narrowScreen ? 12 : 36, 20]}
          >
            <Col className={styles.price}>€{price || 1495}</Col>
            <Col>
              <CustomRate
                className={styles.customRate}
                character={<StartIcon />}
                disabled
                defaultValue={rate || 5}
              />
            </Col>
            <Col>
              <Row className={styles.timeData} gutter={8}>
                <ClockIcon />
                <Col>
                  <span>{hours}</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      )}
    </Row>
  );
};
