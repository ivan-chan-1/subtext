const DefinitionCard = ({word, handler} : {word: string, handler: React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <div className="card card-border bg-base-200 w-96">
        <div className="card-body">
        <div className="card-actions justify-end"><button className="btn btn-ghost" onClick={() => handler("")}>Close</button></div>
        <div className="card-title">{word}</div>
        </div>
    </div>
  )
}

export default DefinitionCard