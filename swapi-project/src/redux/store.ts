import { configureStore } from "@reduxjs/toolkit";
import characters from "./reducers/characters";
import search from "./reducers/search";
import films from './reducers/films'

export const store = configureStore({
  reducer: {
    characters: characters,
    search: search,
    films: films
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
