import Page from "../components/Page"

const LoadingPage = () => {
  return (
    <Page>
        <div className="flex w-full justify-center items-center">
            <div className="flex flex-col items-center gap-4">
                <span className="loading loading-spinner loading-xl"></span>
                <p>Processing video</p>
            </div>
        </div>
    </Page>
  )
}

export default LoadingPage