import { HeaderNav } from './components/headerNav/HeaderNav';
import { LandingSection } from './components/landingSection/LandingSection';
import './mainContainer.scss';

export function Maincontainer() {
    return (
        <main>
            <HeaderNav/>
            <LandingSection/>
        </main>
    )
}