import ConvertBar from "../components/ConvertBar";
import Page from "../components/Page";
import TextRotate from "../components/TextRotate";

const LandingPage = () => {
  return (
    <Page>
      <div className="w-full flex flex-col justify-center items-center">
        <TextRotate />
        <div className="mt-4">
          <ConvertBar />
        </div>
      </div>
    </Page>
  )
}

export default LandingPage