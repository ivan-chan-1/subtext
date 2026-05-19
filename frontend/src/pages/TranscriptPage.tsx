import { useState } from "react"
import LineCard from "../components/LineCard"
import Page from "../components/Page"
import DefinitionInterface from "../components/DefinitionInterface"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { get } from "../utils/api"
import LoadingPage from "./LoadingPage"
import type { LineDetails, RawLineDetails } from "../types"

const TranscriptPage = () => {
  const { vidId } = useParams();

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
    }
  })

  const titleQuery = useQuery({
    queryKey: ["title", vidId],
    queryFn: async () => {
      return await get(`transcript/title/${vidId}`);
    }
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  console.log(data)

  return (
    <Page>
        <div className="w-full flex flex-col">
          <h1 className="text-3xl my-4">{titleQuery.isError ? "Title Not Found" : titleQuery.data}</h1>
          {/* <div className="h-full">
            <iframe width="80%" height="50%" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
          </div> */}

          <div className="w-full h-full flex gap-4">
            <div className="grow">
              <div className="flex flex-col gap-4">
                {data.map((l: LineDetails, i: number) => {
                  return (
                    <LineCard key={`line-${i}`} details={l} handler={setWord} active={active === i} activate={() => setActive(i)} />
                  )
                })}
              </div>
            </div>

            {word !== "" && <DefinitionInterface word={word} handler={setWord} />}
          </div>
        </div>
    </Page>
  )
}

export default TranscriptPage