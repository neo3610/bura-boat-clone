import { createSelector } from "@reduxjs/toolkit";
import { modalsState } from "@store/slices/modals";

type WithModalsState = {
  modals: modalsState;
};

export const modalsStateSelector = (state: WithModalsState) => state.modals;

export const geoBookingShowModalSelector = createSelector(
  modalsStateSelector,
  (resultFuncArgs) => {
    return resultFuncArgs.bookingShowModal;
  },
);
