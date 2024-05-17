import React from "react";
import { Col, Row } from "antd";
import styles from "./InfoBlockCart.module.scss";

interface IInfoBlockCartProps {
  title: string;
  description: string;
  image: string;
}

export const InfoBlockCart: React.FC<IInfoBlockCartProps> = ({
  title,
  image,
  description,
}) => {
  return (
    <Row justify="center" className={styles.infoBlockCart} gutter={30}>
      <Col>
        <div className={styles.icon}>
          <img src={image} alt="" />
        </div>
      </Col>
      <Col span={14}>
        <Row gutter={[0, 10]}>
          <Col className={styles.title} span={24}>
            {title}
          </Col>
          <Col span={24} className={styles.description}>
            {description}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
