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
    videoLink: string
    setVideoLink: React.Dispatch<React.SetStateAction<string>>
    showFighterModal: boolean
    setShowFighterModal: React.Dispatch<React.SetStateAction<boolean>>
    fighter: FighterType | null
    setFighter: React.Dispatch<React.SetStateAction<FighterType | null>>
}

export type VideoModalProps = {
    url: string
}

export type MainNavProps = {
    className: string
}

export type FighterType = {
    name: string
    index: number
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

export type QuestionType = {
    question: string
    firstAnswer: string
    secondAnswer?: string
    thirdAnswer?: string
}

export type AmbassadorType = {
    name: string
    imgLink: string
    postLink?: string
    postImage?: string
    facebookLink?: string
    instagramLink?: string
    tiktokLink?: string
    twitterLink?: string 
    behanceLink?: string
    youtubeLink?: string
}

export type AmbassadorProps = {
    ambassador: AmbassadorType
    isActive: boolean
    handleCardClick: (imgLink: string) => void
}

export type CustomVideoProps = {
    className?: string
    videoUrl: string
    videoHeight: string
}

export type PostProps = {
    ambassador: AmbassadorType
    className: string
}

export type FighterModalProps = {
    currentFighter: FighterType | null | undefined
}