import { MainNav } from "../components/mainNav"
import mkLogo from '../assets/images/logo-blue.svg'
import { useContext } from "react"
import { MKContext } from "../utils/context"
import { FireFrame } from "../components/fireFrame"
import mk1Logo from '../assets/images/sigil.webp'
import logo from '../assets/images/mk1-logo-tm.webp'
import { VideoRender } from "../components/videoRender"
import { MEDIA_VIDEOS, FIGHTERS_VIDEOS, EXTRAS_VIDEOS } from "../utils/data"


export const Media = () => {
    const {goHome, handlePurchase} = useContext(MKContext)


    return (
        <div className="media-container">
            <div className="media-nav-container">
                <div onClick={goHome} className="media-nav-logo-container">
                    <img src={mkLogo} alt="mk1 logo" />
                </div>
                <MainNav className="media-main-nav"/>
                <button onClick={handlePurchase} className="media-nav-buy-button">
                    <span>BUY NOW</span>
                </button>
            </div>
			<div>
				<div className="media-video-container">
					<VideoRender list={MEDIA_VIDEOS}/>
				</div>
				{/* <div className="fighters-video-container">
					<VideoRender list={FIGHTERS_VIDEOS}/>
				</div> */}
				{/* <div className="extra-video-container">
					<VideoRender list={EXTRAS_VIDEOS}/>
				</div> */}
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