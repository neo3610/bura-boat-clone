import React from "react";
import { Col, Image, Row } from "antd";
import styles from "./Trip.module.scss";
import Photo from "@assets/img.png";
export const Trip: React.FC = () => {
  return (
    <Row gutter={[0, 50]} className={styles.trip}>
      <Col span={24}>
        <Row justify={"space-between"}>
          <Col>
            <Row gutter={[0, 13]}>
              <Col span={24} className={styles.title}>
                Name of trip
              </Col>
              <Col span={24} className={styles.date}>
                28.04.2024
              </Col>
            </Row>
          </Col>
          <Col className={styles.description} span={12}>
            Lorem ispum dolor sit amet Lorem ispum dolor sit amet Lorem ispum
            dolor sit amet Lorem ispum dolor sit amet Lorem ispum dolor sit amet
            Lorem ispum dolor sit amet Lorem ispum dolor sit amet Lorem ispum
            dolor sit amet Lorem ispum dolor sit amet Lorem ispum dolor sit amet
            Lorem ispum dolor sit amet Lorem ispum dolor sit amet Lorem ispum
            dolor sit amet Lorem ispum dolor sit amet Lorem ispum dolor sit amet
            Lorem ispum dolor sit amet Lorem ispum dolor sit amet Lorem ispum
            dolor sit amet Lorem ispum dolor sit amet Lorem ispum dolor sit amet
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row justify="space-between" gutter={[14, 14]}>
          <Col span={12}>
            <Image src={Photo} />
          </Col>
          <Col span={12}>
            <Image src={Photo} />
          </Col>
          <Col span={12}>
            <Image src={Photo} />
          </Col>
          <Col span={12}>
            <Image src={Photo} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
