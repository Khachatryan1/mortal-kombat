import { useContext } from "react"
import { MKContext } from "../utils/context"
import { LiaPlaySolid } from "react-icons/lia"
import { VideoRenderProps, VideoType } from "../utils/types"

export const VideoRender = ({list}: VideoRenderProps) => {
    const {setVideoLink, setShowVideoModal} = useContext(MKContext)

    const handleVideoModal = (video: VideoType) => {
        setShowVideoModal(true)
        setVideoLink(video.videoUrl)
    }

    return (
        <>
            {
                list.map((video) => {
                    return (
                        <div className="video-container" key={video.videoUrl}>
                            <div className="video-link-img-container">
                                <a href={video.videoUrl} target="_blank">
                                    <img src={video.imageUrl} alt={video.title} />
                                </a>
                            </div>
                            <LiaPlaySolid onClick={() => handleVideoModal(video)} className="play-icon"/>
                            <p onClick={() => handleVideoModal(video)} className="video-title">{video.title}</p>
                        </div>
                    )
                })
            }
        </>
    )
}