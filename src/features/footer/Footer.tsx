import React from "react";
import { Col, Row, Typography } from "antd";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { FacebookIcon } from "@assets/FacebookIcon.tsx";
import { InstagramIcon } from "@assets/InstagramIcon.tsx";
import { ProductionIcon } from "@assets/ProdictionIcon.tsx";

export const Footer: React.FC = () => {
  return (
    <Row justify="space-between" align="middle" className={styles.footer}>
      <Col>
        <Row gutter={50} align="middle">
          <Col className={styles.footerLogoName}>
            <Link to="#">
              <Typography.Text>
                Bura<span>Boat</span>
              </Typography.Text>
            </Link>
          </Col>
          <Col className={styles.footerPhoneNum}>8-888-888-88-88</Col>
          <Col>
            <Row gutter={10}>
              <Col>
                <FacebookIcon />
              </Col>
              <Col>
                <InstagramIcon />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col>
        <Typography.Text>
          <Row align="middle" gutter={10}>
            <Col className={styles.madeBy}>Made by</Col>
            <Col>
              <ProductionIcon />
            </Col>
          </Row>
        </Typography.Text>
      </Col>
    </Row>
  );
};
