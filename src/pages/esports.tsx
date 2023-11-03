import { FireFrame } from "../components/fireFrame"
import { MainNav } from "../components/mainNav"
import mk1Logo from '../assets/images/different/sigil.webp'
import logo from '../assets/images/different/mk1-logo-tm.webp'
import mkLogo from '../assets/images/different/logo-blue.svg'
import { useContext } from "react"
import { MKContext } from "../utils/context"
import competitionLogo from '../assets/images/esports/mk1-pro-kompetition-2023-2024.webp'
import teileBar from '../assets/images/esports/title-bar.svg'
import bracketLines from '../assets/images/esports/bracket-lines.svg'
import shield from '../assets/images/esports/shield.svg'
import interkontinental from '../assets/images/esports/mk1-interkontinental.webp'
import latina from '../assets/images/esports/mk1-liga-latina.webp'
import american from '../assets/images/esports/mk1-north-american-league.webp'


export const Esports = () => {
    const {goHome, handlePurchase} = useContext(MKContext)

    return (
        <div className="sports-container">
            <div className="sports-nav-container">
                <div onClick={goHome} className="sports-nav-logo-container">
                    <img src={mkLogo} alt="mk1 logo" />
                </div>
                <MainNav className="sports-main-nav"/>
                <button onClick={handlePurchase} className="sports-nav-buy-button">
                    <span>BUY NOW</span>
                </button>
            </div>
            <div className="sports-main-container">
                <div className="competition-img-container">
                    <img src={competitionLogo} alt="competition logo"/>
                </div>
                <div className="title-bar">
                    <div className="title-bar-img-container">
                        <img src={teileBar} alt="3 ONLINE REGIONAL LEAGUES" />
                    </div>
                    <h2>3 ONLINE REGIONAL LEAGUES</h2>
                </div>
                <div className="bracket-lines-img-container">
                    <img src={bracketLines} alt="bracket lines image" />
                </div>
                <div className="kombat-liga">
                    <div className="liga">
                        <div>
                            <img src={shield} alt="shield" />
                        </div>
                        <div className="liga-data">
                            <p className="date">2024</p>
                            <div className="liga-data-img-container">
                                <img src={american} alt="american liga" />
                            </div>
                            <a className="event-link" href="https://www.start.gg/league/mortal-kombat-1-pro-kompetition/details" target="_blank">EVENTS {'>'} </a>
                            <p className="liga-name">~ NORTH AMERICA ~</p>
                        </div>
                    </div>
                    <div className="liga">
                        <div>
                            <img src={shield} alt="shield" />
                        </div>
                        <div className="liga-data">
                            <p className="date">2024</p>
                            <div className="liga-data-img-container">
                                <img src={interkontinental} alt="interkontinental liga" />
                            </div>
                            <a className="event-link" href="https://www.start.gg/league/mortal-kombat-1-pro-kompetition/details" target="_blank">EVENTS {'>'}</a>
                            <p className="liga-name">~ EU, OCEANIA, & ME ~</p>
                        </div>
                    </div>
                    <div className="liga">
                        <div>
                            <img src={shield} alt="shield" />
                        </div>
                        <div className="liga-data">
                            <p className="date">2024</p>
                            <div className="liga-data-img-container">
                                <img src={latina} alt="latina liga" />
                            </div>
                            <a className="event-link" href="https://www.start.gg/league/mortal-kombat-1-pro-kompetition/details" target="_blank">EVENTS {'>'}</a>
                            <p className="liga-name">~ LATIN AMERICA ~</p>
                        </div>
                    </div>
                </div>
                <h2 className="mk-trailer">Official MK1 Esports Announcement Trailer</h2>
                <a className="mk-trailer-link" href="https://www.youtube.com/watch?v=uITo9ghYGhU" target="_blank">WATCH NOW</a>
                <a className="info-link" href="https://www.mortalkombat.com/en-us/esports/rules">Additional Information and Rules {'>'}</a>
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
        </div>
    )
}