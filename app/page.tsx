"use client"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/browser-client"
import { getProfileByUserId } from "@/db/profile"
import { ChatbotUIContext } from "@/context/context"
import { useContext, useEffect, useState } from "react"
import { getModelWorkspacesByWorkspaceId } from "@/db/models"

export default function HomePage() {
  const router = useRouter()
  const {
    profile,
    setProfile,
    setModels,
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
          const modelData = await getModelWorkspacesByWorkspaceId(workspace.id)
          setModels([
            {
              id: "custom-model",
              user_id: user.id,
              name: "Custom Model",
              model_id: "custom-model",
              base_url: "",
              api_key: "",
              created_at: new Date().toISOString(),
              context_length: 4096,
              description: "Custom model configuration",
              folder_id: null,
              sharing: "private",
              updated_at: null
            },
            ...modelData.models
          ])
          router.push(`/${workspace.id}/chat`)
        }
        
      } catch (error) {
        console.error('Error:', error)
      }
    }

    initializeUser()
  }, [router])

  return null
}