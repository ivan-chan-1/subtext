const LINK_PLACEHOLDER = "youtube.com/watch?v="
const LinkInput = () => {
  return (
    <div>
      <input
        type="url"
        required
        placeholder={LINK_PLACEHOLDER}
        // pattern="^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=.*$"
        // title="Must be valid URL"
        className="input w-96 rounded-full"
      />
    </div>
  )
}

export default LinkInput