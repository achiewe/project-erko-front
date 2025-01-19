"use client";
import { Provider } from "react-redux";
import store from "./features/store";

// add reduxProvider to use states inside the project and use there store file
export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
