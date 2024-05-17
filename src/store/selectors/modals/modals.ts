import { createSelector } from "@reduxjs/toolkit";
import { modalsState } from "@store/slices/modals";

type WithModalsState = {
  modals: modalsState;
};

export const modalsStateSelector = (state: WithModalsState) => state.modals;

export const getBookingShowModalSelector = createSelector(
  modalsStateSelector,
  (resultFuncArgs) => {
    return resultFuncArgs.bookingShowModal;
  },
);

export const getBookingConfirmModalSelector = createSelector(
  modalsStateSelector,
  (resultFuncArgs) => {
    return resultFuncArgs.bookingShowConfirmModal;
  },
);

export const getActiveExcursionIdSelector = createSelector(
  modalsStateSelector,
  (resultFuncArgs) => {
    return resultFuncArgs.activeExcursionId;
  },
);
