import { TfiClose } from "react-icons/tfi"
import { FighterModalProps, FighterType } from "../../utils/types"
import { useContext, useEffect, useState } from "react"
import { MKContext } from "../../utils/context"
import bgSmoke from '../../assets/images/different/smoke-center.webp'
import { FIGHTERS } from "../../utils/data"
import tick from '../../assets/images/different/tick.svg'
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia"



export const FighterModal = ({currentFighter}: FighterModalProps) => {
    const {setShowFighterModal, showFighterModal, setFighter} = useContext(MKContext)
    const [containerWidth, setContainerWidth] = useState<number | null>(currentFighter ? 830 - currentFighter.index * 139 : 700)

    const handleFighterModal = () => {
        const modalContainer = document.querySelector('.fighter-modal-overlay')
        modalContainer?.classList.add('close')
        
        setTimeout(() => {
            setShowFighterModal(false)
            document.body.style.overflow = 'auto'
        }, 500)

    }

    const changeFighter = (fighter: FighterType) => {
        const newContainerWidth = currentFighter ? 830 - fighter.index * 139 : 700
        
        setContainerWidth(newContainerWidth)
        setFighter(fighter)
    }

    const movePreviousFighter = () => {
        const previousIndex = currentFighter?.index !== undefined ? currentFighter.index - 1 : -1;
        const previousFighter = FIGHTERS.find((fighter) => fighter.index === previousIndex) as FighterType
        
        setFighter(previousFighter)
        
        if (currentFighter && containerWidth) {
            setContainerWidth(containerWidth + 139);
        }
        
    }

    const moveNextFighter = () => {
        const nextIndex = currentFighter?.index !== undefined ? currentFighter.index + 1 : -1;
        const nextFighter = FIGHTERS.find((fighter) => fighter.index === nextIndex) as FighterType
        
        setFighter(nextFighter)
        
        if (currentFighter && containerWidth) {
            setContainerWidth(containerWidth - 139);
        }    
    }

    return (
        <div className="fighter-modal-overlay">
            <div className="fighter-modal-container">
                <TfiClose onClick={handleFighterModal} className='modal-close-icon'/>
                <div className="fighter-detail-container">
                    <div className="bg-smoke">
                        <img src={bgSmoke} alt='smoke background' />
                    </div>
                    <div className="fighter-detail-img-container">
                        <img src={currentFighter?.img} alt={currentFighter?.name} />
                    </div>
                    <div className="fighter-description-container">
                        <h4>{currentFighter?.purpose}</h4>
                        <h2>{currentFighter?.name}</h2>
                        <h3>{currentFighter?.essence}</h3>
                        <p>{currentFighter?.firstDescription}</p>
                        <p>{currentFighter?.secondDescription}</p>
                        <p>{currentFighter?.thirdDescription}</p>
                    </div>
                </div>
                <div className="fighter-line-container">
                    <button disabled={currentFighter?.index === 1} 
                            className="button left-button"
                            onClick={movePreviousFighter}
                            ><LiaAngleLeftSolid/></button>
                    <div className="tick-top">
                        <img src={tick} alt="" />
                    </div>
                    <div style={{marginLeft: `${containerWidth}px`}} className="fighter-swipe-container">
                        {
                            FIGHTERS.map((fighter) => {
                                return (
                                    <div key={fighter.firstDescription} 
                                        className={`fighter-container ${currentFighter === fighter ? 'current-fighter' : ''}`}
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
                    <button onClick={moveNextFighter} 
                            disabled={currentFighter?.index === FIGHTERS.length} 
                            className="button right-button"><LiaAngleRightSolid/></button>
                </div>
            </div>
        </div>
        
    )
}