import { LLM } from "@/types"

export const CUSTOM_LLM_LIST: LLM[] = [
  {
    modelId: "custom-model",
    modelName: "Custom Model",
    provider: "custom",
    hostedId: "custom-model",
    platformLink: "",
    imageInput: false,
    pricing: {
      currency: "USD",
      unit: "1K tokens",
      inputCost: 0.001,
      outputCost: 0.002
    }
  }
]
