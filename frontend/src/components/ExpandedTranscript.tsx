import { useState } from "react"
import LineCard from "../components/LineCard"
import DefinitionInterface from "../components/DefinitionInterface"
import { useMutation, useQuery } from "@tanstack/react-query"
import { get } from "../utils/api"
import type { Definition, LineDetails, RawLineDetails } from "../types"
import { supabase } from "../lib/supabase"

const ExpandedTranscript = ({vidId, currentTime, player} : {vidId: string, currentTime: number, player: React.RefObject<any>}) => {
  const [word, setWord] = useState<string>("");
  const [active, setActive] = useState<number | null>(null);

  const { 
    data,
    isLoading,
    isError
  } = useQuery({
    queryKey: [vidId], 
    queryFn: async () => { 
      return await get(`transcript/${vidId}/en`);
    },
    select: (data) => {
      return data.map((l: RawLineDetails) => ({
        ...l,
        text: l.text.replace("\n", "").split(/\s+/)
      }))
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false
  })

  const mutation = useMutation({
    mutationFn: async ({definitions, context}: {definitions: Definition[], context: string}) => {
      const { data } = await supabase.auth.getUser();
      const bookmarkData = {
        "p_definitions": definitions,
        "p_type": "word",
        "p_vocab": word,
        "p_context": context,
        "p_vid_id": vidId,
        "p_vid_timestamp": Math.floor(currentTime),
        "p_snippet": "",
        "p_language": "",
        "p_user_id": data.user?.id
      }

      return await supabase.rpc("bookmark_vocab", bookmarkData);
    }
  });

  const handleBookmark = async (definitions: Definition[], context: string) => {
    mutation.mutate({ definitions: definitions, context: context });
  }

  return (
    <div className="flex justify-center gap-4">
      <div className="flex flex-col gap-4 overflow-auto h-200 w-213.5">
        {data && data.map((l: LineDetails, i: number) => {
          return (
            <LineCard key={`line-${i}`} details={l} handler={setWord} active={active === i} activate={() => setActive(i)} currentTime={currentTime} player={player} />
          )
        })}
      </div>

      {word !== "" && <DefinitionInterface word={word} handler={setWord} bookmarkHandler={handleBookmark}/>}
    </div>
  )
}

export default ExpandedTranscript