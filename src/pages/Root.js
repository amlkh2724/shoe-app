import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavi from '../components/MainNavi'
export const Root = () => {
    return (

        <div>
            <MainNavi></MainNavi>
            <Outlet></Outlet>
        </div>
    )
}
