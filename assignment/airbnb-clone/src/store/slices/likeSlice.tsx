import { createSlice } from '@reduxjs/toolkit'
import { LikeState } from '../../@types/TLikeState';

const initialState: LikeState = {
  colors: {},
  likedItem: [],
};

const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
      toggleColor(state,action) {
        const id = action.payload

        if (state.colors[id] !== undefined) { // 해당 id의 color 상태가 이미 정의되어 있으면
          state.colors[id] = !state.colors[id]; // 색상 상태를 전환
        } else {
          state.colors[id] = true; // 해당 id의 color 상태가 처음으로 정의되면 true로 설정
        }
      },
    },
})

export const { toggleColor } = likeSlice.actions
export const likeReducer = likeSlice.reducer