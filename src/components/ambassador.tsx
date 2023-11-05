import { AmbassadorProps, AmbassadorType } from "../utils/types"
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { BiLogoTiktok } from "react-icons/bi"
import {BsFacebook, BsBehance} from "react-icons/bs"
import ReactPlayer from "react-player"
import fireSquare from '../assets/videos/fire-square.mp4'

export const Ambassador = ({ambassador, handleCardClick, isActive}: AmbassadorProps) => {

    return (
        <div className="ambassador-card" onClick={() => handleCardClick(ambassador.imgLink)}>
            {
                !isActive ? <div className="front">
                            <div className="front-img-container">
                                <img src={ambassador.imgLink} alt={ambassador.name} />
                            </div>
                            <p className="front-name">{ambassador.name}</p>
                            <div className="shadow"></div>
                            <ReactPlayer className="fire-square" url={fireSquare} autoPlay playing loop muted
                                preload='auto' playsInline width='100%' height='100%'/>
                        </div>
                        : 
                        <div className="back">

                            <div className="back-icon-container">
                                {ambassador.instagramLink ?
                                    <a className="back-icon" href={ambassador.instagramLink} target="_blank">
                                        <AiOutlineInstagram/>
                                    </a> : ''}
                                {ambassador.twitterLink ? 
                                    <a className="back-icon" href={ambassador.twitterLink} target="_blank">
                                        <AiOutlineTwitter/>
                                    </a> : ''}
                                {ambassador.facebookLink ? 
                                    <a className="back-icon" href={ambassador.facebookLink} target="_blank">
                                        <BsFacebook/>
                                    </a> : ''}
                                {ambassador.tiktokLink ?
                                    <a className="back-icon" href={ambassador.tiktokLink} target="_blank">
                                        <BiLogoTiktok/>
                                    </a> : ''}

                                {ambassador.behanceLink ? 
                                    <a className="back-icon" href={ambassador.behanceLink} target="_blank">
                                        <BsBehance/>
                                    </a> : ''}
                                {ambassador.youtubeLink ? 
                                    <a className="back-icon" href={ambassador.youtubeLink} target="_blank">
                                        <AiFillYoutube/>
                                    </a> : ''}
                            </div>
                            <p>{ambassador.name}</p>
                        </div>
            }
        </div>
    )
}