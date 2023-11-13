import { useContext } from 'react'
import { MKContext } from '../../utils/context'
import {AMERICA, EUROPE, ASIA, MIDDLE_EAST_AFRICA} from '../../utils/data'
import { TfiClose } from "react-icons/tfi"


export const LanguageModal = () => {
    const {setShowLanguageModal, setLanguage} = useContext(MKContext)

    const printLangList = (list: string[], title: string) => {
        return <div className='language-modal-section'>
                    <h3>{title}</h3>
                    <ul>
                        {
                            list.map(language => (
                                <li onClick={(e) => selectLanguage(e.currentTarget)} key={language}>
                                    <p>{language}</p>
                                </li>
                            ))
                        }
                    </ul>
              </div>
    }
        
    const handleLanguageModal = () => {
        const modalContainer = document.querySelector('.language-modal-container')
        modalContainer?.classList.add('close')

        setTimeout(() => {
            setShowLanguageModal(false)
        }, 500)
    }

    const selectLanguage = (element: HTMLLIElement) => {
        setLanguage(element.innerText)
        handleLanguageModal()
    }

    return (
        <div className="language-modal-overlay">
            <div className={'language-modal-container'}>
                <div className='language-modal-header'>
                    <h2>SELECT REGION</h2>
                    <TfiClose onClick={handleLanguageModal} className='modal-close-icon'/>
                </div>
                    {printLangList(AMERICA, 'AMERICAS')}
                    {printLangList(EUROPE, 'EUROPE')}
                    {printLangList(ASIA, 'ASIA & OCEANIA')}
                    {printLangList(MIDDLE_EAST_AFRICA, 'MIDDLE EAST & AFRICA')}
            </div>
        </div>
    )
}