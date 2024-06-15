'use client'

import React, { ReactNode } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import  { selectAllTasks, Task } from '@/redux/features/taskSlice'
import Reactions from './reactions'

export default function List() {

    const tasks = useSelector(selectAllTasks);



    const renderTasks = tasks?.map((task : Task)=>
        <div key={task.id} className='border-2 rounded-xl my-8 py-1 px-8' >
            <h1 className='text-2xl'>Title : {task.title}</h1>
            <p>{task.description} ?</p>
            <p>To : {task.assigne}</p>
            <p>On  : {task.assignedDate}</p>
            <p>Due : {task.dueDate}</p>
            <Reactions taskInfo={task} />
        </div>
    )


  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-2xl text-center'>All the Task</h1>
            <div>{renderTasks}</div>
        </div>
        <Link href={'/task/create'}>Create Task</Link>
        
    </div>
  )
}
