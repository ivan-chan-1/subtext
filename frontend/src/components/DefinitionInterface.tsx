import DefinitionCard from "./DefinitionCard"

const DefinitionInterface = ({word, handler} : {word: string, handler: React.Dispatch<React.SetStateAction<string>>}) => {
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
          <DefinitionCard word={word} />
          <div className="divider"/>
        </div>
      </div>
    </div>
  )
}

export default DefinitionInterface