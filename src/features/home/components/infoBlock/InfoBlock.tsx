import React from "react";
import { Col, Row } from "antd";
import styles from "./InfoBlock.module.scss";
import { InfoBlockCart } from "@features/home/components/infoBlock/components/InfoBlockCart";
import { useIsNarrowScreen } from "@utils/useIsNarrowScreen";
import { useGetMainTextBlockQuery } from "@store/buraboatApi.ts";
export const InfoBlock: React.FC = () => {
  const { narrowScreen } = useIsNarrowScreen(1400);
  const { data = [] } = useGetMainTextBlockQuery();
  return (
    <Row
      gutter={[0, 56]}
      align="middle"
      justify="space-between"
      className={styles.infoBlock}
    >
      {data.map((item) => (
        <Col span={narrowScreen ? 24 : 5} key={item.id}>
          <InfoBlockCart
            image={item.image}
            title={item.name}
            description={item.description}
          />
        </Col>
      ))}
    </Row>
  );
};
