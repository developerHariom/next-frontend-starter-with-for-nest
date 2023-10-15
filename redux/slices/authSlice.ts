
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

interface IAuthContextData {
  user?: Record<string, any>;
}

const initialState: IAuthContextData = {
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) => {
      state.user = action.payload.user;
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
