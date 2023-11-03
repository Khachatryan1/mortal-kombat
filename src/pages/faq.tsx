import { memo, useContext } from "react"
import { FireFrame } from "../components/fireFrame"
import { MainNav } from "../components/mainNav"
import { MKContext } from "../utils/context"
import mkLogo from '../assets/images/different/logo-blue.svg'
import mk1Logo from '../assets/images/different/sigil.webp'
import logo from '../assets/images/different/mk1-logo-tm.webp'
import { QUESTIONS } from "../utils/data"

export const Fac = memo(() => {
    const {goHome, handlePurchase} = useContext(MKContext)


    return (
        <div className="faq-container">
            <div className="faq-nav-container">
                <div onClick={goHome} className="faq-nav-logo-container">
                    <img src={mkLogo} alt="mk1 logo" />
                </div>
                <MainNav className="faq-main-nav"/>
                <button onClick={handlePurchase} className="faq-nav-buy-button">
                    <span>BUY NOW</span>
                </button>
            </div>
            <div className="questions-container">
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
                {
                    QUESTIONS.map((item) => {
                        return (
                            <div className="question" key={item.question}>
                                <h2><strong>Q: {item.question}</strong></h2>
                                <p>A: {item.firstAnswer}</p>
                                <p>{item.secondAnswer}</p>
                                <p>{item.thirdAnswer}</p>
                            </div>
                        )
                    })
                }
            </div>
            <FireFrame>
                    <div className="buy-now-bottom">       
                        <div className="mk1Logo-img-container">
                            <img src={mk1Logo} alt="mk 1 Logo" />
                        </div>
                        <div className="logo-container">
                            <img src={logo} alt="logo" />
                        </div>
                        <button onClick={handlePurchase} className="buy-now-button-bottom">
                            <span>BUY NOW</span>
                        </button>
                    </div>
            </FireFrame>
        </div>
    )
})