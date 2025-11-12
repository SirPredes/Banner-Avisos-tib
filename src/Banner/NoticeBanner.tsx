import {useState} from 'react'

import warningImg from '../assets/warning.svg'
import previousImg from '../assets/angle-left_grey.svg'
import nextImg from '../assets/angle-right_grey.svg'
import closeImg from '../assets/close_red.svg'

import noticesArray from './avisos_PRO_CTM_response.json'

export function NoticeBanner(){
    const notices = noticesArray;
    const [currentIndex, setCurrentIndex] = useState(0);

    const [showPreviousIcon, setShowPreviousIcon] = useState(true)
    const [showNextIcon, setShowNextIcon] = useState(true)

    const [closed, setClosed] = useState(false)
    
    const currentNotice = notices[currentIndex];

    const handlePrevious = () => {
        setCurrentIndex(prev => (prev === 0 ? notices.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prev => (prev === notices.length - 1 ? 0 : prev + 1));
    };

    const handleClose = () => {
        setClosed(prev => (prev ? false : true))
    };

    return (
        <>
            <div className="notice-container">
                <div className="notice-content">
                    <div className="notices-icon-container">
                        <img className="notices-icon" src={warningImg} alt="aviso" />
                        <p className="noticesNumber">{}</p>
                    </div>
                    <div className="notices-previous"
                        onClick={handlePrevious}
                    >
                        <img className="notices-previous" src={previousImg} alt="Aviso anterior" />
                    </div>
                    <div className="notice-info">
                        <h3 className='notice-info-header'>Exemple L321</h3>
                        <div className='notice-info-body'>
                            <p>{currentNotice.title} <a href={currentNotice.url}>Leer más{/*Aqui mirar com ho fan entre idiomes*/}</a></p>{
                                //Aixo hauria d'esser es currentNotice.title, s'ha d'averiguar com saber sa linia de s'avis
                                //Aquest ultim per debugging pero despres s'ha d'eliminar
                            }
                            
                        </div>
                    </div>
                    <div className="notice-next"
                        onClick={handleNext}
                    >
                        <img className="notices-next" src={nextImg} alt="Aviso siguiente" />
                    </div>
                    <div className="notice-close"
                        onClick={handleClose}
                    >
                        <img className="notices-close" src={closeImg} alt="Cerrar avisos" />
                    </div>
                </div>
            </div>
        </>
    );
}