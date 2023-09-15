import UserCard from "@/components/cards/UserCard"
import PostThread from "@/components/forms/PostThread"
import ProfileHeader from "@/components/shared/ProfileHeader"
import ThreadsTab from "@/components/shared/ThreadsTab"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { profileTabs } from "@/constants"
import { fetchUser, fetchUsers } from "@/lib/actions/user.actions"
import { currentUser } from "@clerk/nextjs"
import Image from "next/image"
import { redirect } from 'next/navigation'


const SearchPage = async () => {
  const user = await currentUser()

  if (!user) return null

  const userInfo = await fetchUser(user.id)


  const results = await fetchUsers({
    userId: user.id,
    searchString: '',
    pageNumber: 1,
    pageSize: 25
  })


  if (!userInfo?.onboarded) redirect('/onboarding')
  return (
    <section>
      <h1 className="head-text mb-10">Search</h1>
      
      {/* Search Bar */}
      
      <div className="mt-14 flex flex-col gap-9">
        {
          results.users.length === 0 ? (
            <p className="no-result">No users</p>
          ) : (
            <>
              {results.users.map(person=>(
                <UserCard 
                  key={person.id}
                  id={person.id}
                  name={person.name}
                  username={person.username}
                  imgUrl={person.image}
                  personType="User"
                />
              ))}
            </>
          )
        }
      </div>
    </section>
  )
}

export default SearchPage