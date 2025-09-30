import { Image, Search, Send } from 'lucide-react'
import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

const ChatContainer = () => {
    return (
        <div className='flex flex-col basis-1/2'>
            <div className='w-full pb-1 border-b-2 border-[#232227]'>
                <div className='w-fit flex items-center gap-3 mt-2 p-2 rounded-[10px] hover:bg-[#36353f] cursor-pointer'>
                    <img src="/src/assets/profile-placeholder.png" alt="" className='w-[40px] h-[40px] rounded-[50%] object-contain bg-white' />
                    <div>
                        <div className='flex flex-col gap-0'>
                            <p className='text-md font-500 leading-5'>John Doe</p>
                            <p className={`text-sm flex items-center gap-1 text-green-400`}>Online</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex-1 h-full overflow-y-scroll pt-4 pb-8'>
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                            />
                        </div>
                    </div>
                    <div className="chat-header">
                        Obi-Wan Kenobi
                        <time className="text-xs opacity-50">12:45</time>
                    </div>
                    <div className="chat-bubble bg-[#262529] my-1 w-[70%] rounded-[15px] px-3 py-2">
                        <p className="text-[15px]">
                            Awesome, thanks for handling that so quickly 🙌. I’ll update the client during the call.
                            Let’s make sure we also assign someone to monitor the logs for the next few days just
                            to be safe.
                        </p>
                    </div>
                    <div className="chat-footer opacity-50">Delivered</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                            />
                        </div>
                    </div>
                    <div className="chat-header">
                        Anakin
                        <time className="text-xs opacity-50">12:46</time>
                    </div>
                    <div className="chat-bubble bg-[#0A84FE] rounded-[15px] w-[70%] my-1 px-3 py-2">
                        <p className="text-[15px]">
                            Awesome, thanks for handling that so quickly 🙌. I’ll update the client during the call.
                            Let’s make sure we also assign someone to monitor the logs for the next few days just
                            to be safe.
                        </p>
                    </div>
                    <div className="chat-footer opacity-50">Seen at 12:46</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                            />
                        </div>
                    </div>
                    <div className="chat-header">
                        Obi-Wan Kenobi
                        <time className="text-xs opacity-50">12:45</time>
                    </div>
                    <div className="chat-bubble bg-[#262529] my-1 w-[70%] rounded-[15px] px-3 py-2">
                        <p className="text-[15px]">
                            Awesome, thanks for handling that so quickly 🙌. I’ll update the client during the call.
                            Let’s make sure we also assign someone to monitor the logs for the next few days just
                            to be safe.
                        </p>
                    </div>
                    <div className="chat-footer opacity-50">Delivered</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                            />
                        </div>
                    </div>
                    <div className="chat-header">
                        Anakin
                        <time className="text-xs opacity-50">12:46</time>
                    </div>
                    <div className="chat-bubble bg-[#0A84FE] rounded-[15px] w-[70%] my-1 px-3 py-2">
                        <p className="text-[15px]">
                            Awesome, thanks for handling that so quickly 🙌. I’ll update the client during the call.
                            Let’s make sure we also assign someone to monitor the logs for the next few days just
                            to be safe.
                        </p>
                    </div>
                    <div className="chat-footer opacity-50">Seen at 12:46</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                            />
                        </div>
                    </div>
                    <div className="chat-header">
                        Anakin
                        <time className="text-xs opacity-50">12:46</time>
                    </div>
                    <div className="chat-bubble bg-[#0A84FE] rounded-[15px] w-[70%] my-1 px-3 py-2">
                        <p className="text-[15px]">
                            Awesome, thanks for handling that so quickly 🙌. I’ll update the client during the call.
                            Let’s make sure we also assign someone to monitor the logs for the next few days just
                            to be safe.
                        </p>
                    </div>
                    <div className="chat-footer opacity-50">Seen at 12:46</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                            />
                        </div>
                    </div>
                    <div className="chat-header">
                        Anakin
                        <time className="text-xs opacity-50">12:46</time>
                    </div>
                    <div className="chat-bubble bg-[#0A84FE] rounded-[15px] w-[70%] my-1 px-3 py-2">
                        <p className="text-[15px]">
                            Awesome, thanks for handling that so quickly 🙌. I’ll update the client during the call.
                            Let’s make sure we also assign someone to monitor the logs for the next few days just
                            to be safe.
                        </p>
                    </div>
                    <div className="chat-footer opacity-50">Seen at 12:46</div>
                </div>
            </div>
            <div>
                <div className='flex items-center gap-1 mb-7'>
                    <input type="text" placeholder='Type a message...' className='w-full py-3 px-6 rounded-[8px] bg-transparent border-2 border-[#232227] focus:outline-none' />
                    <button className='bg-transparent border-2 border-transparent p-3 rounded-[10px] hover:bg-gray-600/20 cursor-pointer'>
                        <Image stroke='rgb(190, 190, 190)' />
                    </button>
                    <button className='bg-transparent border-2 border-transparent p-3 rounded-[10px] hover:bg-gray-600/20 cursor-pointer'>
                        <Send stroke='rgb(190, 190, 190)' />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ChatContainer
