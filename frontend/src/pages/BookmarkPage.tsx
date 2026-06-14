import { useParams } from "react-router-dom";
import Page from "../components/Page"
import NavBar from "../components/NavBar";
import YoutubeBookmarkCard from "../components/YoutubeBookmarkCard";
import DefinitionCard from "../components/DefinitionCard";

const definitions = [
  {
    meaning: "bright",
    example: "bright bright",
    pos: "noun",
    romanisation: "def"
  }
];

const videos = [
  "2lyygzfl1ZY"
];

const BookmarkPage = () => {
  const { word } = useParams();

  return (
    <Page>
      <NavBar className="mt-15 mb-8" showMenu/>
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl">{word}</h1>
        <h2 className="text-lg uppercase font-light text-neutral-400 mt-8">Definitions</h2>
        <div className="bg-base-100 p-4 rounded-lg border border-base-300">
          {definitions.map((d, i) => {
            return (
              <DefinitionCard key={`${word}-definition-${i}`} definition={d} />
            );
          })}
        </div>
        <h2 className="text-lg uppercase font-light text-neutral-400">Videos ({videos.length})</h2>
        <div className="flex flex-col gap-4">
          {word && (videos.map((v) => {
            return (
              <YoutubeBookmarkCard key={v} videoId={v} word={word} />
            );
          }))}
        </div>
      </div>
    </Page>
  )
}

export default BookmarkPage