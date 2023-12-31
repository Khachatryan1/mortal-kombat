import { useContext, useState } from "react"
import { MKContext } from "../utils/context"
import { FighterType } from "../utils/types"
import { FIGHTERS } from "../utils/data"
import { MainNav } from "../components/mainNav"
import { FireFrame } from "../components/fireFrame"
import { FighterModal } from "../components/modal windows/fighterModal"
import { CustomVideo } from "../components/customVideo"

import mkLogo from '../assets/images/different/logo-blue.svg'
import rosterSmoke from '../assets/videos/roster-smoke.mp4'
import mk1Logo from '../assets/images/different/sigil.webp'
import logo from '../assets/images/different/mk1-logo-tm.webp'


export const Roster = () => {
    const {goHome, handlePurchase, showFighterModal,
           setShowFighterModal, fighter, setFighter} = useContext(MKContext)
           
    const [activeFighter, setActiveFighter] = useState<string | null>(null)

    const handleMouseOver = (fighter: FighterType) => {
        setActiveFighter(fighter.name)
    }

    const handleMouseOut = () => {
        setActiveFighter(null)
    }

    const showFighter = (fighter: FighterType) => {
        setFighter(fighter)
        setShowFighterModal(true)
        document.body.style.overflow = 'hidden'
    }
    
    return (
        <div className="roster-container">
            <div className="roster-nav-container">
                <div onClick={goHome} className="roster-nav-logo-container">
                    <img src={mkLogo} alt="mk1 logo" />
                </div>
                <MainNav className="roster-main-nav"/>
                <button onClick={handlePurchase} className="roster-nav-buy-button">
                    <span>BUY NOW</span>
                </button>
            </div>
            <h2>CHOOSE YOUR FIGHTERS</h2>
            <div className="fighters-container">
                {
                    FIGHTERS.map((fighter, index) => (
                        <div
                            key={`${fighter.name}${fighter.purpose}`}
                            className={`fighter-container ${activeFighter === fighter.name ? 'active' : ''} 
                                    ${activeFighter !== fighter.name && activeFighter ? 'passive' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s`, scale: 0 }}
                                    onMouseOver={() => handleMouseOver(fighter)}
                            onMouseOut={handleMouseOut}
                            onClick={() => showFighter(fighter)}
                        >
                            <div className="fighter-img-container">
                                <img src={fighter.img} alt={fighter.name} />
                            </div>
                            <div className="fighter-name">
                                <p>{fighter.name}</p>
                            </div>
                            {            
                                activeFighter === fighter.name &&  <CustomVideo className="roster-smoke" videoUrl={rosterSmoke} videoHeight="130px"/>
                            }
                        </div>
                    ))
                }
            </div>
                <FireFrame>
                    <div className="buy-now-bottom">       
                        <div className="mk1Logo-img-container">
                            <img src={mk1Logo} alt="mk 1 Logo" />
                        </div>
                        <div className="logo-container">
                            <img src={logo} alt="logo" />
                        </div>
                        <button onClick={handlePurchase} className="buy-now-button-bottom">
                            <span>BUY NOW</span>
                        </button>
                    </div>
                </FireFrame>
            {
                showFighterModal && fighter && <FighterModal currentFighter={fighter}/>
            }
        </div>  
    )
}