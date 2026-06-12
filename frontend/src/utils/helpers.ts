export const formatTime = (raw: number) => {
  const mins = Math.floor(raw / 60);
  const secs = Math.floor(raw % 60);
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};