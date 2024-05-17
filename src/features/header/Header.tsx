import React from "react";
import { Col, Row } from "antd";
import styles from "./Header.module.scss";
import { useLocation } from "react-router-dom";
import { useScrollHideContent } from "@utils/useScrollHideContent";
import { Routes } from "@enums/routes.ts";
import { useIsNarrowScreen } from "@utils/useIsNarrowScreen";
import { HeaderNavBar } from "@features/header/components";
import {
  GetMainHeadResponse,
  useGetMainHeadQuery,
} from "@store/buraboatApi.ts";
import { HeaderInfo } from "@enums/headerInfo.ts";
export const Header: React.FC = () => {
  const location = useLocation();
  const { narrowScreen } = useIsNarrowScreen(1024);
  const { data } = useGetMainHeadQuery();
  const hideContent =
    (useScrollHideContent(50) || location.pathname !== Routes.Landing) &&
    !narrowScreen;

  const headerData: Partial<GetMainHeadResponse> = data?.[0] || {};

  return (
    <Row className={styles.header} gutter={[0, 50]}>
      <Col span={24}>
        <HeaderNavBar />
      </Col>
      {!hideContent && (
        <Col span={24}>
          <Row
            className={styles.textBlock}
            gutter={[0, narrowScreen ? 40 : 11]}
          >
            <Col>
              <div className={styles.title}>
                {headerData.slogan || HeaderInfo.slogan}
              </div>
            </Col>
            <Col span={24}>
              <div className={styles.titleDescription}>
                {headerData.mini_slogan || HeaderInfo.mini_slogan}
              </div>
            </Col>
          </Row>
        </Col>
      )}
    </Row>
  );
};
