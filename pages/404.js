import { useRouter } from "next/router"
import { useEffect } from "react"
import Link from "next/link"

const ErrorPage = () => {
  const router = useRouter()
//useEffect
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    },3000)
  }, [])

  return (
    <div>
      <h1 style={{ color: 'red', textAlign: 'center' }}>This page notFound</h1>
      <Link href="/">Go to Home</Link>
    </div>
  )
}

export default ErrorPage