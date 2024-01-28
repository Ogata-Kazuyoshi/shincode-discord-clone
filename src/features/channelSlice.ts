import { createSlice } from '@reduxjs/toolkit';
import { InitialChannelState } from '../interface';

const initialState: InitialChannelState = {
  channelId: null,
  channelname: null,
};

export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelname = action.payload.channelname;
    },
  },
});

export const { setChannelInfo } = channelSlice.actions;

export default channelSlice.reducer;
