import type { LineDetails } from "../types";

const LineCard = ({details, handler, active, activate}: {details: LineDetails, handler: React.Dispatch<React.SetStateAction<string>>, active: boolean, activate: () => void}) => {
  const handleClick = (word: string) => {
    handler(word.replace(/[\p{P}\p{S}]/gu, ""));
    activate();
  };

  const formatTime = (raw: number) => {
    const mins = Math.floor(raw / 60);
    const secs = Math.floor(raw % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className={`card card-border bg-base-100 ${active ? "border-amber-300" : ""}`}>
      <div className="card-body">
        <div className="flex gap-6">
          <div className="flex flex-col justify-center items-center w-20">
            <div className={`${active ? "text-amber-600 bg-amber-100 font-semibold": "text-neutral-400 bg-neutral-100"} rounded-full px-2`}>
              {formatTime(details.start)}
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {details.text.map((w: string, i: number) => {return (<><a key={`${details.start}-word-${i}`}className="animated-link text-lg" onClick={() => handleClick(w)}>{w}</a></>)})}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineCard;
