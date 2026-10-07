import { useParams } from "react-router-dom";
import Page from "../components/Page"
import NavBar from "../components/NavBar";
import YoutubeBookmarkCard from "../components/YoutubeBookmarkCard";
import DefinitionCard from "../components/DefinitionCard";
import { supabase } from "../lib/supabase";
import { useQuery } from "@tanstack/react-query";
import type { VocabData } from "../types";

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
  const { vocabId } = useParams();
  console.log("HERRE")
  console.log(vocabId)
  const {
    data,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["getVocabDetails"], 
    queryFn: async () => {
      const { data, error } = await supabase.from("vocabulary").select("*").eq("id", vocabId).single<VocabData>();;
      if (error) throw error;
      return data;
    },
    refetchOnWindowFocus: false
  })

  if (!data) {
    return;
  }

  

  return (
    <Page>
      <NavBar className="mt-15 mb-8" showMenu/>
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl">{data.vocab}</h1>
        <h2 className="text-lg uppercase font-light text-neutral-400 mt-8">Definitions</h2>
        <div className="flex flex-col bg-base-100 p-4 gap-4 rounded-lg border border-base-300">
          {data.definitions.map((d, i) => {
            return (
              <DefinitionCard key={`${data.vocab}-definition-${i}`} definition={d} />
            );
          })}
        </div>
        <h2 className="text-lg uppercase font-light text-neutral-400">Videos ({videos.length})</h2>
        <div className="flex flex-col gap-4">
          {data && (videos.map((v) => {
            return (
              <YoutubeBookmarkCard key={v} videoId={v} word={data.vocab} />
            );
          }))}
        </div>
      </div>
    </Page>
  )
}

export default BookmarkPage