import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    id: string
    currentUserId: string | null
    parentId: string
    content: string
    author: {
        name: string,
        image: string,
        id: string,
    }
    comunnity: {
        id: string,
        name: string,
        image: string,
    } | null
    createdAt: string
    comments: {
        author: {
            image: string
        }
    }[],

    isComment?: boolean
}

const ThreadCard = ({
    id,
    currentUserId,
    parentId,
    author,
    content,
    comunnity,
    comments,
    createdAt,
    isComment
}: Props) => {
    return (
        <article className={`flex flex-col w-full rounded ${isComment ? 'px-0 xs:px-7' : 'bg-dark-2 p-7'}`}>
            <div className='flex items-start justify-between'>
                <div className='flex w-full flex-1 flex-row gap-4'>
                    <div className='flex flex-col items-center'>
                        <Link href={`/profile/${author.id}`} className='relative w-11 h-11'>
                            <Image
                                fill
                                src={author.image}
                                className='cursor-pointer rounded-full'
                                alt='Profile image'
                            />
                        </Link>
                        <div className='thread-card_bar' />
                    </div>

                    <div className='flex w-full flex-col'>
                        <Link href={`/profile/${author.id}`} className='w-fit'>
                            <h4 className='cursor-pointer text-base-semibold text-light-1'>{author.name}</h4>

                        </Link>

                        <p className='mt-2 text-small-regular text-light-2'>{content}</p>

                        <div className={`${isComment && 'mb-10'} mt-5 flex flex-col gap-3`}>
                            <div className='flex gap-3.5'>
                                <Image
                                    src="/assets/heart-gray.svg"
                                    className='cursor-pointer object-contain'
                                    alt='heart'
                                    width={24}
                                    height={24}
                                />
                                <Link href={`/thread/${id}`}>
                                    <Image
                                        src="/assets/reply.svg"
                                        className='cursor-pointer object-contain'
                                        alt='reply'
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                                <Image
                                    src="/assets/repost.svg"
                                    className='cursor-pointer object-contain'
                                    alt='repost'
                                    width={24}
                                    height={24}
                                />

                                <Image
                                    src="/assets/share.svg"
                                    className='cursor-pointer object-contain'
                                    alt='share'
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </div>

                        {/* {
                            isComment && comments.length > 0 && (
                                <Link href={`/thread/${id}`}>
                                    <p className='mt-1 text-subtle-medium text-gray-1'>{comments.length} replies</p>
                                </Link>
                            )
                        } */}

                    </div>
                </div>
            </div>


        </article >
    )
}

export default ThreadCard