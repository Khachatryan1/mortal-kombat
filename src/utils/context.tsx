import { createContext, useRef, useState } from "react"
import { ContextType, FighterType } from "./types"
import { useNavigate } from "react-router"

export const MKContext = createContext<ContextType>({
    showCookieModal: false,
    setShowCookieModal: () => {},
    showLanguageModal: false,
    setShowLanguageModal: () => {},
    language: '',
    setLanguage: () => {},
    showVideoModal: false,
    setShowVideoModal: () => {},
    goHome: () => {},
    handlePurchase: () => {},
    headerRef: {current: null},
    videoLink: '',
    setVideoLink: () => {},
    showFighterModal: false,
    setShowFighterModal: () => {},
    fighter: null,
    setFighter: () => {}
})


export const MKContextWrapper = ({ children }: { children: React.ReactNode }) => {
    const [showCookieModal, setShowCookieModal] = useState(false)
    const [showLanguageModal, setShowLanguageModal] = useState(false)
    const [showVideoModal, setShowVideoModal] = useState(false)
    const [showFighterModal, setShowFighterModal] = useState(false)
    const [fighter, setFighter] = useState<FighterType | null>(null)
    const [language, setLanguage] = useState('United States - English')
    const [videoLink, setVideoLink] = useState('')
    const headerRef = useRef<HTMLDivElement>(null)

    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }

    const handlePurchase = () => {
        navigate('/buy now')
        headerRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    
    
    const contextValue: ContextType = {
        showCookieModal,
        setShowCookieModal,
        showLanguageModal,
        setShowLanguageModal,
        language,
        setLanguage,
        showVideoModal,
        setShowVideoModal,
        goHome,
        handlePurchase,
        headerRef,
        videoLink,
        setVideoLink,
        fighter,
        setFighter,
        showFighterModal,
        setShowFighterModal
    }

    return (
        <MKContext.Provider value={contextValue}>
            {children}
        </MKContext.Provider>
    )
}