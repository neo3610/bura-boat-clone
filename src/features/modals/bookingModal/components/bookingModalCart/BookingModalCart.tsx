import React from "react";
import { Col, Row } from "antd";
import styles from "./BookingModalCart.module.scss";

interface IBookingModalCartProps {
  title: string;
  src: string;
}
export const BookingModalCart: React.FC<IBookingModalCartProps> = ({
  title,
  src,
}) => {
  return (
    <Row className={styles.bookingModalCart}>
      <Col span={24} className={styles.bookingModalCartItem}>
        <img src={src} alt="" />
        <span>{title}</span>
      </Col>
    </Row>
  );
};
