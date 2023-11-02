import ReactPlayer from "react-player"
import { IoClose } from "react-icons/io5"
import {FaSearchPlus, FaSearchMinus} from 'react-icons/fa'
import { MKContext } from "../../utils/context"
import { useContext, useState } from "react"
import { VideoModalProps } from "../../utils/types"

export const VideoModal = ({url}: VideoModalProps) => {
    const {setShowVideoModal} = useContext(MKContext)
    const [scaleIn, setScaleIn] = useState(false)

    const closeVideoModal = () => {
        setShowVideoModal(false)
    }

    const scaleInVideo = () => {
        setScaleIn(!scaleIn)    
    }


    return (
        <div className="video-modal-overlay">
            <div style={{width: `${scaleIn ? '90%' : '80%'}`}} className="video-modal-container">
                <div className="video-modal-icons">
                    {
                        scaleIn ? <FaSearchMinus onClick={scaleInVideo} className="video-scale"/> : <FaSearchPlus onClick={scaleInVideo} className="video-scale"/>
                    }
                    <IoClose onClick={closeVideoModal} className="video-close"/>
                </div>
                <ReactPlayer 
                    url={url}    
                    preload='auto'
                    width='100%'
                    height='100vh'
                />
            </div>

        </div>
    )
}