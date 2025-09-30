import { LogOut, Settings, User } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full h-[70px] px-[3%] bg-[#18181B] position-fixed flex justify-between items-center'>
            <div onClick={() => navigate('/')} className='flex items-center gap-3 cursor-pointer'>
                <img src="/src/assets/chatbot.png" alt="" className='w-[50px]' />
                <p className='text-3xl font-bold'>Quirkie</p>
            </div>
            <div className='flex items-center gap-2'>
                <button className='hover:bg-[#36353f] px-4 py-2 rounded-3xl flex items-center gap-2 cursor-pointer'>
                    <User />
                    Profile
                </button>
                <button className='hover:bg-[#36353f] px-4 py-2 rounded-3xl flex items-center gap-2 cursor-pointer'>
                    <LogOut />
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Header
