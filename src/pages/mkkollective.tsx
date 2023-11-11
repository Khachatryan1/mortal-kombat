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
import { FireFrame } from "../components/fireFrame"
import { CustomVideo } from "../components/customVideo"
import videoUrl from '../assets/videos/hero.mp4'



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
    const posts: AmbassadorType[] = AMBASSADORS.filter((ambassador) => ambassador.postLink && ambassador.name !== mainAmbassador.name)
           


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
            <CustomVideo className="bg-video" videoUrl={videoUrl} videoHeight="100%"/> 
            <div className="fire-line-container">
                <CustomVideo className="fire-line" videoUrl={fireDown} videoHeight="118px"/>
            </div>
            <div className="kollective-main-container">
                <div className="kollective-ambassadors-container">
                    <Post ambassador={mainAmbassador} className='main-post-container'/>
                    { 
                        AMBASSADORS.map((ambassador, index) => {
                            return (
                                <React.Fragment key={index}>
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
                <div className="coming-soon">
                    <p>More Artists Coming Soon</p>
                </div>
                <div className="kollective-posts-container">
                    <h2>OTHER FEATURED POSTS</h2>
                    <div className="posts-container">
                        {
                            posts.map((ambassador, index) => <React.Fragment key={index}>
                                    <Post ambassador={ambassador} className="kollective-post"/>
                                </React.Fragment>)
                        }
                    </div>
                </div>
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