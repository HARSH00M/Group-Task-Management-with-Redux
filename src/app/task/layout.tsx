'use client'
import React from 'react'
import StoreProvider from './StoreProvider'
import { store } from '@/redux/store'

export default function TaskLayout({ children }: { children: React.ReactNode }) {
    return <>
        <StoreProvider store={store}>{children}</StoreProvider>
    </>

}
