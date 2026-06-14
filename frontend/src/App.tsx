import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoadingPage from './pages/LoadingPage'
import TranscriptPage from './pages/TranscriptPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import LoginPage from './pages/LoginPage'
import UserPage from './pages/UserPage'
import BookmarkPage from './pages/BookmarkPage'
import AuthProvider from './contexts/AuthProvider'

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/load" element={<LoadingPage />} />
              <Route path="/transcript/:vidId" element={<TranscriptPage />} />
              <Route path="/bookmark/:word" element={<BookmarkPage />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
