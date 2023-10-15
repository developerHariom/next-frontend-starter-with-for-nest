import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import authSlice from "./slices/authSlice";
import storage from "./customStorage";
import logger from "redux-logger";
import productSlice from "./slices/productSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  product: productSlice,
});
const PersistConfig = {
  key: "ecommerce-web",
  storage: storage,
  whitelist: ["auth", "product"],
};

const persistedReducer = persistReducer(PersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
