import { useQuery } from "@tanstack/react-query";
import type { BookmarkData } from "../types";
import { get } from "../utils/api";
import { formatDate, formatTime } from "../utils/helpers"

const YoutubeBookmarkCard = ({ bookmark, word } : { bookmark: BookmarkData, word: string }) => {
  const { 
    data: title,
    isLoading,
    isError
  } = useQuery({
    queryKey: [bookmark], 
    queryFn: async () => { 
      return await get(`transcript/title/${bookmark.vid_id}`);
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false
  });

  const splitSnippet = (l: string) => {
    return l.split(" ");
  };

  return (
    <div className="flex flex-row gap-8 bg-base-100 border border-base-300 rounded-lg px-4 py-8">
      {/* Youtube Thumbnail and Stats */}
      <div className="flex flex-col gap-4 shrink-0 w-80 justify-between">
        <img src={`https://img.youtube.com/vi/${bookmark.vid_id}/mqdefault.jpg`} alt="thumbnail" className="rounded-lg w-80"/>
        <p className="text-neutral-500 uppercase text-xs">Saved on: {formatDate(bookmark.visited_at)}</p>
      </div>

      {/* Snippet and Insights */}
      <div className="flex flex-col gap-4 grow">
        <p className="text-md line-clamp-1">{title}</p>
        <div className="flex flex-col gap-1">
          <p className="uppercase text-neutral-500 text-xs">Snippet</p>
          <div className="flex flex-row border border-base-300 rounded-lg p-4 text-md justify-between">
            <div className="flex flex-row gap-4">
              <div className="flex items-center text-neutral-400 bg-neutral-100 rounded-full px-2 text-xs">
                {formatTime(bookmark.vid_timestamp)}
              </div>
              <div className="flex flex-row gap-1">
                {splitSnippet(bookmark.snippet).map((t, i) => {
                  return (
                    <span key={`${bookmark.vid_id}-snippet-${i}`} className={t.includes(word) ? "word-highlight" : ""}>{t}</span>
                  );
                })}
              </div>
            </div>
            <a href={`https://www.youtube.com/watch?v=${bookmark.vid_id}&t=${bookmark.vid_timestamp}s`} target="_blank" rel="noopener noreferrer"className="btn btn-circle btn-ghost btn-xs">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="uppercase text-neutral-500 text-xs">Insight</p>
          <p className="text-sm">{bookmark.context}</p>
        </div>
      </div>
    </div>
  )
}

export default YoutubeBookmarkCard