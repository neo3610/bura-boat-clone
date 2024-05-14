import React, { useRef } from "react";
import { Col, Modal, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { geoBookingShowModalSelector } from "@store/selectors";
import { changeBookingShowModal } from "@store/slices/modals";
import { DefaultButton } from "@features/ui-kit/defaultButton";
import styles from "./BookingModal.module.scss";
import {
  BookingModalCart,
  ContentBlock,
  MobileContent,
} from "@features/modals/bookingModal/components";
import BoatCartIcon from "@assets/BoatCartIcon.png";
import { CustomCarousel } from "@features/ui-kit";
import { useIsNarrowScreen } from "@utils/useIsNarrowScreen";
import { CarouselRef } from "antd/es/carousel";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const BookingModal: React.FC = () => {
  const dispatch = useDispatch();
  const bookingShowModal = useSelector(geoBookingShowModalSelector);
  const { narrowScreen: mobile } = useIsNarrowScreen(1024);
  const carouselRef = useRef<CarouselRef>(null);

  const data = [
    { src: BoatCartIcon, title: "Night fishing", id: 1 },
    { src: BoatCartIcon, title: "Night fishing", id: 2 },
    { src: BoatCartIcon, title: "Night fishing", id: 3 },
    { src: BoatCartIcon, title: "Night fishing", id: 4 },
    { src: BoatCartIcon, title: "Night fishing", id: 5 },
    { src: BoatCartIcon, title: "Night fishing", id: 6 },
    { src: BoatCartIcon, title: "Night fishing", id: 7 },
    { src: BoatCartIcon, title: "Night fishing", id: 8 },
  ];

  const onPrevClick = () => {
    carouselRef.current?.prev();
  };

  const onNextClick = () => {
    carouselRef.current?.next();
  };

  const onChanel = () => {
    dispatch(changeBookingShowModal(false));
  };

  return (
    <Modal
      width={"100%"}
      footer={false}
      onCancel={onChanel}
      open={bookingShowModal}
      className={styles.bookingModal}
    >
      <Row gutter={[0, 70]}>
        <Col span={24} className={styles.cartsMobile}>
          <Row align="middle" gutter={5}>
            <Col span={2}>
              <LeftOutlined
                onClick={onPrevClick}
                className={styles.carouselNavigateArrow}
              />
            </Col>
            <Col span={20}>
              <CustomCarousel
                customRef={carouselRef}
                compressed
                navigateArrow={false}
                data={data.map((item) => (
                  <Col key={item.id}>
                    <BookingModalCart src={item.src} title={item.title} />
                  </Col>
                ))}
              />
            </Col>
            <Col span={2}>
              <RightOutlined
                onClick={onNextClick}
                className={styles.carouselNavigateArrow}
              />
            </Col>
          </Row>
        </Col>
        <Col className={styles.cartsBlock} span={24}>
          <Row gutter={[20, 18]}>
            {data.map((item) => (
              <Col key={item.id} span={6}>
                <BookingModalCart src={item.src} title={item.title} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={24}>{mobile ? <MobileContent /> : <ContentBlock />}</Col>
        <Col span={24}>
          <Row gutter={[20, 20]}>
            <Col span={mobile ? 24 : 6}>
              <DefaultButton className={styles.sumBtn}>
                For 3600 EU
              </DefaultButton>
            </Col>
            <Col span={mobile ? 24 : 18}>
              <DefaultButton className={styles.submitBtn}>
                Book now
              </DefaultButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </Modal>
  );
};
