import type {ReactNode } from "react"

const Page = ({children}: {children: ReactNode}) => {
  return (
    <div className="min-w-screen min-h-screen px-25 flex">
      {children}
    </div>
  )
}

export default Page