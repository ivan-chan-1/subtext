import { useQuery } from "@tanstack/react-query";
import DefinitionCard from "./DefinitionCard"
import { get } from "../utils/api";
import type { Definition } from "../types";
import { supabase } from "../supabase";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const DefinitionInterface = ({word, handler, bookmarkHandler} : {word: string, handler: React.Dispatch<React.SetStateAction<string>>, bookmarkHandler: (definitions: any, context: string) => void }) => {
  const { 
    data,
    isLoading,
    isError
  } = useQuery({
    queryKey: [word], 
    queryFn: async () => {
      return await get(`vocab/translate?${new URLSearchParams({ word: word, lang: "en" })}`);
    },
    refetchOnWindowFocus: false
  })

  const handleBookmarkClick = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      toast(<span>To bookmark, please <Link className="link" to="/">login</Link>.</span>)
    }

    bookmarkHandler(data.definitions, data.context);
  }

  return (
    <div className="card card-border bg-base-100 w-96 mb-8">
      <div className="card-body">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-neutral-400">Definition</h1>
          <div className="flex gap-2">
            <button className="btn btn-md btn-ghost rounded-full px-2 font-medium" onClick={() => handleBookmarkClick()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
              </svg>
              {0}
            </button>
            <button className="btn btn-ghost btn-circle" onClick={() => handler("")}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl lowercase">{word}</h1>
          {data && data.definitions.map((d: Definition, i: number) => {
            return (
              <DefinitionCard key={`definition-${i}`} definition={d} />
            );
          })}
          <div className="border-2 rounded-md p-2 mt-4">
            <p className="text-neutral-400">Insights</p>
            <p className="my-2">{data && data.cultural}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DefinitionInterface;