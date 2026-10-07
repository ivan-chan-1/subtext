import { useNavigate } from "react-router-dom";
import type { WordDetails } from "../types";

const WordCard = ({ details }: { details: WordDetails }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/bookmark/${details.vocabId}`)
  }

  return (
    <div className="card card-sm bg-base-100 border border-base-300" onClick={handleClick}>
      <div className="card-body flex flex-col gap-4">
        <h1 className="text-xl lowercase">{details.word}</h1>
        {/* Definitions */}
        <div className="bg-base-200 rounded-sm p-2">
          <ol className="list-decimal list-outside pl-4">
            {details.definitions.map((d, i) => {return (
              <li key={`${details.word}-def-${i}`}>{d}</li>
            )})}
          </ol>
        </div>
        {/* Vocab Stats */}
        <div className="flex items-center gap-1 justify-between w-full mt-auto" >
          {/* Bookmark */}
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
            <p>{details.bookmarks}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordCard;
