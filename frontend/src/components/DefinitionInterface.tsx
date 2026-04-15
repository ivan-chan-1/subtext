import DefinitionCard from "./DefinitionCard"

const DefinitionInterface = ({word, handler} : {word: string, handler: React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-neutral-400">Definition</h1>
          <button className="btn btn-ghost btn-circle" onClick={() => handler("")}>X</button>
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