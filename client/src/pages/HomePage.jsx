import React from 'react'
import ChatContainer from '../components/ChatContainer'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'

const HomePage = () => {
    return (
        <div className='w-full h-[calc(100vh-70px)] py-[10px] px-[6%] flex justify-center items-center'>
            <div className='w-[100%] h-[100%] bg-[#18181B] rounded-[5px] flex flex-row gap-3 rounded-[20px]'>

                <LeftSidebar />
                <ChatContainer />
                <RightSidebar />

            </div>
        </div>
    )
}

export default HomePage
