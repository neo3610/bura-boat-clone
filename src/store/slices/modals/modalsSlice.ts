import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type modalsState = {
  bookingShowModal: boolean;
};

const initialState: modalsState = {
  bookingShowModal: false,
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
  },
});

export const { changeBookingShowModal } = modalsSlice.actions;
export default modalsSlice.reducer;
