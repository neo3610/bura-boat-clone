import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./MainLayout.module.scss";
import { Col, Row } from "antd";
import BackgroundImage from "@assets/BackgroundImage.png";
import FooterImage from "@assets/FooterImage.png";

import BoatIcon from "@assets/BoatIcon.png";

import { MainLayoutFilter } from "./MainLayoutFilter.tsx";
import { useScrollHideContent } from "@utils/useScrollHideContent";
import { Footer } from "@features/footer";
import { Header } from "@features/header";
import { Routes } from "@enums/routes.ts";
import { useDispatch } from "react-redux";
import { changeBookingShowModal } from "@store/slices/modals";
import { useIsNarrowScreen } from "@utils/useIsNarrowScreen";
import { BookingConfirmModal, BookingModal } from "@features/modals";

export const MainLayout: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { narrowScreen } = useIsNarrowScreen(1024);

  const landingPage = location.pathname === Routes.Landing;
  const hideContent = useScrollHideContent(50);

  const headerFixed = !narrowScreen && hideContent && landingPage;
  const onBookNow = () => {
    dispatch(changeBookingShowModal(true));
  };
  return (
    <Row gutter={[0, 50]} justify="center">
      {!hideContent && landingPage && (
        <img className={styles.boatImage} src={BoatIcon} alt="" />
      )}

      <Col
        className={`${styles.header} ${headerFixed && styles.headerFixed}`}
        span={24}
      >
        <img
          className={styles.backgroundImage}
          src={BackgroundImage}
          alt="error"
        />
        <Row gutter={[0, 50]}>
          <Col className={styles.headerMenu} span={24}>
            <Header />
          </Col>
          <Col span={24}>
            <Row gutter={[0, 22]}>
              {landingPage && (
                <Col span={24}>
                  <Row>
                    <Col className={styles.mainLayoutFilter}>
                      <MainLayoutFilter />
                    </Col>
                  </Row>
                </Col>
              )}

              {!hideContent && landingPage && (
                <Col className={styles.bookBtnContainer} span={24}>
                  <Row>
                    <Col
                      onClick={() => onBookNow()}
                      span={7}
                      className={styles.bookBtn}
                    >
                      BOOK NOW
                    </Col>
                  </Row>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Col>
      <Col className={headerFixed ? styles.gapContent : ""} span={24}>
        <Outlet />
      </Col>
      <Col className={styles.footer} span={24}>
        <Row>
          <img
            className={styles.backgroundFooterImage}
            src={FooterImage}
            alt="error"
          />
          <Col span={24}>
            <Footer />
          </Col>
        </Row>
      </Col>
      <BookingConfirmModal />
      <BookingModal />
    </Row>
  );
};
