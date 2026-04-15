import type { LineDetails } from "../types";

const LineCard = ({details, handler}: {details: LineDetails, handler: React.Dispatch<React.SetStateAction<string>>}) => {
  const handleClick = (word: string) => {
    handler(word);
  };

  const formatTime = (raw: number) => {
    const mins = Math.floor(raw / 60);
    const secs = Math.floor(raw % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="card card-border bg-base-100">
      <div className="card-body">
        <div className="flex gap-6">
          <div className="flex flex-col justify-center items-center w-20">
            <div className=" text-neutral-400 rounded-full bg-neutral-100 px-2">
              {formatTime(details.start)}
            </div>
          </div>
          <div>
            {details.text.map((w: string) => {return (<><a className="link link-hover text-lg" onClick={() => handleClick(w)}>{w}</a>{" "}</>)})}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineCard;
