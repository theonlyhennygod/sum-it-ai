import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

// Create a Redux store with the Redux Toolkit

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware),
});