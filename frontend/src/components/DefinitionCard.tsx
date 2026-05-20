import type { Definition } from "../types"

const DefinitionCard = ({word, definition} : {word: string, definition: Definition}) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl lowercase">{word}</h1>
      <div className="flex items-center gap-4">
        <p className="uppercase text-xs text-neutral-400">{definition.pos}</p>
        <p className="text-neutral-400">{definition.romanisation}</p>
      </div>
      <p className="my-2">{definition.meaning}</p>
      <p className="uppercase text-xs font-medium">{"Example"}</p>
      <p className="italic">{definition.example}</p>
      <div className="divider"/>
    </div>
  )
}

export default DefinitionCard