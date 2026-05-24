import YouTube from "react-youtube";
import Page from "../components/Page"
import { useParams } from "react-router-dom"
import ExpandedTranscript from "../components/ExpandedTranscript";
import { useEffect, useRef, useState } from "react";

const opts = {
  height: '480',
  width: '854'
};

const frameStyle = {
  borderRadius: "var(--radius-box)",
  overflow: "hidden"
};

const TranscriptPage = () => {
  const { vidId } = useParams();

  const playerRef = useRef<any>(null)
  const [currentTime, setCurrentTime] = useState(0)

  const onReady = (event: any) => {
    playerRef.current = event.target
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        setCurrentTime(playerRef.current.getCurrentTime())
      }
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <Page>
        <div className="w-full flex flex-col gap-5">
          <div className="my-12 flex justify-center">
            <YouTube videoId={vidId} opts={opts} style={frameStyle} onReady={onReady}/>
          </div>
          <ExpandedTranscript vidId={vidId ? vidId : ""} currentTime={currentTime} />
        </div>
    </Page>
  )
}

export default TranscriptPage