import PostThread from "@/components/forms/PostThread"
import ProfileHeader from "@/components/shared/ProfileHeader"
import ThreadsTab from "@/components/shared/ThreadsTab"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { profileTabs } from "@/constants"
import { fetchUser } from "@/lib/actions/user.actions"
import { currentUser } from "@clerk/nextjs"
import Image from "next/image"
import { redirect } from 'next/navigation'


const SearchPage = async () => {
  const user = await currentUser()

  if (!user) return null

  const userInfo = await fetchUser(user.id)

  // Fetch Users

  if (!userInfo?.onboarded) redirect('/onboarding')
  return (
    <section>
      <h1 className="head-text mb-10">Search</h1>
    </section>
  )
}

export default SearchPage