
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";



export type Task = {
    id?: string,
    title: string,
    description: string,
    assigne: string,
    assignedDate: string,
    dueDate?: string
    reactions : {
        thumbsup: number,
        wow: number,
        heart: number,
        rocket: number,
        coffee: number
    }
}

const initialTaskList: Task[] = [
    {
        id: '213',
        title: "title 1",
        description: "description",
        assigne: 'everyone',
        assignedDate: "date",
        reactions: {
            thumbsup: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: '1',
        title: "title 1",
        description: "description",
        assigne: 'everyone',
        assignedDate: "date",
        reactions: {
            thumbsup: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }

    },
]



export const TaskList = createSlice({
    name: 'Tasks',
    initialState: initialTaskList,
    reducers: {
        addTask: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: ({ id, title, description, dueDate, assigne }: Task) => {
                id = id || nanoid();
                const assignedDate = new Date().toISOString().split('T')[0];
                return {
                    payload: {
                        id, title, description, assigne, dueDate, assignedDate, reactions: {
                            thumbsup: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0

                        }
                    }
                }
            }
        },
        reactionAdded: (state, action: PayloadAction<{ taskId: string, reaction: keyof Task["reactions"] }>) => {
            const { taskId, reaction } = action.payload;
            const postExisting  = state.find((task) => task.id === taskId);
            if (postExisting) {
                postExisting.reactions[reaction]++;
            }
        }
    }
}
)


export const { addTask, reactionAdded } = TaskList.actions
export const selectAllTasks = (state: RootState) => state.Tasks;
export default TaskList.reducer;