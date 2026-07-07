import { useQuery } from "@tanstack/react-query"
import NavBar from "../components/NavBar"
import Page from "../components/Page"
import WordCard from "../components/WordCard"
import { get } from "../utils/api"
import { Link } from "react-router-dom"

const UserPage = () => {
  const { 
    data,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["getAllBookmarks"], 
    queryFn: async () => {
      return await get(`user/bookmarks/all?${new URLSearchParams({"language": "en"})}`);
    },
    refetchOnWindowFocus: false
  })

  return (
    <Page>
      <NavBar className="my-15" showMenu/>
      <h1 className="text-5xl mb-15">Hello 👋</h1>
      <div className="mb-8">
        <select defaultValue="Pick a language" className="select rounded-full">
          <option disabled={true}>Pick a language</option>
          <option>English</option>
          <option>Korean</option>
          <option>Chinese</option>
        </select>
      </div>
      <h2 className="text-lg uppercase font-light text-neutral-400 mb-4">bookmarked</h2>
      {data ?? data.length === 0 ?
        <p>No bookmarks found. Explore <Link className="link" to="/">now</Link>!</p>
        :
        <div className="grid grid-cols-3 gap-4">
          {data.map((w, i) => {
            return(
              <WordCard key={`${w}-${i}`} details={w} />
            )
          })}
        </div>
      }
    </Page>
  )
}

export default UserPage