import type { ConvertData } from "../types";

const LINK_PLACEHOLDER = "youtube.com/watch?v="
const PATTERN = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/

const LinkInput = ({onChange}: {onChange: React.Dispatch<React.SetStateAction<ConvertData>>}) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const match = e.target.value.match(PATTERN);
    
    if (match) {
      onChange(prev => ({...prev, vidId: match[1]}));
    }
  }

  return (
    <div>
      <input
        type="url"
        required
        placeholder={LINK_PLACEHOLDER}
        // pattern={PATTERN}
        className="input w-96 rounded-full"
        onChange={(e) => handleChange(e)}
      />
      {/* <div className="validator-hint hidden">Must be valid Youtube URL</div> */}
    </div>
  )
}

export default LinkInput