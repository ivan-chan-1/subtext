import { useParams } from "react-router-dom";
import Page from "../components/Page"
import NavBar from "../components/NavBar";
import YoutubeBookmarkCard from "../components/YoutubeBookmarkCard";

const BookmarkPage = () => {
  const { word } = useParams();

  return (
    <Page>
      <NavBar showMenu/>
      <h1 className="text-5xl">{word}</h1>
      <YoutubeBookmarkCard />
    </Page>
  )
}

export default BookmarkPage