import ReactPlayer from "react-player"
import { IoClose } from "react-icons/io5"
import {FaSearchPlus} from 'react-icons/fa'
import { MKContext } from "../../utils/context"
import { useContext } from "react"
import { VideoModalProps } from "../../utils/types"

export const VideoModal = ({url}: VideoModalProps) => {
    const {setShowVideoModal} = useContext(MKContext)

    const closeVideoModal = () => {
        setShowVideoModal(false)
    }

    const scaleVideo = () => {
        const videoContainer = document.querySelector('.video-modal-container') as HTMLElement
        videoContainer.style.width = '90%'     
    }


    return (
        <div className="video-modal-overlay">
            <div className="video-modal-container">
                <div className="video-modal-icons">
                    <FaSearchPlus onClick={scaleVideo} className="video-scale"/>
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