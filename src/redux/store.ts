import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./features/themeSlice";
import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from "react-redux";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useDispatch = () => useDispatchBase<AppDispatch>();
export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
): TSelected => useSelectorBase<RootState, TSelected>(selector);
