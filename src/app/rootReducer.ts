import { combineReducers } from 'redux';
import theme from './theme/themeSlice';
import game from './game/gameSlice';

interface RootReducerI {
  asyncReducers?: any;
}

const rootReducer =
  (asyncReducers?: RootReducerI) => (state: any, action: any) => {
    const combinedReducer = combineReducers({
      theme,
      game,
      ...asyncReducers,
    });
    return combinedReducer(state, action);
  };

export default rootReducer;

// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
