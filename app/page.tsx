"use client"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/browser-client"
import { getProfileByUserId } from "@/db/profile"
import { ChatbotUIContext } from "@/context/context"
import { useContext, useEffect, useState } from "react"

export default function HomePage() {
  const router = useRouter()
  const {
    profile,
    setProfile,
  } = useContext(ChatbotUIContext)

  useEffect(() => {
    const initializeUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.signInWithPassword({
          email: process.env.NEXT_PUBLIC_SHARED_EMAIL!,
          password: process.env.NEXT_PUBLIC_SHARED_PASSWORD!
        })

        if (!session) {
          throw new Error("Failed to sign in")
        }
        
        const user = session.user
        const profile = await getProfileByUserId(user.id)
        setProfile(profile)

        const { data: workspace } = await supabase
          .from('workspaces')
          .select('id')
          .eq('user_id', session.user.id)
          .single()

        if (workspace) {
          router.push(`/${workspace.id}/chat`)
        }
        
      } catch (error) {
        console.error('Error:', error)
        // Handle error appropriately
      }
    }

    initializeUser()
  }, [router])

  return null
}