import ConvertBar from "../components/ConvertBar";
import Page from "../components/Page";

const LandingPage = () => {
  return (
    <Page>
      <div className="w-full flex justify-center items-center">
        <div>
          <ConvertBar />
        </div>
      </div>
    </Page>
  )
}

export default LandingPage