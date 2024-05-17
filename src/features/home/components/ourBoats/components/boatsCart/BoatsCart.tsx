import React, { useState } from "react";
import { Col, Row } from "antd";
import styles from "./BoatsCart.module.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useIsNarrowScreen } from "@utils/useIsNarrowScreen";

interface IBoatsCartProps {
  name: string;
  peoples: number;
  description: string;
  active: boolean;
  image: string;
}
export const BoatsCart: React.FC<IBoatsCartProps> = ({
  name,
  description,
  peoples,
  active,
  image,
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const { narrowScreen } = useIsNarrowScreen(1024);

  return (
    <>
      <Row align="bottom" justify="space-between" className={styles.boatsCart}>
        <img src={image} alt="" />
        {active && (
          <Col
            onClick={() => setShowDescription(!showDescription)}
            className={styles.showArrow}
            span={24}
          >
            {showDescription ? (
              <LeftOutlined className={styles.showArrowIcon} />
            ) : (
              <RightOutlined className={styles.showArrowIcon} />
            )}
          </Col>
        )}
        {active && (
          <Col span={24}>
            <Row align="middle" justify="space-between">
              <Col className={styles.name}>{name}</Col>
              <Col className={styles.peoplesCount}>{peoples} peoples</Col>
            </Row>
          </Col>
        )}
        {!narrowScreen && active && (
          <Row
            justify="end"
            className={`${styles.detailedInformation} ${showDescription ? styles.show : styles.hide}`}
          >
            <Col span={18}>
              <Row gutter={[0, 15]}>
                <Col className={styles.name}>{name}</Col>
                <Col className={styles.description}>{description}</Col>
              </Row>
            </Col>
          </Row>
        )}
      </Row>
      {narrowScreen && active && (
        <Row
          justify="center"
          className={`${styles.detailedInformation} ${showDescription ? styles.show : styles.hide}`}
        >
          <Col span={24}>
            <Row justify="center" gutter={[0, 15]}>
              <Col className={styles.name}>{name}</Col>
              <Col className={styles.description}>{description}</Col>
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};
