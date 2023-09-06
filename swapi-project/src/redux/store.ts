import { configureStore } from "@reduxjs/toolkit";
import characters from "./reducers/characters";
import films from './reducers/films'
import search from "./reducers/search";
import select from "./reducers/select";

export const store = configureStore({
  reducer: {
    characters: characters,
    films: films,
    search: search,
    select: select
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
