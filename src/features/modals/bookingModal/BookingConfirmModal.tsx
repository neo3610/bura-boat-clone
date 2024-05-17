import React from "react";
import { Checkbox, Col, Form, Input, Modal, Row, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBookingConfirmModalSelector } from "@store/selectors";
import { changeBookingShowConfirmModal } from "@store/slices/modals";
import styles from "./BookingModal.module.scss";
import { CloseOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { DefaultButton } from "@features/ui-kit";
export const BookingConfirmModal: React.FC = () => {
  const dispatch = useDispatch();

  const bookingShowConfirmModal = useSelector(getBookingConfirmModalSelector);

  const onChanel = () => {
    dispatch(changeBookingShowConfirmModal(false));
  };

  return (
    <Modal
      width={440}
      footer={false}
      onCancel={onChanel}
      open={bookingShowConfirmModal}
      className={styles.bookingConfirmModal}
      closeIcon={false}
    >
      <Row gutter={[0, 26]}>
        <Col span={24}>
          <Row align="middle" justify="space-between">
            <Col className={styles.footerLogoName}>
              <Typography.Text>
                Bura<span>Boat</span>
              </Typography.Text>
            </Col>
            <Col>
              <CloseOutlined
                className={styles.closeOutlined}
                onClick={onChanel}
              />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[0, 20]}>
            <Col span={24} className={styles.bookingText}>
              Booking
            </Col>
            <Col span={24}>
              <Form>
                <Row gutter={[0, 16]}>
                  <Col span={24}>
                    <Form.Item name="name">
                      <Input size="large" placeholder="Name" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="phone">
                      <Input size="large" placeholder="Phone" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Input value="Free bar" size="large" disabled />
                  </Col>
                  <Col span={24} className={styles.wishes}>
                    Wishes
                  </Col>
                  <Col span={24}>
                    <TextArea
                      rows={2}
                      disabled
                      value="Lorem ispum dolor sit amet Lorem ispum dolor sit amet Lorem ispispum  фывфы Lorem ispum dolor "
                    />
                  </Col>
                  <Col span={24}>
                    <Form.Item name="promocode">
                      <Input size="large" placeholder="Promocode" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[20, 20]}>
                      <Col span={24}>
                        <DefaultButton className={styles.submitBtn}>
                          Book now
                        </DefaultButton>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          className={styles.agreement}
                          name="agreement"
                        >
                          <Checkbox /> <span>I agree with agreement</span>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Modal>
  );
};
