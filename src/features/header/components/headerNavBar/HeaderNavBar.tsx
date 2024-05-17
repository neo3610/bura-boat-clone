import React, { useState } from "react";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { Routes } from "@enums/routes.ts";
import styles from "./HeaderNavBar.module.scss";
import { ProfileIcon } from "@assets/ProfileIcon.tsx";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { CustomDrawer } from "@features/ui-kit/customDrawer";
import { changeBookingShowModal } from "@store/slices/modals";
import { useDispatch } from "react-redux";

export const HeaderNavBar: React.FC = () => {
  const [visibleContent, setVisibleContent] = useState(false);

  const dispatch = useDispatch();

  const onBookNow = () => {
    setVisibleContent(false);
    dispatch(changeBookingShowModal(true));
  };

  const onClose = () => {
    setVisibleContent(false);
  };
  return (
    <>
      <Row
        className={styles.headerNavBar}
        align="middle"
        justify="space-between"
      >
        <Col>
          <Row align="middle" gutter={75}>
            <Col>
              <Link className={styles.headerLogoName} to={Routes.Landing}>
                Bura<span>Boat</span>
              </Link>
            </Col>
            <Col>
              <Row gutter={60}>
                <Col>
                  <Link className={styles.navigateText} to={Routes.Landing}>
                    Boat Tour
                  </Link>
                </Col>
                <Col>
                  <Link className={styles.navigateText} to={Routes.Trip}>
                    Trip
                  </Link>
                </Col>
                <Col>
                  <Link className={styles.navigateText} to="#">
                    About us
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col>
          <Link to="#">
            <Row gutter={10}>
              <Col className={styles.profileIcon}>
                <ProfileIcon />
              </Col>
              <Col className={styles.navigateText}>Login</Col>
            </Row>
          </Link>
        </Col>
      </Row>
      <Row
        align="middle"
        justify="space-between"
        className={styles.headerMobNavBar}
      >
        <Col>
          <Row align="middle" gutter={75}>
            <Col>
              <Link className={styles.headerLogoName} to={Routes.Landing}>
                Bura<span>Boat</span>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col>
          <MenuUnfoldOutlined
            onClick={() => setVisibleContent(!visibleContent)}
            className={styles.menuUnfold}
          />
        </Col>
        <CustomDrawer closeIcon={false} open={visibleContent} onClose={onClose}>
          <Row className={styles.drawer} gutter={[0, 21]}>
            <Col span={24}>
              <Link to="#">
                <Row align="middle" gutter={10}>
                  <Col className={styles.profileIcon}>
                    <ProfileIcon />
                  </Col>
                  <Col className={styles.drawerText}>Login</Col>
                </Row>
              </Link>
            </Col>
            <Col span={24}>
              <Row gutter={[0, 8]}>
                <Col span={24}>
                  <Link className={styles.drawerText} to={Routes.Landing}>
                    Boat Tour
                  </Link>
                </Col>
                <Col span={24}>
                  <Link className={styles.drawerText} to={Routes.Trip}>
                    Trip
                  </Link>
                </Col>
                <Col span={24}>
                  <Link className={styles.drawerText} to="#">
                    About us
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col
              onClick={() => onBookNow()}
              span={7}
              className={styles.bookBtn}
            >
              BOOK
            </Col>
          </Row>
        </CustomDrawer>
      </Row>
    </>
  );
};
