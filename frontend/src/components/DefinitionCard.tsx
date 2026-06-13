import type { Definition } from "../types"

const DefinitionCard = ({definition, divider = false} : {definition: Definition, divider?: boolean}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <p className="uppercase text-xs text-neutral-400">{definition.pos}</p>
        <p className="text-neutral-400">{definition.romanisation}</p>
      </div>
      <p className="my-2">{definition.meaning}</p>
      <p className="uppercase text-xs font-medium">{"Example"}</p>
      <p className="italic">{definition.example}</p>
      {divider && <div className="divider"/>}
    </div>
  )
}

export default DefinitionCard