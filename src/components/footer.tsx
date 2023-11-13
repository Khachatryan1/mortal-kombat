import { memo, useContext } from "react"
import { MKContext } from "../utils/context"
import { TbWorld } from "react-icons/tb"
import { CookieModal } from "./modal windows/cookieModal"
import { LanguageModal } from "./modal windows/languageModal"

export const Footer = memo(() => {
    const {showCookieModal, setShowCookieModal, 
           showLanguageModal, setShowLanguageModal,
           language} = useContext(MKContext)
    
    const handleCookieModal = () => {
        document.body.style.overflow = 'hidden'
        setShowCookieModal(true)
    }

    const handleLanguageModal = () => {
        setShowLanguageModal(true)
    }

    return (
        <>
            <div className='footer-top-edge'></div>
            <footer>
                <div className="footer-container">
                    <div className='garden-container'>
                        <ul className="logo-garden">
                            <li>
                                <img src="https://cdn-mk1.mortalkombat.com/static/wb-games-logo.svg" alt="worner browsers logo" />
                            </li>
                            <li style={{zIndex: 2}}>
                                <a href="https://www.netherrealm.com/" target="_blank" rel="noreferrer">
                                    <img src="https://cdn-mk1.mortalkombat.com/static/netherrealm.svg" alt="NetherRealm Studios logo" />
                                </a>
                            </li>
                            <li className='long-logo'>
                                <img src="https://cdn-mk1.mortalkombat.com/static/ps5_tm.svg" alt="PS5 logo" />
                            </li>
                            <li className='long-logo'>
                                <img src="https://cdn-mk1.mortalkombat.com/static/xbox-series-x-s.svg" alt="xbox series x|s logo" />
                            </li>
                            <li>
                                <img src="https://cdn-mk1.mortalkombat.com/static/nintendo-switch.svg" alt="nintendo-switch logo" />
                            </li>
                            <li className='long-logo'>
                                <img src="https://cdn-mk1.mortalkombat.com/static/steam.svg" alt="steam logo" />
                            </li>
                            <li>
                                <img src="https://cdn-mk1.mortalkombat.com/static/epic.svg" alt="epic games logo" />
                            </li>
                        </ul>
                        <div className='legal-and-rating'>
                            <div className="legal">
                                <p>
                                    MORTAL KOMBAT 1 Software © 2023 Warner Bros. Entertainment Inc. Developed by NetherRealm Studios.
                                    Unreal® Engine, copyright 1998-2023 Epic Games, Inc. Unreal, Unreal Technology and the Powered 
                                    by Unreal Technology logo are trademarks or registered trademarks of Epic Games, Inc. Uses Oodle
                                    Data Compression Copyright and Bink Video (C) 1997-2023 by RAD Game Tools, Inc. NETHERREALM STUDIOS
                                    LOGO, MORTAL KOMBAT, THE DRAGON LOGO, and all related characters and elements are trademarks of 
                                    and © 2023 Warner Bros. Entertainment Inc.
                                </p>
                                <div className="legal-bottom">
                                    <div className="wb-logo-container">
                                        <img src="https://cdn-mk1.mortalkombat.com/static/wb-shield-white.svg" alt="worner browsers logo" />
                                    </div>
                                    <p>
                                        WARNER BROS. GAMES LOGO, WARNER BROS. INTERACTIVE LOGO, WB SHIELD: ™ & © Warner Bros. Entertainment Inc. (s23)
                                    </p>
                                </div>
                            </div>
                            <div className="rating">
                                <a href="https://www.esrb.org/ratings/" target='_blank' rel="noreferrer">
                                    <img src="https://cdn-mk1.mortalkombat.com/ratings/esrb/esrb.svg" alt="ratings" />
                                </a>                               
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <button onClick={handleCookieModal} className="cookie-button">Cookie Settings</button>
                        <div className="links">
                            <a href="https://www.warnermediaprivacy.com/policycenter/b2c/wm/" target="_blank" rel="noreferrer">Privacy Policy</a>
                            <a href="https://policies.warnerbros.com/terms/en-us/html/terms_en-us_1.3.0.html" target="_blank" rel="noreferrer">Terms of Use</a>
                            <a href="https://www.warnermediaprivacy.com/policycenter/b2c/wm/" target="_blank" rel="noreferrer">Ad Choices</a>
                        </div>
                        <div onClick={handleLanguageModal} className="lang-bottom">
                            <TbWorld className="globe"/> 
                            <p>{language}</p>
                        </div>
                    </div>
                </div>
                {
                    showLanguageModal && <LanguageModal/>
                }
                
                {
                    showCookieModal && <CookieModal/>
                }
                
            </footer>
        </>
    )
})