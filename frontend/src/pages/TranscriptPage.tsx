import { useState } from "react"
import LineCard from "../components/LineCard"
import Page from "../components/Page"
import DefinitionInterface from "../components/DefinitionInterface"

const TEST_TRANSCRIPT = [
    {
        'text': ['Hey', 'there', 'Hey', 'there', 'Hey', 'there', 'Hey', 'there'],
        'start': 0.0,
        'duration': 1.54
    },
    {
        'text': ['how','are', 'you'],
        'start': 1.54,
        'duration': 4.16
    }
]

const TranscriptPage = () => {
  const [word, setWord] = useState<string>("");
  const [active, setActive] = useState<number | null>(null);

  return (
    <Page>
        <div className="w-full flex flex-col">
          <h1 className="text-3xl my-4">Title of Video</h1>
          {/* <div className="h-full">
            <iframe width="80%" height="50%" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
          </div> */}

          <div className="w-full h-full flex gap-4">
            <div className="grow">
              <div className="flex flex-col gap-4">
                {TEST_TRANSCRIPT.map((l, i) => {
                  return (
                    <LineCard key={`line-${i}`} details={l} handler={setWord} active={active === i} activate={() => setActive(i)} />
                  )
                })}
              </div>
            </div>

            {word !== "" && <DefinitionInterface word={word} handler={setWord} />}
          </div>
        </div>
    </Page>
  )
}

export default TranscriptPage