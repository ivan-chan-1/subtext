const DefinitionCard = ({word} : {word: string}) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl lowercase">{word}</h1>
      <div className="flex items-center gap-4">
        <p className="uppercase text-xs text-neutral-400">{"noun"}</p>
        <p className="text-neutral-400">{"romanisation"}</p>
      </div>
      <p className="my-2">{"a common English exclamation, interjection, or noun used as a greeting, a way to attract attention, or a way to express surprise, especially when starting telephone conversations"}</p>
      <p className="uppercase text-xs font-medium">{"Example"}</p>
      <p className="italic">{"Example of use"}</p>
      <div className="border-2 rounded-md p-2 mt-4">
        <p>AI Insights</p>
      </div>
    </div>
  )
}

export default DefinitionCard