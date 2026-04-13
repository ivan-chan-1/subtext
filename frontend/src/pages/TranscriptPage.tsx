import LineCard from "../components/LineCard"
import Page from "../components/Page"

const TEST_TRANSCRIPT = [
    {
        'text': ['Hey', 'there'],
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
  return (
    <Page>
        <div className="w-full flex flex-col">
          <h1 className="">Title of Video</h1>
          {/* <div className="h-full">
            <iframe width="80%" height="50%" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
          </div> */}

          <div className="w-full h-full flex gap-4">
            <div className="grow">
              <div className="flex flex-col gap-4">
                {TEST_TRANSCRIPT.map((l) => {
                  return (
                    <LineCard text={l.text} start={l.start} />
                  )
                })}
              </div>
            </div>

            <div className="card card-border bg-base-200 w-96">
              <div className="card-body">
                
              </div>
            </div>
          </div>
        </div>
    </Page>
  )
}

export default TranscriptPage