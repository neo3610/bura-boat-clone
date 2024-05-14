import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const buraBoatApi = createApi({
  reducerPath: "buraBoatApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/v1" }),
  endpoints: (builder) => ({
    getMainSequence: builder.query<Array<GetMainSequenceResponse>, void>({
      query: () => `/main_sequence/`,
      transformResponse: (response: Array<GetMainSequenceResponse>) =>
        response.flat(),
    }),

    getMainHead: builder.query<Array<GetMainHeadResponse>, void>({
      query: () => `/main_head/`,
    }),

    getMainBoatsList: builder.query<Array<GetMainBoatsListResponse>, void>({
      query: () => `/main_boats_list/`,
    }),

    getMainTextBlock: builder.query<Array<GetMainTextBlockResponse>, void>({
      query: () => `/main_textblock/`,
    }),

    getMainTipsToday: builder.query<Array<GetMainTipsTodayResponse>, void>({
      query: () => `/main_tips_today/`,
    }),

    getMainPastTrips: builder.query<Array<GetMainPastTripsResponse>, void>({
      query: () => `/main_past_trips/`,
    }),
  }),
});

export type GetMainTipsTodayResponse = {
  id: number;
  name: string;
  description: string;
  image: string;
  start_time: string;
  end_time: string;
  hours: number;
  slider_number: number;
};

export type GetMainPastTripsResponse = {
  id: number;
  name: string;
  description: string;
  image: string;
  slider_number: number;
  draft_all: boolean;
  draft_mobile: boolean;
  url_button: string;
};

export type GetMainTextBlockResponse = {
  id: number;
  name: string;
  url: string;
  description: string;
  image: string;
};

export type GetMainBoatsListResponse = {
  id: number;
  name: string;
  size: number;
  description: string;
  image: string;
  slider_number: number;
  draft_all: true;
  draft_mobile: true;
  url_button: string;
};

export type GetMainSequenceResponse = {
  block_name: string;
  num: string;
};

export type Excursions = {
  id: number;
  name: string;
  time: string;
  description: string;
  image_for_tab: string;
  number: number;
  prive_hour: number;
  prive: number;
  prive_hourr: boolean;
  privee: boolean;
  settings: {
    id: number;
    name: string;
    text: string;
    start_time: string;
    end_time: string;
    checkboxes: Array<number>;
    inputs: Array<number>;
  };
};

export type GetMainHeadResponse = {
  id: number;
  slogan: string;
  mini_slogan: string;
  background: string;
  boat: string;
  excursions: Array<Excursions>;
};
export const {
  useGetMainSequenceQuery,
  useGetMainHeadQuery,
  useGetMainBoatsListQuery,
  useGetMainTextBlockQuery,
  useGetMainPastTripsQuery,
  useGetMainTipsTodayQuery,
} = buraBoatApi;
