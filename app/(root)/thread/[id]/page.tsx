import ThreadCard from '@/components/cards/ThreadCard'
import { fetchThreadById } from '@/lib/actions/thread.actions'
import { fetchUser } from '@/lib/actions/user.actions'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'



const ThreadDetailPage = async ({ params }: { params: { id: string } }) => {
    if (!params.id) return null
    const user = await currentUser()

    if (!user) return null
    const userInfo = await fetchUser(user.id)

    if (!userInfo?.onboarded) return redirect('/onboarding')

    const thread = await fetchThreadById(params.id)

    return (
        <section className='relative'>
            <div>
                <ThreadCard
                    key={thread._id}
                    id={thread._id}
                    currentUserId={user?.id || ''}
                    parentId={thread.parentId}
                    content={thread.text}
                    author={thread.author}
                    comunnity={thread.community}
                    createdAt={thread.createdAt}
                    comments={thread.comments}

                />
            </div>
        </section>
    )
}

export default ThreadDetailPage