import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const gameApi = createApi({
  reducerPath: 'gameApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://free-to-play-games-database.p.rapidapi.com/api/',
    prepareHeaders: header => {
      header.set('X-RapidAPI-Key', import.meta.env.VITE_RAPID_API_KEY);
      header.set('X-RapidAPI-Host', import.meta.env.VITE_RAPID_API_HOST);
    },
  }),
  endpoints: builder => ({
    getAllGamesList: builder.query({ query: () => ({ url: 'games' }) }),
    getGameDetail: builder.query({ query: id => ({ url: 'game', params: { id } }) }),
  }),
});

export const { useGetAllGamesListQuery, useGetGameDetailQuery } = gameApi;
