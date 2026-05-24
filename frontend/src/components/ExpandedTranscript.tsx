import { useState } from "react"
import LineCard from "../components/LineCard"
import DefinitionInterface from "../components/DefinitionInterface"
import { useQuery } from "@tanstack/react-query"
import { get } from "../utils/api"
import type { LineDetails, RawLineDetails } from "../types"

const ExpandedTranscript = ({vidId, currentTime} : {vidId: string, currentTime: number}) => {
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
      console.log("Before")
      console.log(data)
      return data.map((l: RawLineDetails) => ({
        ...l,
        text: l.text.replace("\n", "").split(/\s+/)
      }))
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false
  })

  return (
    <div className="flex justify-center gap-4">
      <div className="flex flex-col gap-4 overflow-auto h-200 w-213.5">
        {data && data.map((l: LineDetails, i: number) => {
          return (
            <LineCard key={`line-${i}`} details={l} handler={setWord} active={active === i} activate={() => setActive(i)} currentTime={currentTime}/>
          )
        })}
      </div>

      {word !== "" && <DefinitionInterface word={word} handler={setWord} />}
    </div>
  )
}

export default ExpandedTranscript