import React from 'react';
import style from "./Main.module.scss"
import styleContainer from "../common/styles/container.module.css"
import photoProfile from '../assets/photoMain/profileImage.jpg'
import MyPDF from '../assets/cv/cv.pdf'
import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';

const Main = () => {

    const profileImg = {
        backgroundImage: `url(${photoProfile})`,
    };
    return (
        <Fade bottom>
        <div className={style.mainBlock} id='main'>
            <div className={styleContainer.container}>
                <Tilt>
                    <div className={style.photo} style={profileImg}></div>
                    </Tilt>
                <div className={style.text}>
                    <span className={style.hiText}>Hi There</span>
                    <h1>I'm Aliaksey Druzhko</h1>
                    <p>Front-end Developer</p>
                    <p className={style.description}>
                        I’m a frontend developer who has
                        a results-focused attitude to creating SPA,
                        using React(JS/TS), Redux.
                    </p>
                    <p className={style.description}>
                        I would like to find project work
                        and full-time employment in a company with
                        a modern approach to development and a
                        collaborative team.
                    </p>
                    <p className={style.description}>
                        My free time is dedicated to improving my English,
                        and learning programming tutorials.
                        Ready to consider project work and full-time
                        employment.
                    </p>
                    <a href={MyPDF} className={style.link} download={'cv.pdf'}>DOWNLOAD RESUME</a>
                </div>

            </div>
        </div>
        </Fade>
    );
};

export default Main;