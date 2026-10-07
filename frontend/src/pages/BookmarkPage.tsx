import { useParams } from "react-router-dom";
import Page from "../components/Page"
import NavBar from "../components/NavBar";
import YoutubeBookmarkCard from "../components/YoutubeBookmarkCard";
import DefinitionCard from "../components/DefinitionCard";
import { supabase } from "../lib/supabase";
import { useQuery } from "@tanstack/react-query";
import type { BookmarkData, VocabData } from "../types";

const videos = [
  "QKae1k1BDdA"
];

const BookmarkPage = () => {
  const { vocabId } = useParams();

  const {
    data: vocab,
    isLoading: isVocabLoading,
    isError: isVocabError
  } = useQuery({
    queryKey: ["getVocabDetails", vocabId], 
    queryFn: async () => {
      const { data, error } = await supabase.from("vocabulary").select("*").eq("id", vocabId).single<VocabData>();
      if (error) throw error;
      return data;
    },
    refetchOnWindowFocus: false
  });

  const {
    data: bookmarks,
    isLoading: isBookmarksLoading,
    isError: isBookmarksError
  } = useQuery({
    queryKey: ["getBookmarkDetails"], 
    queryFn: async () => {
      const { data, error } = await supabase.from("bookmarks").select("*").eq("vocab_id", vocabId);
      if (error) throw error;
      return data;
    },
    refetchOnWindowFocus: false
  });

  if (!vocab || !bookmarks) {
    return;
  }

  return (
    <Page>
      <NavBar className="mt-15 mb-8" showMenu/>
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl">{vocab.vocab}</h1>
        <h2 className="text-lg uppercase font-light text-neutral-400 mt-8">Definitions</h2>
        <div className="flex flex-col bg-base-100 p-4 gap-4 rounded-lg border border-base-300">
          {vocab.definitions.map((d, i) => {
            return (
              <DefinitionCard key={`${vocab.vocab}-definition-${i}`} definition={d} />
            );
          })}
        </div>
        <h2 className="text-lg uppercase font-light text-neutral-400">Videos ({bookmarks.length})</h2>
        <div className="flex flex-col gap-4">
          {bookmarks && (bookmarks.map((v: BookmarkData) => {
            return (
              <YoutubeBookmarkCard key={v.id} bookmark={v} word={vocab.vocab} />
            );
          }))}
        </div>
      </div>
    </Page>
  )
}

export default BookmarkPage