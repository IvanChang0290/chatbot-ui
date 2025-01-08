"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

const SHARED_WORKSPACE_ID = "fd1ba426-fac2-4c38-8479-74a5d6bf016a"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    router.push(`/${SHARED_WORKSPACE_ID}/chat`)
  }, [router])

  return null
}
