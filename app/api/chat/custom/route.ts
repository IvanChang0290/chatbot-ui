import { ServerRuntime } from "next"
import { StreamingTextResponse } from "ai"

export const runtime: ServerRuntime = "edge"

export async function POST(request: Request) {
  try {
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(
          new TextEncoder().encode("The weather shapes our daily lives, influencing everything from our mood to our plans. Bright, sunny days often inspire outdoor activities and energize us, while rainy or overcast conditions can encourage a cozy day indoors. Weather patterns also play a crucial role in agriculture, transportation, and even energy consumption, reminding us of the delicate balance between nature and human life. Whether it’s a gentle breeze or a powerful storm, the weather remains a dynamic force that constantly affects our world.")
        )
        controller.close()
      }
    })

    return new StreamingTextResponse(stream)
  } catch (error: any) {
    let errorMessage = error.message || "An unexpected error occurred"
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    })
  }
}
