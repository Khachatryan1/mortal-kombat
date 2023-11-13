import { useContext } from "react"
import { MKContext } from "../utils/context"
import { MainNav } from "../components/mainNav"

import mkLogo from '../assets/images/different/logo-blue.svg'
import standardImg from '../assets/images/different/pack-standard.webp'
import premiumImg from '../assets/images/different/pack-premium.webp'
import collectorsImg from '../assets/images/different/pack-kollectors.webp'

export const BuyNow = () => {
    const {goHome} = useContext(MKContext)

    return (
        <div className="buy-now-container">
            <div className="nav-container">
                <div onClick={goHome} className="nav-logo-container">
                    <img src={mkLogo} alt="mk1 logo" />
                </div>
                <MainNav className="buy-now-main-nav"/>
            </div>
            <div className="buy-now-main-container">
                <div className="wizard-nav">
                    <p><span>1</span>EDITION</p>
                    <p><span>2</span>PLATFORM</p>
                    <p><span>3</span>STORE</p>
                </div>
                <h2 className="choice">CHOOSE YOUR EDITION</h2>
                <div className="editions">
                    <div className="edition">
                        <div className="editions-image-container">
                            <img src={standardImg} alt="standard Img" />
                        </div>
                        <button className="edition-button">
                            <span>BUY NOW</span>
                        </button>
                        <div className="edition-data">
                            <h2 className="edition-title">STANDARD EDITION</h2>
                            <h3 className="includes">INCLUDES</h3>
                            <ul>
                                <li style={{marginLeft: -125}}>
                                    <strong>Base Game</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="edition">
                        <div className="editions-image-container">
                            <img src={premiumImg} alt="premium Img" />
                        </div>
                        <button className="edition-button">
                            <span>BUY NOW</span>
                        </button>
                        <div className="edition-data">
                            <h2 className="edition-title">PREMIUM EDITION</h2>
                            <h3 className="includes">INCLUDES</h3>
                            <ul>
                                <li>
                                    <strong>Base Game</strong>
                                </li>
                                <li>6 New Playable Characters</li>
                                <li>5 New Kameo Characters</li>
                                <li>1 Week Early Access To DLC Characters</li>
                                <li>Jean-Claude Van Damme Skin For Johnny Cage</li>
                                <li>1250 Dragon Krystals (In-game Currency)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="edition kollectors">
                        <div className="editions-image-container">
                            <img src={collectorsImg} alt="collectors Img" />
                        </div>
                        <button className="edition-button">
                            <span>BUY NOW</span>
                        </button>
                        <div className="edition-data">
                            <h2 className="edition-title">KOLLECTOR’S EDITION</h2>
                            <h3 className="includes">INCLUDES</h3>
                            <ul>
                                <li>
                                    <strong>Base Game</strong>
                                </li>
                                <li>6 New Playable Characters</li>
                                <li>5 New Kameo Characters</li>
                                <li>1 Week Early Access To DLC Characters</li>
                                <li>Jean-Claude Van Damme Skin For Johnny Cage</li>
                                <li>1250 Dragon Krystals (In-game Currency)</li>
                                <li>
                                    <strong>Liu Kang sculpture designed by COARSE, with signature glow-in-the-dark details and standing an impressive 16.5'' tall</strong>
                                </li>
                                <li>
                                    <strong>COARSE art prints inspired by <em>Mortal Kombat 1</em></strong>
                                </li>
                                <li>
                                    <strong>Exclusive steel case</strong>
                                </li>
                                <li>
                                    <strong>Exclusive Limited Edition Liu Kang In-Game Color Variant Inspired By The COARSE Figurine</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}