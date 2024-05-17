import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type modalsState = {
  bookingShowModal: boolean;
  activeExcursionId: number;
  bookingShowConfirmModal: boolean;
};

const initialState: modalsState = {
  bookingShowModal: false,
  bookingShowConfirmModal: false,
  activeExcursionId: 0,
};

const modalsSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeBookingShowModal: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        bookingShowModal: action.payload,
      };
    },
    setActiveExcursion: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        activeExcursionId: action.payload,
      };
    },
    changeBookingShowConfirmModal: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        bookingShowConfirmModal: action.payload,
      };
    },
  },
});

export const {
  changeBookingShowModal,
  changeBookingShowConfirmModal,
  setActiveExcursion,
} = modalsSlice.actions;
export default modalsSlice.reducer;
