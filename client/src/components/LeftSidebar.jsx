import { Avatar } from '@mui/material'
import { Search, Users } from 'lucide-react'
import React from 'react'

const LeftSidebar = () => {
    const users = [
        { name: 'John Doe', status: 'Online' },
        { name: 'Jane Doe', status: 'Online' },
        { name: 'Josh Doe', status: 'Offline' },
        { name: 'David Doe', status: 'Online' },
        { name: 'May Doe', status: 'Offline' },
        { name: 'May Doe', status: 'Offline' },
        { name: 'May Doe', status: 'Offline' },
        { name: 'May Doe', status: 'Offline' },
        { name: 'May Doe', status: 'Offline' },
        { name: 'May Doe', status: 'Offline' },
        { name: 'May Doe', status: 'Offline' },
        { name: 'May Doe', status: 'Offline' },
        { name: 'May Doe', status: 'Offline' },
    ]
    return (
        <div className='basis-1/4 bg-[] rounded-l-[20px] p-3'>
            <div className='flex items-center gap-3 px-4 py-4'>
                <Users />
                <p className='text-xl font-500'>Contact</p>
            </div>
            <div className='flex items-center gap-2 px-4 pb-3'>
                <input type="checkbox" defaultChecked className="checkbox" />
                <p className='text-sm font-500'>Show online users (0 online)</p>
            </div>
            <div className="flex items-center rounded-[25px] px-3 py-2 w-full bg-blue-400/30">
                <Search />
                <input
                    type="text"
                    placeholder="Search..."
                    className="ml-2 w-full border-none focus:ring-0 outline-none"
                />
            </div>
            <div className='my-scrollbar overflow-y-scroll h-[80%] mt-3'>
                {users.map((user) =>
                    <div className='flex items-center gap-3 mt-2 p-2 rounded-[10px] hover:bg-gray-500/40 cursor-pointer'>
                        <img src="/src/assets/profile-placeholder.png" alt="" className='w-[40px] h-[40px] rounded-[50%] object-contain bg-white' />
                        <div>
                            <div className='flex flex-col gap-0'>
                                <p className='text-md font-500 leading-5'>{user.name}</p>
                                <p className={`text-sm flex items-center gap-1 ${user.status === 'Online' ? 'text-green-400' : 'text-gray-400'}`}>{user.status}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LeftSidebar
