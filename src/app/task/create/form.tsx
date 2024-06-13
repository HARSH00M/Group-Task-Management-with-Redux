'use client'
import React, { useRef, useState, FormEvent, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux';
import { addTask, Task } from '@/redux/features/taskSlice';



export default function Form() {
    const [formData, setFormData] = useState<Task>({title:'', description : '', date : ''});
    const dispatch = useDispatch();

    const formRef = useRef<HTMLFormElement>(null);
    

    function handleChange(e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        setFormData((prev)=>({...prev, [e.target.name] : e.target.value }))
    }

    function handleSubmit(e : FormEvent){
        e.preventDefault();
        console.log(formData);
        dispatch(
            addTask(formData)
        )

        setFormData({ title: '', description: '', date: ''});
        formRef.current?.reset();


    }
    
  return (
    <div>
        <form  ref={formRef} className='flex flex-col gap-y-2 text-black p-8 border rounded-lg' onSubmit={handleSubmit} >
            <input onChange={handleChange}  type='text' name='title' placeholder='Enter Title' required/>
            <textarea onChange={handleChange} maxLength={90} className='h-8' name='description' placeholder='Enter Description' required />
            <input onChange={handleChange} type='date' name='date' placeholder='Date' required/>
            <button type='submit' className='bg-blue-300 text-black'>Add Task</button>
        </form>
    </div>
  )
}
