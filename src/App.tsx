import './assets/styles/style.scss'
import { Header } from './components/header';
import { Home } from './pages/home';
import { Footer } from './components/footer'
import {Routes, Route} from 'react-router'
import { GameInfo } from './pages/gameInfo';
import { Roster } from './pages/roster';
import { MkKollective } from './pages/mkkollective';
import { Media } from './pages/media';
import { Esports } from './pages/esports';
import { Fac } from './pages/faq';
import { BuyNow } from './pages/buyNow';

function App() {
    return (
        <div className='app'>
            <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='GAME INFO' element={<GameInfo/>}/>
                    <Route path='ROSTER' element={<Roster/>}/>
                    <Route path='MKKOLLECTIVE' element={<MkKollective/>}/>
                    <Route path='MEDIA' element={<Media/>}/>
                    <Route path='ESPORTS' element={<Esports/>}/>
                    <Route path='buy now' element={<BuyNow/>}/>
                    <Route path='FAQ' element={<Fac/>}/>
                </Routes>
            <Footer/>
        </div>
    );
}

export default App;
