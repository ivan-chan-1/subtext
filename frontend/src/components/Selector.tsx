import type { ConvertData } from "../types";

const LANGUAGES = ["English", "Korean"]

const Selector = ({onChange}: {onChange: React.Dispatch<React.SetStateAction<ConvertData>>}) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {
    onChange(prev => ({...prev, lang: e.target.value}));
  }

  return (
    <select defaultValue="Pick a color" className="select w-48 rounded-full" onChange={(e) => handleChange(e)}>
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