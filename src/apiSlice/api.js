// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const gameApi = createApi({
  reducerPath: 'gameApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://free-to-play-games-database.p.rapidapi.com/api/',
    prepareHeaders: header => {
      header.set('X-RapidAPI-Key', '1ab1db475emsh3c77522d90de389p19253bjsn8c8eb735a1e9');
      header.set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com');
    },
  }),
  endpoints: builder => ({
    getAllGamesList: builder.query({
      query: () => 'games',
    }),
    getGameDetail: builder.query({
      query: (id) => ({
        url: 'game',
        params: {
          id,
        }
      }),
    }),
  }),
});

export const { useGetAllGamesListQuery, useGetGameDetailQuery } = gameApi;
