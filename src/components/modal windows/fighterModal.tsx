import { TfiClose } from "react-icons/tfi"
import { FighterModalProps, FighterType } from "../../utils/types"
import { useContext } from "react"
import { MKContext } from "../../utils/context"
import bgSmoke from '../../assets/images/different/smoke-center.webp'
import { FIGHTERS } from "../../utils/data"
import tick from '../../assets/images/different/tick.svg'



export const FighterModal = ({fighter}: FighterModalProps) => {
    const {goHome, handlePurchase, showFighterModal, setShowFighterModal, setFighter} = useContext(MKContext)

    const handleFighterModal = () => {
        const modalContainer = document.querySelector('.fighter-modal-container')
        modalContainer?.classList.add('close')
        
        setTimeout(() => {
            setShowFighterModal(false)
        }, 500)
    }

    const changeFighter = (fighter: FighterType) => {
        setFighter(fighter)
    }

    return (
        <div className="fighter-modal-container">
            <TfiClose onClick={handleFighterModal} className='modal-close-icon'/>
            <div className="fighter-detail-container">
                <div className="bg-smoke">
                    <img src={bgSmoke} alt='smoke background' />
                </div>
                <div className="fighter-detail-img-container">
                    <img src={fighter?.img} alt={fighter?.name} />
                </div>
                <div className="fighter-description-container">
                    <h4>{fighter?.purpose}</h4>
                    <h2>{fighter?.name}</h2>
                    <h3>{fighter?.essence}</h3>
                    <p>{fighter?.firstDescription}</p>
                    <p>{fighter?.secondDescription}</p>
                    <p>{fighter?.thirdDescription}</p>
                </div>
            </div>
            <div className="fighter-line-container">
                <div className="tick-top">
                    <img src={tick} alt="" />
                </div>
                <div className="fighter-swipe-container">
                    {
                        FIGHTERS.map((fighter) => {
                            return (
                                <div key={fighter.firstDescription} 
                                    className="fighter-container"
                                    onClick={() => changeFighter(fighter)}
                                    >
                                    <img src={fighter.img} alt={fighter.name} />
                                    <p className="fighter-name">{fighter.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="tick_bottom">
                    <img src={tick} alt="" />
                </div>
            </div>
        </div>
        
    )
}