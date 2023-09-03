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
    content,
    comunnity,
    comments,
    createdAt
}: Props) => {
    return (
        <article>
            <h2 className='text-small-regular text-light-2'>
                {content}
            </h2>
        </article>
    )
}

export default ThreadCard