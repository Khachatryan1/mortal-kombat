import fireTop from '../assets/videos/fire-line-top.mp4'
import fireDown from '../assets/videos/fire-line-bot.mp4'
import { CustomVideo } from './customVideo';

export const FireFrame = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='fire-block-container'>
            <CustomVideo className='fire-line-top' videoUrl={fireTop} videoHeight='130px'/>
                {children}
            <CustomVideo  className='fire-line-bottom' videoUrl={fireDown} videoHeight='130px'/>
        </div>
    )
}