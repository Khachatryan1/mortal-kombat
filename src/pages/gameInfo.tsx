import mkLogo from '../assets/images/different/mk1-logo-tm.webp'
import mk1Logo from '../assets/images/different/sigil.webp'
import { MainNav } from '../components/mainNav'
import ReactPlayer from 'react-player'
import { LiaPlaySolid } from 'react-icons/lia'
import { useContext, useEffect } from 'react'
import { MKContext } from '../utils/context'
import { VideoModal } from '../components/modal windows/videoModal'
import kameoScreen1 from '../assets/images/different/kameo-screen-01-t.jpg'
import kameoScreen2 from '../assets/images/different/kameo-screen-02-t.jpg'
import kameoScreen3 from '../assets/images/different/kameo-screen-03-t.jpg'
import kameoScreen4 from '../assets/images/different/kameo-screen-04-t.jpg'
import { FireFrame } from '../components/fireFrame'

export const GameInfo = () => {
    const {showVideoModal, setShowVideoModal, goHome, handlePurchase} = useContext(MKContext)
    
    const fireTop = 'https://cdn-mk1.mortalkombat.com/static/fire-line-bot-loop.mp4'
    const fireBottom = 'https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4'

    const KombatPack = 'https://cdn-mk1.mortalkombat.com/media/kombat-pack.mp4'

    const images = [kameoScreen1, kameoScreen2, kameoScreen3, kameoScreen4]
    

    useEffect(() => {
        let currentImageIndex = 0;
        const imageElement = document.getElementById('kameoImage') as HTMLImageElement;
    
        const changeImage = () => {
            currentImageIndex = (currentImageIndex + 1) % images.length
            imageElement.src = images[currentImageIndex]
            setTimeout(changeImage, 5000)
        }
    
        const timerId = setTimeout(changeImage, 5000)
    
        return () => clearTimeout(timerId)
    }, [])
    

    

    const handleVideoModal = () => {
        setShowVideoModal(true)
    }

    return (
        <div className="game-info-container">
            <div className="game-info-header">
                <div className="game-info-nav-container">
                    <div onClick={goHome} className="game-info-nav-logo-container">
                        <img src={mkLogo} alt="mk1 logo" />
                    </div>
                    <MainNav className="game-info-main-nav"/>
                    <button onClick={handlePurchase} className="game-info-buy-button">
                        <span>BUY NOW</span>
                    </button>
                </div>
                <div className='game-info-content'>
                    <div className='game-info-text-content'>
                        <p>JUSTICE. THEIR WAY.
                            <span>Introducing your roster for the Mortal Kombat 1 Kombat Pack fighters.</span>
                        </p>
                        <h2>KOMBAT PACK
                            <span>TAKEDA • QUAN CHI • ERMAC • PEACEMAKER • HOMELANDER • OMNI-MAN</span>
                        </h2>
                    </div>
                    <div className="game-info-video-container">
                            <div className="game-info-video">
                                <ReactPlayer url={KombatPack} autoPlay playing loop muted
                                    preload='auto' playsInline width='100%' height='100%'/>
                            </div>
                    </div>
                    <LiaPlaySolid onClick={handleVideoModal} className="play-icon"/>
                </div>
                {
                    showVideoModal && <VideoModal url='https://www.youtube.com/watch?v=eT-3vhCl6N4'/>
                }
            </div>
            <ReactPlayer className='game-info-fire-top' url={fireTop} autoPlay playing loop muted
                preload='auto' playsInline width='100%' height='130px'/>
            <div className='game-info-fire-block-container'>
                <div className='game-info-fire-block-content'>
                    <div className='game-info-text-content'>
                        <h2>KAMEO FIGHTERS</h2>
                        <p>Kameos are a unique roster of partner fighters who assist the main fighter during matches, creating expanded gameplay possibilities for players.</p>
                        <p>Kameos dramatically enhance every fight, assisting teammates with their own Special Moves, Throws and defensive Breakers.</p>
                    </div>
                    <div className='game-info-slide-container'>
                        <img src={kameoScreen1} alt="" id='kameoImage'/>
                    </div>
                </div>
                
            </div>
            <ReactPlayer className='game-info-fire-bottom' url={fireBottom} autoPlay playing loop muted
                preload='auto' playsInline width='100%' height='130px'/>
            <div className='story-block-container'>
                <div className='story-block-content'>
                    <h2>IMMERSIVE STORY CAMPAIGN</h2>
                    <p>Mortal Kombat’s genre-defining story mode kontinues. Reflecting Fire God Liu Kang’s vision of perfection, Mortal Kombat 1’s brand new universe is familiar, yet radically altered. And potentially, more dangerous than ever. Discover the forces set to undermine Liu Kang’s New Era.</p>
                </div>
            </div>
            <div className='invasions-block-container'>
                <div className='invasions-block-content'>
                    <h2>INVASIONS</h2>
                    <p>Fight against the invading forces that threaten your timeline.</p>
                    <p>Invasions is a dynamic single player campaign with a variety of distinct challenges. With built in progression and RPG mechanics, mixed with MK1’s incredible fighting action, Invasions provides deep, and engaging challenges, and a ton of rewards along the way.</p>
                </div>
            </div>
            <FireFrame>
                <div className="buy-now-bottom">       
                    <div className="mk1Logo-img-container">
                        <img src={mk1Logo} alt="mk 1 Logo" />
                    </div>
                    <div className="logo-container">
                        <img src={mkLogo} alt="logo" />
                    </div>
                    <button onClick={handlePurchase} className="buy-now-button-bottom">
                        <span>BUY NOW</span>
                    </button>
                </div>
            </FireFrame>
        </div>
    )
}