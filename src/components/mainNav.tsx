import { NavLink } from "react-router-dom"
import { MainNavProps } from "../utils/types"
import { memo } from "react"

export const MainNav = memo(({className}: MainNavProps) => {
    const navItems: string[] = ['GAME INFO', 'ROSTER', '#MKKOLLECTIVE', 'MEDIA', 'ESPORTS', 'FAQ']
    
    return (
        <nav className={className}>
            <ul>
                {
                    navItems.map((item) => {
                        return (
                            <li key={item}>
                                <NavLink className='inside-nav-text' to={`/${item === '#MKKOLLECTIVE' ? 'MKKOLLECTIVE' : item}`}>{item}</NavLink>
                            </li>                      
                        )
                    })
                }
            </ul>
        </nav>
    )
})