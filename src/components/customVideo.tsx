import { memo, useRef } from "react"
import { CustomVideoProps } from "../utils/types"
import ReactPlayer from "react-player"
import VisibilitySensor from "react-visibility-sensor"

export const CustomVideo = memo(({ className, videoUrl, videoHeight }: CustomVideoProps) => {
    const videoRef = useRef<ReactPlayer | null>(null)
    
    const onVisibilityChange = (isVisible: boolean) => {
        const videoElement = videoRef.current?.getInternalPlayer()

        if (videoElement) {
            if (isVisible) {
                videoElement.play().catch(() => {})
            } else {
                videoElement.pause()
            }
        }
    }

    return (
        <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
            <ReactPlayer
                ref={videoRef}
                className={className}
                url={videoUrl}
                playing
                autoPlay
                loop
                muted
                preload='auto'
                playsInline
                width='100%'
                height={videoHeight}
            />
        </VisibilitySensor>
    )
})
