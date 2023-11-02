import logo from '../assets/images/wb-logo.svg'
import { TbWorld } from "react-icons/tb"
import { AiFillBug, AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { HiOutlineSupport } from "react-icons/hi"
import { BiLogoTiktok } from "react-icons/bi"
import { BsTwitch, BsDiscord } from "react-icons/bs"
import { NavLink, useLocation } from 'react-router-dom'
import { memo, useContext } from 'react'
import { MKContext } from '../utils/context'

export const Header = memo(() => {
    const {setShowLanguageModal, language, headerRef} = useContext(MKContext)
    const location = useLocation()

    let headerClassName = 'transparent-header'

    if (location.pathname === '/') {
        headerClassName = 'transparent-header'
    } else if (location.pathname === '/buy%20now') {
        headerClassName = 'blue-header'
    } else if (location.pathname === '/GAME%20INFO') {
        headerClassName = 'transparent-header'
    } else if (location.pathname === '/ROSTER') {
        headerClassName = 'blue-header'
    } else if (location.pathname === '/MEDIA') {
        headerClassName = 'blue-header'
    } else if (location.pathname === '/FAQ') {
        headerClassName = 'blue-header'
    } else if (location.pathname === '/ESPORTS') {
        headerClassName = 'blue-header'
    }

    const handleLanguageModal = () => {
        setShowLanguageModal(true)
    }

    return (
        <header ref={headerRef} className={headerClassName}>
            <nav className='header-nav'>
                <div className='header-nav-left'>
                    <a className='wb-link' href="https://warnerbrosgames.com/" target='_blank' rel="noreferrer">
                        <img src={logo} alt="Warner Bros Games Logo" />    
                    </a>
                    <div onClick={handleLanguageModal}>
                        <TbWorld className='lang-logo'/> {language}
                    </div>
                    <div  className='MK30th'>
                        <a href="https://mk30.mortalkombat.com/en-us" target='_blank' rel="noreferrer">
                            <img src="https://cdn-mk1.mortalkombat.com/static/mk30-icon.png" alt=" MK 30TH ANNIVERSARY " />
                            <span>MK 30TH ANNIVERSARY</span> 
                        </a>
                    </div>
                    <div className='shop-merch'>
                        <a href="https://wbshop.com/collections/mortal-kombat?utm_source=mortalkombat.com&utm_medium=referral&utm_campaign=mortal_kombat&utm_term=&utm_content=mortal_kombat" target='_blank' rel="noreferrer"> SHOP MERCH </a>
                    </div>
                </div>
                <div className='header-nav-right'>
                    <div className='header-nav-support-block'>
                        <div className='header-nav-support'>
                            <a className='link' href="https://mortalkombat1.bugs.wbgames.com/all" target='_blank' rel="noreferrer"><AiFillBug className='icon'/> REPORT A BUG</a>
                            <a className='link support' href="https://mortalkombatgamessupport.wbgames.com/hc/en-us/categories/16745181128723" target='_blank' rel="noreferrer"><HiOutlineSupport className='icon'/> Support </a>
                        </div>
                        <a className='link' href="https://www.mortalkombat.com/en-us/patch-notes" target='_blank' rel="noreferrer"> PATCH NOTES </a>
                    </div>
                    <div>
                        <ul className='header-nav-media'>
                            <li>
                                <a className='link red' href="https://www.youtube.com/MortalKombat" target='_blank' rel="noreferrer"><AiFillYoutube/></a>
                            </li>
                            <li>
                                <a className='link blue' href="https://www.instagram.com/mortalkombat/" target='_blank' rel="noreferrer"><AiOutlineInstagram/></a>
                            </li>
                            <li>
                                <a className='link blue' href="https://twitter.com/mortalkombat" target='_blank' rel="noreferrer"><AiOutlineTwitter/></a>
                            </li>
                            <li>
                                <a className='link red' href="https://www.tiktok.com/@mortalkombat" target='_blank' rel="noreferrer"><BiLogoTiktok/></a>
                            </li>
                            <li>
                                <a className='link purple' href="https://www.twitch.tv/netherrealm" target='_blank' rel="noreferrer"><BsTwitch/></a>
                            </li>
                            <li>
                                <a className='link purple' href="https://discord.com/invite/mortalkombat" target='_blank' rel="noreferrer"><BsDiscord/></a>
                            </li>
                        </ul>
                    </div>
                    <NavLink className='sign-in' to={'/'}>Sign in</NavLink>
                </div>
            </nav>
            
        </header>
    )
})