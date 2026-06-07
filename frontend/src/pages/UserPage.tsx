import NavBar from "../components/NavBar"
import Page from "../components/Page"

const USER = "User"

const UserPage = () => {

  return (
    <Page>
      <NavBar showMenu/>
      <h1 className="text-5xl">Hello, {USER}</h1>
      <div>
        <div className="card w-96 card-sm bg-base-100 shadow-lg">
          <div className="card-body flex flex-col">
            <h1 className="text-xl">Word</h1>

            {/* Vocab Stats */}
            <div className="flex items-center gap-1 justify-between w-full">
              {/* Bookmark */}
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
                <p>3</p>
              </div>
              
              <span className="text-neutral-500 uppercase">Last SEEN: {"01/01/2025"}</span>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default UserPage