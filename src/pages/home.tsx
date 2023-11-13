import { useContext } from "react"
import { MKContext } from "../utils/context"
import { FireFrame } from "../components/fireFrame"
import { VideoModal } from "../components/modal windows/videoModal"
import { CustomVideo } from "../components/customVideo"
import { MainNav } from "../components/mainNav"
import { LiaPlaySolid } from "react-icons/lia"

import logo from '../assets/images/different/mk1-logo-tm.webp'
import liuKang from '../assets/images/different/liu-kang-wfire.webp'
import mk1Logo from '../assets/images/different/sigil.webp'
import videoUrl from '../assets/videos/hero.mp4'
import KombatPack from '../assets/videos/kombat-pack.mp4'

export const Home = () => {
    const {showVideoModal, setShowVideoModal, handlePurchase} = useContext(MKContext)

    const handleVideoModal = () => {
        setShowVideoModal(true)
    }

    return (
        <main className='main-container'>
            <div>
                <MainNav className={'home-main-nav'}/>
                <CustomVideo className="bg-video" videoUrl={videoUrl} videoHeight="100%"/>
                <div className="main-buy-container">
                    <div className="logo-img-container">
                        <img src={logo} alt="mk1 logo" />
                    </div>
                    <button onClick={handlePurchase} className="buy-now-button">
                        <span>BUY NOW</span>
                    </button>
                </div>
            </div>
                <FireFrame>
                    <div className="fire-block-content">
                        <div className="fire-block-content-left">
                            <div className="fire-block-left-img-container">
                                <img src={mk1Logo} alt="mk 1 Logo" />
                            </div>
                            <div className="fire-block-left-content">
                                <h2 className="fire-block-title">IT’S IN OUR BLOOD</h2>                          
                                <p className="fire-block-text">
                                    <strong>Discover a reborn Mortal Kombat Universe created by the Fire God Liu Kang. </strong>
                                    Mortal Kombat 1 ushers in a new era of the iconic franchise with a new fighting system, game modes, and fatalities!
                                </p>
                            </div>
                        </div>
                        <div className="fire-block-content-right">
                            <img src={liuKang} alt="Liu Kang" />
                        </div>
                    </div>
                </FireFrame>
                {
                    showVideoModal && <VideoModal url='https://www.youtube.com/watch?v=eT-3vhCl6N4'/>
                }
                <div className="home-kombat-pack">
                    <div className="kombat-pack-content">
                        <div className="titles">
                            <h3 className="titles-h3">JUSTICE. THEIR WAY.</h3>
                            <h2 className="titles-h2">KOMBAT PACK</h2>
                        </div>
                        <div className="desc">
                            <p>Introducing your roster for the Mortal Kombat 1 Kombat Pack fighters.</p>
                            <h4>TAKEDA • QUAN CHI • ERMAC • PEACEMAKER • HOMELANDER • OMNI-MAN</h4>
                        </div>
                        <div className="kombat-pack-video-container">
                            <div className="kombat-pack-video">
                                <CustomVideo videoUrl={KombatPack} videoHeight='100%'/>
                            </div>
                        </div>
                        <LiaPlaySolid onClick={handleVideoModal} className="play-icon"/>
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
        </main>
    )
}