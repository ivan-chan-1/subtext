import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoadingPage from './pages/LoadingPage'
import TranscriptPage from './pages/TranscriptPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/load" element={<LoadingPage />} />
          <Route path="/transcript" element={<TranscriptPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
