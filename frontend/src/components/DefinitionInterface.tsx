import { useQuery } from "@tanstack/react-query";
import DefinitionCard from "./DefinitionCard"
import { get } from "../utils/api";
import type { Definition } from "../types";

const DefinitionInterface = ({word, handler} : {word: string, handler: React.Dispatch<React.SetStateAction<string>>}) => {
  const { 
    data,
    isLoading,
    isError
  } = useQuery({
    queryKey: [word], 
    queryFn: async () => {
      return await get(`translate/${word}/en`);
    },
    refetchOnWindowFocus: false
  })

  return (
    <div className="card card-border bg-base-100 w-96 mb-8">
      <div className="card-body">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-neutral-400">Definition</h1>
          <button className="btn btn-ghost btn-circle" onClick={() => handler("")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
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

export default DefinitionInterface