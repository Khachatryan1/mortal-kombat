import fireTop from '../assets/videos/fire-line-top.mp4'
import fireDown from '../assets/videos/fire-line-bot.mp4'
import ReactPlayer from "react-player";

export const FireFrame = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='fire-block-container'>
            <ReactPlayer className="fire-line-top" url={fireTop} autoPlay playing loop muted
                preload='auto' playsInline width='100%' height='130px'/>
            {children}
            <ReactPlayer className="fire-line-bottom" url={fireDown} autoPlay playing loop muted
                preload='auto' playsInline width='100%' height='130px'/>
        </div>
    )
}