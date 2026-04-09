const LANGUAGES = ["English", "Korean"]

const Selector = () => {
  return (
    <select defaultValue="Pick a color" className="select w-48">
        <option disabled={true}>Video source language</option>
        {LANGUAGES.map((l) => {
          return (
            <option>{l}</option>
          )
        })}
    </select>
  )
}

export default Selector