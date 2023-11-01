import ReactPlayer from "react-player";
import logo from '../assets/images/mk1-logo-tm.webp'
import liuKang from '../assets/images/liu-kang-wfire.webp'
import mk1Logo from '../assets/images/sigil.webp'
import { MainNav } from "../components/mainNav";
import {LiaPlaySolid} from "react-icons/lia"
import { FireFrame } from "../components/fireFrame";
import { VideoModal } from "../components/modal windows/videoModal";
import { useContext } from "react";
import { MKContext } from "../utils/context";


export const Home = () => {
    const {showVideoModal, setShowVideoModal, handlePurchase} = useContext(MKContext)

    const videoUrl = 'https://cdn-mk1.mortalkombat.com/home/hero.mp4'
    const KombatPack = 'https://cdn-mk1.mortalkombat.com/media/kombat-pack.mp4'

    const handleVideoModal = () => {
        setShowVideoModal(true)
    }

   

    return (
        <main className='main-container'>
            <div>
                <MainNav className={'home-main-nav'}/>
                <ReactPlayer className="bg-video" url={videoUrl} autoPlay playing loop muted
                    preload='auto' playsInline width='100%' height='100%'/>
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
                                <h2>IT’S IN OUR BLOOD</h2>                          
                                <p>
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
                            <h3>JUSTICE. THEIR WAY.</h3>
                            <h2>KOMBAT PACK</h2>
                        </div>
                        <div className="desc">
                            <p>Introducing your roster for the Mortal Kombat 1 Kombat Pack fighters.</p>
                            <h4>TAKEDA • QUAN CHI • ERMAC • PEACEMAKER • HOMELANDER • OMNI-MAN</h4>
                        </div>
                        <div className="kombat-pack-video-container">
                            <div className="kombat-pack-video">
                                <ReactPlayer url={KombatPack} autoPlay playing loop muted
                                    preload='auto' playsInline width='100%' height='100%'/>
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