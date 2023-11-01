import { createContext, useRef, useState } from "react"
import { ContextType } from "./types"
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
    headerRef: {current: null}
})


export const MKContextWrapper = ({ children }: { children: React.ReactNode }) => {
    const [showCookieModal, setShowCookieModal] = useState(false)
    const [showLanguageModal, setShowLanguageModal] = useState(false)
    const [showVideoModal, setShowVideoModal] = useState(false)
    const [language, setLanguage] = useState('United States - English')
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
        headerRef
    }

    return (
        <MKContext.Provider value={contextValue}>
            {children}
        </MKContext.Provider>
    )
}