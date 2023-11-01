import { LegacyRef } from "react"

export type ContextType = {
    showCookieModal: boolean
    setShowCookieModal: React.Dispatch<React.SetStateAction<boolean>>
    showLanguageModal: boolean
    setShowLanguageModal: React.Dispatch<React.SetStateAction<boolean>>
    language: string
    setLanguage: React.Dispatch<React.SetStateAction<string>>
    showVideoModal: boolean
    setShowVideoModal: React.Dispatch<React.SetStateAction<boolean>>
    handlePurchase: () => void
    goHome: () => void
    headerRef: LegacyRef<HTMLDivElement>
}

export type VideoModalProps = {
    url: string
}

export type MainNavProps = {
    className: string
}

export type FighterType = {
    name: string
    img: string
    purpose: string
    essence: string
    firstDescription: string
    secondDescription?: string
    thirdDescription?: string
}

export type VideoType = {
    title: string
    videoUrl: string
    imageUrl: string
}

export type VideoRenderProps = {
    list: VideoType[]
}