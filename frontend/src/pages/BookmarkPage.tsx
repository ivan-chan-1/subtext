import { useParams } from "react-router-dom";
import Page from "../components/Page"
import NavBar from "../components/NavBar";
import YoutubeBookmarkCard from "../components/YoutubeBookmarkCard";
import DefinitionCard from "../components/DefinitionCard";

const definitions = [
  {
    meaning: "a popular dairy product made from milk, usually from cows, goats, or sheep, shaped into soft or hard blocks",
    example: "The initiative puts red meat, chicken, cheese, vegetables and fruits at the top and grains like bread, cereal, rice and pasta at the bottom.",
    pos: "noun",
    romanisation: ""
  }
];

const videos = [
  "QKae1k1BDdA"
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