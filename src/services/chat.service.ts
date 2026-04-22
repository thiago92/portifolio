import { api } from "@/lib/api-client"
import type { ChatRequestDto, ChatResponseDto } from "@/interface/api.types"

export const chatService = {
    send: (request: ChatRequestDto) =>
        api.post<ChatResponseDto>("/api/chat", request).then((r) => r.data),
}
