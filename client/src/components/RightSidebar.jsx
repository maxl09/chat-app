import React from 'react'

const RightSidebar = () => {
    return (
        <div className='basis-1/4 border-l-10 border-[#232227] flex flex-1 flex-col'>
            <div className='w-full flex flex-col items-center gap-3 pt-10 pb-6 px-2 rounded-[10px] border-b-2 border-[#232227]'>
                <img src="/src/assets/profile-placeholder.png" alt="" className='w-[70px] h-[70px] rounded-[50%] object-contain bg-white' />
                <div>
                    <div className='flex flex-col items-center gap-0'>
                        <p className='text-xl'>John Doe</p>
                        <p className={`text-sm flex items-center gap-1 text-green-400`}>Active now</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-1 flex-col py-4 px-6 overflow-hidden'>
                <p className='text-lg'>Media</p>
                <div className='flex-1 flex grid grid-cols-2 gap-2 mt-2 overflow-y-auto'>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <img src="/src/assets/media-image2.jpg" alt="" className='w-full h-full object-cover rounded-[8px]' />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RightSidebar
