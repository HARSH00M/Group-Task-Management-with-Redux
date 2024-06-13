'use client'

import React, { ReactNode } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import  { selectAllTasks } from '@/redux/features/taskSlice'

export default function List() {

    const tasks = useSelector(selectAllTasks);


    const renderTasks   = tasks?.map((task)=>
        <div key={task.id} className='border-2 rounded-xl my-8 py-1 px-8' >
            <h1>Title : {task.title}</h1>
            <p>Desc : {task.description}</p>
            <p>Date : {task.date}</p>
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
