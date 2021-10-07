import './ladningSectionBackground.css';
import './landingSection.scss';

export function LandingSection() {
    return (
        <section className="landingSection lines">

            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>

            <h1 className="landingName">Hubert Radzewicz</h1>
            <p className="landingOccupation">Junior Frontend Developer</p>
            <p className="landingEnjoyer">Average React enjoyer</p>

            <div className="landingImage"></div>

            <p className="landingDescription">
                Welcome to my portfolio
                <br /><br />
                Hi! I am begining junior frontend developer.<br />
                Hi! I am begining junior frontend developer.<br />
                Hi! I am begining junior frontend developer.<br />
                Hi! I am begining junior frontend developer.<br />
            </p>
        </section>
    )
}