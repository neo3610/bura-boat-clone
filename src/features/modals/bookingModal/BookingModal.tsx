import React, { useRef } from 'react';
import { Col, Modal, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveExcursionIdSelector, getBookingShowModalSelector } from '@store/selectors';
import { changeBookingShowConfirmModal, changeBookingShowModal } from '@store/slices/modals';
import { DefaultButton } from '@features/ui-kit/defaultButton';
import styles from './BookingModal.module.scss';
import { BookingModalCart, ContentBlock, MobileContent } from '@features/modals/bookingModal/components';
import { CustomCarousel } from '@features/ui-kit';
import { useIsNarrowScreen } from '@utils/useIsNarrowScreen';
import { CarouselRef } from 'antd/es/carousel';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useGetExcursionsQuery } from '@store/buraboatApi.ts';

export const BookingModal: React.FC = () => {
  const dispatch = useDispatch();
  const activeExcursionId = useSelector(getActiveExcursionIdSelector);
  const bookingShowModal = useSelector(getBookingShowModalSelector);
  const carouselRef = useRef<CarouselRef>(null);

  const { narrowScreen: mobile } = useIsNarrowScreen(1024);

  const { data: excursionsData = [] } = useGetExcursionsQuery();

  const onPrevClick = () => {
    carouselRef.current?.prev();
  };

  const onNextClick = () => {
    carouselRef.current?.next();
  };

  const onChanel = () => {
    dispatch(changeBookingShowModal(false));
  };

  const onBooking = () => {
    dispatch(changeBookingShowModal(false));
    dispatch(changeBookingShowConfirmModal(true));
  };

  return (
    <Modal width={'100%'} footer={false} onCancel={onChanel} open={bookingShowModal} className={styles.bookingModal}>
      <Row gutter={[0, 70]}>
        <Col span={24} className={styles.cartsMobile}>
          <Row align="middle" gutter={5}>
            <Col span={2}>
              <LeftOutlined onClick={onPrevClick} className={styles.carouselNavigateArrow} />
            </Col>
            <Col span={20}>
              <CustomCarousel
                customRef={carouselRef}
                compressed
                navigateArrow={false}
                data={excursionsData.map((item) => (
                  <Col key={item.id}>
                    <BookingModalCart id={item.id} src={item.image_for_tab} title={item.name} />
                  </Col>
                ))}
              />
            </Col>
            <Col span={2}>
              <RightOutlined onClick={onNextClick} className={styles.carouselNavigateArrow} />
            </Col>
          </Row>
        </Col>
        <Col className={styles.cartsBlock} span={24}>
          <Row gutter={[20, 18]}>
            {excursionsData.map((item) => (
              <Col key={item.id} span={6}>
                <BookingModalCart id={item.id} src={item.image_for_tab} title={item.name} />
              </Col>
            ))}
          </Row>
        </Col>
        {activeExcursionId ? (
          <Col span={24}>{mobile ? <MobileContent /> : <ContentBlock />}</Col>
        ) : (
          <Col span={24} className={styles.chooseExcursion}>
            To get started, select a tour!
          </Col>
        )}
        <Col span={24}>
          <Row gutter={[20, 20]}>
            {/*<Col span={mobile ? 24 : 6}>*/}
            {/*  <DefaultButton className={styles.sumBtn}>*/}
            {/*    For 3600 EU*/}
            {/*  </DefaultButton>*/}
            {/*</Col>*/}
            <Col span={24}>
              <DefaultButton disabled={!activeExcursionId} onClick={onBooking} className={styles.submitBtn}>
                Book now
              </DefaultButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </Modal>
  );
};
