import type {ReactNode } from "react"
import { Toaster } from "react-hot-toast"

const Page = ({children}: {children: ReactNode}) => {
  return (
    <div className="min-h-screen px-25 flex flex-col">
      {children}
      <Toaster />
    </div>
  )
}

export default Page