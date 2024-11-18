import React from 'react'
import NotificationCard from './NotificationCard';
import Footer from '../Footer'
import DemoNav from '../DemoNav'

function NotificationsPage() {
    return (
        <>
        <DemoNav heading={"Notifications"}/>
        <div className='pt-28'>
            <div className='overflow-x-hidden overflow-y-auto'>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default NotificationsPage
