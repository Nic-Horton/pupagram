import CreatePost from './CreatePost'
import Home from './Home'
import ProfileLink from './ProfileLink'
import Search from './Search'

const SidebarItems = () => {
  return (
    <>
      <Home />
      <Search />
      {/* <Notifications /> */}
      <CreatePost />
      <ProfileLink />
    </>
  )
}

export default SidebarItems