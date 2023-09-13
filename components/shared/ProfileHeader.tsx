import Image from 'next/image'
import React from 'react'

interface Props {
    accountId: string,
    authUserId: string,
    name: string,
    username: string,
    imgUrl: string,
    bio: string,
}

const ProfileHeader = ({ accountId, authUserId, name, username, imgUrl, bio }: Props) => {
    return (
        <div className='flex flex-col justify-start'>
            <div className='flex item-center justify-between'>
                <div className='flex item-center gap-3'>
                    <div className='relative w-20 h-20 object-cover'>
                        <Image
                            fill
                            src={imgUrl}
                            className="rounded-full object-cover shadow-2xl"
                            alt="Profile imagen"
                        />
                    </div>

                    <div className='flex-1'>
                        <h2 className='text-left text-heading1-bold text-light-1'>{name}</h2>
                        <p className='text-base-medium text-gray-1'>@{username}</p>
                    </div>
                </div>
            </div>

            {/* Todo: Community*/}

            <p className='mt-6 max-w-lg text-base-regular text-light-2'>{bio}</p>
            <div className='mt-12 h-0.5 w-full bg-dark-3' />


        </div>
    )
}

export default ProfileHeader