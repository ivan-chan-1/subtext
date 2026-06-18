import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoadingPage from './pages/LoadingPage'
import TranscriptPage from './pages/TranscriptPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import LoginPage from './pages/LoginPage'
import UserPage from './pages/UserPage'
import BookmarkPage from './pages/BookmarkPage'
import AuthProvider from './contexts/AuthProvider'
import ProtectedRoute from './components/ProtectedRoute'

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<ProtectedRoute auth><LoginPage /></ProtectedRoute>} />
              <Route path="/user" element={<ProtectedRoute><UserPage /></ProtectedRoute>} />
              <Route path="/load" element={<LoadingPage />} />
              <Route path="/transcript/:vidId" element={<TranscriptPage />} />
              <Route path="/transcript" element={<Navigate to="/" replace />} />
              <Route path="/bookmark/:word" element={<ProtectedRoute><BookmarkPage /></ProtectedRoute>} />
              <Route path="/bookmark" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
