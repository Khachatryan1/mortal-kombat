import { LiaPlaySolid } from "react-icons/lia"
import { VideoRenderProps } from "../utils/types"
import { useContext } from "react"
import { MKContext } from "../utils/context"
import { VideoModal } from "./modal windows/videoModal"

export const VideoRender = ({list}: VideoRenderProps) => {
    const {setShowVideoModal, showVideoModal} = useContext(MKContext)

    const handleVideoModal = () => {
        setShowVideoModal(true)
    }


    return (
        <div>
            {
                list.map((video) => {
                    console.log(video.videoUrl)
                    return (
                        <div key={video.videoUrl}>
                            <a href={video.videoUrl} target="_blank">
                                <img src={video.imageUrl} alt={video.title} />
                            </a>
                            <LiaPlaySolid onClick={handleVideoModal} className="play-icon"/>
                            <p>{video.title}</p>
                            {
                                showVideoModal && <VideoModal url={video.videoUrl}/>
                            }
                        </div>
                        
                    )
                })
            }
        </div>
    )
}