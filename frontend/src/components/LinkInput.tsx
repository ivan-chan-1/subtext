const LINK_PLACEHOLDER = "youtube.com/watch?v="
const LinkInput = () => {
  return (
    <div>
      <label className="input validator w-96">
      <input
        type="url"
        required
        placeholder={LINK_PLACEHOLDER}
        pattern="^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=.*$"
        title="Must be valid URL"
      />
      </label>
      <p className="validator-hint">Must be valid Youtube URL</p>
    </div>
  )
}

export default LinkInput