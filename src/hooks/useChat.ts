import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { chatService } from "@/services/chat.service"
import type { ChatMessageDto } from "@/interface/api.types"

export function useChat() {
    const { i18n } = useTranslation()
    const [messages, setMessages] = useState<ChatMessageDto[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    const send = useCallback(
        async (text: string) => {
            const trimmed = text.trim()
            if (!trimmed || loading) return

            const userMessage: ChatMessageDto = { role: "user", content: trimmed }
            const historyToSend = messages

            setMessages((prev) => [...prev, userMessage])
            setLoading(true)
            setError(null)

            try {
                const response = await chatService.send({
                    message: trimmed,
                    language: i18n.language.startsWith("en") ? "en" : "pt",
                    history: historyToSend,
                })
                const assistantMessage: ChatMessageDto = {
                    role: "assistant",
                    content: response.answer,
                }
                setMessages((prev) => [...prev, assistantMessage])
            } catch (err) {
                setError(err instanceof Error ? err : new Error("chat request failed"))
            } finally {
                setLoading(false)
            }
        },
        [messages, loading, i18n.language],
    )

    const clear = useCallback(() => {
        setMessages([])
        setError(null)
    }, [])

    return { messages, loading, error, send, clear }
}
