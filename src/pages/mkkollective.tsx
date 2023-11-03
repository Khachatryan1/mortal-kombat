import ReactPlayer from "react-player"
import { MainNav } from "../components/mainNav"
import mk1Logo from '../assets/images/different/sigil.webp'
import logo from '../assets/images/different/mk1-logo-tm.webp'
import mkLogo from '../assets/images/different/mk1-logo-tm.webp'
import { useContext, useState } from "react"
import { MKContext } from "../utils/context"
import fireDown from '../assets/videos/fire-line-bot.mp4'
import { AMBASSADORS } from "../utils/data"
import { NavLink } from "react-router-dom"
import { Footer } from "../components/footer"
import { AmbassadorType } from "../utils/types"
import { Ambassador } from "../components/ambassador"
import { Post } from "../components/post"
import React from "react"




export const MkKollective = () => {
    const {goHome, handlePurchase} = useContext(MKContext)
    const [activeCard, setActiveCard] = useState('');

    const handleCardClick = (imgLink: string) => {
        if (activeCard === imgLink) {
            setActiveCard('')
        } else {
            setActiveCard(imgLink)
        }
    }

    const mainAmbassador: AmbassadorType = AMBASSADORS.find((ambassador) => ambassador.name === 'Miriam Hoffmann') as AmbassadorType

    const videoUrl = 'https://cdn-mk1.mortalkombat.com/home/hero.mp4'


    return (
        <div className="kollective-container">
            <div className="kollective-nav-container">
                <div onClick={goHome} className="kollective-nav-logo-container">
                    <img src={mkLogo} alt="mk1 logo" />
                </div>
                <MainNav className="kollective-main-nav"/>
                <button onClick={handlePurchase} className="kollective-nav-buy-button">
                    <span>BUY NOW</span>
                </button>
            </div>
            <div className="kollective-header-content">
                <h1>#MKKOLLECTIVE AMBASSADORS</h1>
                <p><strong>IT’S IN OUR BLOOD </strong>to celebrate the passion and creativity from the Mortal Kombat community as we continue to support the dedicated and innovative artists and creators. The Kollective is led by our talented MK Ambassadors, who inspire the entire MK community to share what this iconic brand means to you.</p>
                <h3>Join the MK Kommunity by sharing your creations through social using #MKKollective.</h3>
            </div>
            <ReactPlayer className="bg-video" url={videoUrl} autoPlay playing loop muted
                preload='auto' playsInline width='100%' height='100%'/>  
            <div className="fire-line-container">
                <ReactPlayer className="fire-line" url={fireDown} autoPlay playing loop muted
                    preload='auto' playsInline width='100%' height='118px'/>
            </div>
            <div className="kollective-main-container">
                <div className="kollective-ambassadors-container">
                    <Post ambassador={mainAmbassador} className='main-post-container'/>
                    {
                        AMBASSADORS.map((ambassador) => {
                            return (
                                <React.Fragment key={ambassador.imgLink}>
                                    <Ambassador
                                            ambassador={ambassador}
                                            handleCardClick={handleCardClick}
                                            isActive={activeCard === ambassador.imgLink}
                                        />
                                </React.Fragment>
                            )
                        })
                    }
                </div>
                <div className="kollective-posts-container">

                </div>
            </div>
        </div>
    )
}