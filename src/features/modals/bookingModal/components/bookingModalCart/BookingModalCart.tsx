import React from "react";
import { Col, Row } from "antd";
import styles from "./BookingModalCart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setActiveExcursion } from "@store/slices/modals";
import { getActiveExcursionIdSelector } from "@store/selectors";

interface IBookingModalCartProps {
  title: string;
  src: string;
  id: number;
}
export const BookingModalCart: React.FC<IBookingModalCartProps> = ({
  title,
  src,
  id,
}) => {
  const dispatch = useDispatch();
  const activeExcursionId = useSelector(getActiveExcursionIdSelector);

  const handleCart = () => {
    dispatch(setActiveExcursion(id));
  };
  return (
    <Row
      onClick={handleCart}
      className={`${styles.bookingModalCart} ${activeExcursionId === id && styles.active} `}
    >
      <Col span={24} className={styles.bookingModalCartItem}>
        <img src={src} alt="" />
        <span>{title}</span>
      </Col>
    </Row>
  );
};
