import ConvertBar from "../components/ConvertBar";
import NavBar from "../components/NavBar";
import Page from "../components/Page";
import TextRotate from "../components/TextRotate";

const LandingPage = () => {
  return (
    <Page>
      <div className="relative min-h-screen">
        <div className="absolute top-15 w-full">
          <NavBar />
        </div>
        <div className="flex flex-col justify-center items-center min-h-screen">
          <TextRotate />
          <div className="mt-4">
            <ConvertBar />
          </div>
        </div>
      </div>
    </Page>
  )
}

export default LandingPage