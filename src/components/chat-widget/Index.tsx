import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faComments,
    faPaperPlane,
    faRobot,
    faTriangleExclamation,
    faXmark,
} from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { useTranslation } from "react-i18next"
import { useChat } from "@/hooks/useChat"

const INTRO_STORAGE_KEY = "chatIntroDismissed"
const STATUS_KEYS = ["chatStatus1", "chatStatus2", "chatStatus3", "chatStatus4"]
const STATUS_INTERVAL_MS = 2000
const WHATSAPP_NUMBER = "5541999454655"

export default function ChatWidget() {
    const { t } = useTranslation()
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState("")
    const [showIntro, setShowIntro] = useState(false)
    const [statusIndex, setStatusIndex] = useState(0)
    const { messages, loading, error, send } = useChat()
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages, loading, statusIndex])

    useEffect(() => {
        if (open) textareaRef.current?.focus()
    }, [open])

    useEffect(() => {
        if (localStorage.getItem(INTRO_STORAGE_KEY)) return
        const timer = setTimeout(() => setShowIntro(true), 1500)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (!loading) {
            setStatusIndex(0)
            return
        }
        const interval = setInterval(() => {
            setStatusIndex((i) => Math.min(i + 1, STATUS_KEYS.length - 1))
        }, STATUS_INTERVAL_MS)
        return () => clearInterval(interval)
    }, [loading])

    const dismissIntro = () => {
        setShowIntro(false)
        localStorage.setItem(INTRO_STORAGE_KEY, "true")
    }

    const handleToggleOpen = () => {
        setOpen((prev) => !prev)
        if (showIntro) dismissIntro()
    }

    const handleSend = async () => {
        const text = input.trim()
        if (!text || loading) return
        setInput("")
        await send(text)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    return (
        <>
            {showIntro && !open && (
                <div className="fixed bottom-24 right-6 z-40 w-72 max-w-[calc(100vw-3rem)] bg-stone-900 border border-yellow-600 rounded-lg shadow-2xl p-4">
                    <button
                        type="button"
                        onClick={dismissIntro}
                        className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
                        aria-label={t("chatIntroDismiss")}
                    >
                        <FontAwesomeIcon icon={faXmark} size="sm" />
                    </button>
                    <button
                        type="button"
                        onClick={handleToggleOpen}
                        className="flex gap-3 items-start text-left w-full pr-4"
                    >
                        <FontAwesomeIcon
                            icon={faRobot}
                            className="text-yellow-600 text-2xl mt-0.5 shrink-0"
                        />
                        <div>
                            <h4 className="text-yellow-600 font-semibold text-sm">
                                {t("chatIntroTitle")}
                            </h4>
                            <p className="text-gray-200 text-xs mt-1 leading-relaxed">
                                {t("chatIntroBody")}
                            </p>
                        </div>
                    </button>
                    <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-yellow-600"></div>
                </div>
            )}

            <button
                type="button"
                onClick={handleToggleOpen}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-yellow-600 hover:bg-yellow-500 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110"
                aria-label={open ? t("chatClose") : t("chatOpen")}
            >
                {showIntro && !open && (
                    <span className="absolute inset-0 rounded-full bg-yellow-600 animate-ping opacity-75"></span>
                )}
                <FontAwesomeIcon
                    icon={open ? faXmark : faComments}
                    size="lg"
                    className="relative"
                />
            </button>

            {open && (
                <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[520px] max-h-[80vh] bg-stone-900 border border-stone-700 rounded-lg shadow-2xl flex flex-col">
                    <div className="flex items-center justify-between p-4 border-b border-stone-700">
                        <h3 className="text-yellow-600 font-semibold text-base">
                            {t("chatTitle")}
                        </h3>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label={t("chatClose")}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {messages.length === 0 && !loading && (
                            <p className="text-gray-400 text-center text-sm pt-8">
                                {t("chatGreeting")}
                            </p>
                        )}
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-lg px-3 py-2 text-sm whitespace-pre-wrap break-words ${
                                        m.role === "user"
                                            ? "bg-yellow-600 text-white"
                                            : "bg-stone-800 text-gray-200"
                                    }`}
                                >
                                    {m.content}
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-start">
                                <div className="bg-stone-800 text-gray-300 rounded-lg px-3 py-2 text-sm italic inline-flex items-center gap-1">
                                    <span>{t(STATUS_KEYS[statusIndex])}</span>
                                    <span className="inline-flex gap-0.5 not-italic">
                                        <span className="animate-bounce">.</span>
                                        <span className="animate-bounce [animation-delay:0.1s]">.</span>
                                        <span className="animate-bounce [animation-delay:0.2s]">.</span>
                                    </span>
                                </div>
                            </div>
                        )}
                        {error && (
                            <div className="bg-stone-800 border border-red-500/40 rounded-lg p-4 my-2">
                                <div className="flex items-start gap-3">
                                    <FontAwesomeIcon
                                        icon={faTriangleExclamation}
                                        className="text-red-400 mt-0.5 shrink-0"
                                    />
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-200 mb-3 leading-relaxed">
                                            {t("chatUnavailable")}
                                        </p>
                                        <a
                                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("chatWhatsappDefaultMessage"))}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white rounded-md px-4 py-2 text-sm font-medium transition-colors"
                                        >
                                            <FontAwesomeIcon icon={faWhatsapp} />
                                            {t("chatWhatsappButton")}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-3 border-t border-stone-700 flex gap-2 items-end">
                        <textarea
                            ref={textareaRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder={t("chatPlaceholder")}
                            disabled={loading}
                            rows={1}
                            className="flex-1 bg-stone-800 text-white rounded-md px-3 py-2 text-sm resize-none outline-none focus:ring-1 focus:ring-yellow-600 disabled:opacity-50 max-h-24"
                        />
                        <button
                            type="button"
                            onClick={handleSend}
                            disabled={loading || !input.trim()}
                            className="bg-yellow-600 hover:bg-yellow-500 text-white rounded-md px-3 py-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            aria-label={t("chatSend")}
                        >
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
