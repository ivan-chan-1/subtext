import type {ReactNode } from "react"

const Page = ({children}: {children: ReactNode}) => {
  return (
    <div className="min-h-screen px-25 flex flex-col">
      {children}
    </div>
  )
}

export default Page