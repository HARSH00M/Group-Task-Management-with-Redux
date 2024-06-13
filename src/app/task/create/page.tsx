import Link from 'next/link'
import React from 'react'
import Form from './form'

export default function Create() {
  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center'>
        <div>Inside Create</div>
        <div>
          <Form/>
        </div>
        <Link href={'/task/list'}>List</Link>
    </div>
  )
}
