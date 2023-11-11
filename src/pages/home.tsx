import logo from '../assets/images/different/mk1-logo-tm.webp'
import liuKang from '../assets/images/different/liu-kang-wfire.webp'
import mk1Logo from '../assets/images/different/sigil.webp'
import { MainNav } from "../components/mainNav";
import {LiaPlaySolid} from "react-icons/lia"
import { FireFrame } from "../components/fireFrame";
import { VideoModal } from "../components/modal windows/videoModal";
import { useContext, useLayoutEffect } from "react";
import { MKContext } from "../utils/context";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomVideo } from "../components/customVideo";
import videoUrl from '../assets/videos/hero.mp4'
import KombatPack from '../assets/videos/kombat-pack.mp4'

export const Home = () => {
    const {showVideoModal, setShowVideoModal, handlePurchase} = useContext(MKContext)
    gsap.registerPlugin(ScrollTrigger)

    // useLayoutEffect(() => {
    //     // const tl = gsap.timeline({
    //     //     scrollTrigger: {
    //     //         trigger: '.fire-block-left-img-container',
    //     //         scrub: true,
    //     //     }
    //     // })

    //     // tl.from('.fire-block-left-img-container', {
    //     //     scale: 0.9,
    //     //     y: 10
    //     // }).to('.fire-block-left-img-container', {scale: 1})



    //     // const tl2 = gsap.timeline({
    //     //     scrollTrigger: {
    //     //         trigger: '.fire-block-title',
    //     //         start: 'top 130%',
    //     //         scrub: true,
    //     //     }
    //     // })

    //     // tl2.from('.fire-block-title', {
    //     //     scale: 0.5,
    //     //     opacity: 0
    //     // }).to('.fire-block-title', {scale: 1, opacity: 1})


    //     // const tl3 = gsap.timeline({
    //     //     scrollTrigger: {
    //     //         trigger: '.fire-block-text',
    //     //         start: 'top 115%',
    //     //         scrub: true,
    //     //     }
    //     // })

    //     // tl3.from('.fire-block-text', {
    //     //     scale: 0.3,
    //     //     opacity: 0,
    //     // }).to('.fire-block-text', {scale: 1, opacity: 1})

    //     const tl4 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.titles-h3',
    //             start: 'top 350px',
    //             end: 'top 300px',
    //             scrub: true,
    //         }
    //     })

    //     tl4.from('.titles-h3', {
    //         scale: 0.3,
    //         opacity: 0,
    //         // delay: 1,
    //         // duration: 3,
    //         // ease: 'power1.ease'
    //     }).to('.titles-h3', {scale: 1, opacity: 1})

    //     const tl5 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.titles-h2',
    //             start: 'top 250px',
    //             end: 'top 200px',
    //             scrub: true,
    //         }
    //     })

    //     tl5.from('.titles-h2', {
    //         scale: 0.3,
    //         opacity: 0
    //     }).to('.titles-h2', {scale: 1, opacity: 1})

    //     const tl6 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.desc',
    //             start: 'top 300px',
    //             end: 'top 250px',
    //             scrub: true,
    //         }
    //     })

    //     tl6.from('.desc', {
    //         scale: 0.3,
    //         opacity: 0,
    //         delay: 0.5
    //     }).to('.desc', {scale: 1, opacity: 1, delay: 0.5})

    //     const tl7 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.kombat-pack-video-container',
    //             start: 'top 350px',
    //             end: 'top 400px',
    //             scrub: true,
    //         }
    //     })

    //     tl7.from('.kombat-pack-video-container', {
    //         scale: 0,
    //         opacity: 0
    //     }).to('.kombat-pack-video-container', {scale: 1, opacity: 1})
    // }, [])

    


    const handleVideoModal = () => {
        setShowVideoModal(true)
    }

   

    return (
        <main className='main-container'>
            <div>
                <MainNav className={'home-main-nav'}/>
                <CustomVideo className="bg-video" videoUrl={videoUrl} videoHeight="100%"/>
                <div className="main-buy-container">
                    <div className="logo-img-container">
                        <img src={logo} alt="mk1 logo" />
                    </div>
                    <button onClick={handlePurchase} className="buy-now-button">
                        <span>BUY NOW</span>
                    </button>
                </div>
            </div>
                <FireFrame>
                    <div className="fire-block-content">
                        <div className="fire-block-content-left">
                            <div className="fire-block-left-img-container">
                                <img src={mk1Logo} alt="mk 1 Logo" />
                            </div>
                            <div className="fire-block-left-content">
                                <h2 className="fire-block-title">IT’S IN OUR BLOOD</h2>                          
                                <p className="fire-block-text">
                                    <strong>Discover a reborn Mortal Kombat Universe created by the Fire God Liu Kang. </strong>
                                    Mortal Kombat 1 ushers in a new era of the iconic franchise with a new fighting system, game modes, and fatalities!
                                </p>
                            </div>
                        </div>
                        <div className="fire-block-content-right">
                            <img src={liuKang} alt="Liu Kang" />
                        </div>
                    </div>
                </FireFrame>
                {
                    showVideoModal && <VideoModal url='https://www.youtube.com/watch?v=eT-3vhCl6N4'/>
                }
                <div className="home-kombat-pack">
                    <div className="kombat-pack-content">
                        <div className="titles">
                            <h3 className="titles-h3">JUSTICE. THEIR WAY.</h3>
                            <h2 className="titles-h2">KOMBAT PACK</h2>
                        </div>
                        <div className="desc">
                            <p>Introducing your roster for the Mortal Kombat 1 Kombat Pack fighters.</p>
                            <h4>TAKEDA • QUAN CHI • ERMAC • PEACEMAKER • HOMELANDER • OMNI-MAN</h4>
                        </div>
                        <div className="kombat-pack-video-container">
                            <div className="kombat-pack-video">
                                <CustomVideo videoUrl={KombatPack} videoHeight='100%'/>
                            </div>
                        </div>
                        <LiaPlaySolid onClick={handleVideoModal} className="play-icon"/>
                    </div>
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
        </main>
    )
}