import * as React from "react";
import { Col, Row } from "antd";
import { InfoBlock, OurBoats, PastTrips, TripsToday } from "./components";
import { BookingModal } from "@features/modals";
import { useGetMainSequenceQuery } from "@store/buraboatApi.ts";
export const Home: React.FC = () => {
  const { data } = useGetMainSequenceQuery();

  const components: any = [
    <OurBoats />,
    <InfoBlock />,
    <TripsToday />,
    <PastTrips />,
  ];

  return (
    <Row gutter={[0, 70]}>
      {data?.map((item) => (
        <Col key={item.num} span={24}>
          {components[+item.num - 1]}
        </Col>
      ))}
      <BookingModal />
    </Row>
  );
};
