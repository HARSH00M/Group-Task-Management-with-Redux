import { configureStore } from '@reduxjs/toolkit'
import task from './features/taskSlice'


export const store = configureStore({
    reducer : {
        Tasks : task
    }
})

// Infer the type of state of store
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


