import NavBar from "../components/NavBar"
import Page from "../components/Page"
import WordCard from "../components/WordCard"

const USER = "User"

const wordData = [
  {
    word: "Ephemeral",
    definitions: [
      "Lasting for a very short time",
      "Transitory; short-lived",
    ],
    bookmarks: 12,
    timestamp: "2025-03-15T08:23:11+00:00"
  },
  {
    word: "Luminous",
    definitions: [
      "Emitting or reflecting light; glowing",
      "Full of light; bright",
      "Clearly expressed; easy to understand",
      "Clearly expressed; easy to understand"
    ],
    bookmarks: 7,
    timestamp: "2025-01-02T14:05:44+00:00"
  },
  {
    word: "Melancholy",
    definitions: [
      "A feeling of pensive sadness with no obvious cause",
      "Having a feeling of melancholy; sad and pensive"
    ],
    bookmarks: 3,
    timestamp: "2025-06-01T19:47:30+00:00"
  },
  {
    word: "Serendipity",
    definitions: [
      "The occurrence of events by chance in a happy or beneficial way",
    ],
    bookmarks: 21,
    timestamp: "2024-11-18T11:30:00+00:00"
  },
]

const UserPage = () => {

  return (
    <Page>
      <NavBar showMenu/>
      <h1 className="text-5xl">Hello, {USER}</h1>
      <div className="grid grid-cols-3 gap-4">
        {wordData.map((w, i) => {
          return(
            <WordCard key={`${w}-${i}`} details={w} />
          )
        })}
      </div>
    </Page>
  )
}

export default UserPage