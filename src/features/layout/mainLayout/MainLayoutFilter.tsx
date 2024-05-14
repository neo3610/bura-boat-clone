import React from "react";
import { Col, Row } from "antd";
import styles from "./MainLayout.module.scss";
import { CustomDatePicker, CustomSelect } from "../../ui-kit";
import { CustomTimePicker } from "@features/ui-kit/customTimePicker";
import { SearchIcon } from "@assets/SearchIcon.tsx";
import { changeBookingShowModal } from "@store/slices/modals";
import { useDispatch } from "react-redux";

export const MainLayoutFilter: React.FC = () => {
  const dispatch = useDispatch();

  const onBookNow = () => {
    dispatch(changeBookingShowModal(true));
  };
  return (
    <Row className={styles.headerFilter} justify="space-between">
      <Col span={24}>
        <Row gutter={[20, 40]}>
          <Col>
            <CustomSelect label="Excursion" />
          </Col>
          <Col>
            <CustomDatePicker label="Date" />
          </Col>
          <Col>
            <CustomTimePicker label="Time" />
          </Col>
          <Col
            span={12}
            onClick={() => onBookNow()}
            className={styles.bookFilterBtn}
          >
            BOOK NOW
          </Col>
        </Row>
      </Col>
      <div className={styles.searchBtn}>
        <SearchIcon />
      </div>
    </Row>
  );
};
