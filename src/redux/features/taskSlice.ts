
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../store";



export interface Task{
    id? : string,
    title : string,
    description : string,
    date : string,
}

const initialTaskList : Task[] = [
    {
        id : '213',
        title : "title 1",
        description : "description",
        date : "21312",
    },
    {
        id : '21',
        title : "title 1",
        description : "description",
        date : "21312",
    }
]



export const TaskList = createSlice({
        name : 'Tasks',
        initialState : initialTaskList,
        reducers : {
            addTask : {
                reducer : (state, action) =>{
                    console.log(action.payload)
                    state.push(action.payload);
                },
                prepare :  ({id, title, description, date} : Task) =>{
                    id = id || nanoid();
                    return {
                        payload : {
                            id , title, description, date
                        }
                    }
                }
            },
            }
    })



export const { addTask } = TaskList.actions
export const selectAllTasks = (state : RootState) => state.Tasks; 
export default TaskList.reducer;