import { GrFormClose } from "react-icons/gr"
import WBLogo from '../../assets/images/different/WB_Logo.png'
import { MKContext } from "../../utils/context"
import { useContext } from "react"


export const CookieModal = () => {
    const {setShowCookieModal} = useContext(MKContext)

    const handleCookieModal = () => {
        document.body.style.overflow = 'auto'
        setShowCookieModal(false)
    }

    return (
        <div className="cookie-modal-overlay">
            <div className="cookie-modal-container">
                <div className="cookie-modal-header">
                    <div className="cookie-modal-image-container">
                        <img src={WBLogo} alt="WB Logo" />
                    </div>
                    <GrFormClose onClick={handleCookieModal} className="cookie-modal-close"/>
                </div>
                <div className="cookie-modal-main">
                    <p>For privacy options, please see our privacy policy: https://www.warnermediaprivacy.com/policycenter/b2c/WM/</p>
                </div>
                <div className="cookie-modal-footer">
                    <button onClick={handleCookieModal}>CLOSE</button>
                </div>
            </div>
        </div>
    )
}