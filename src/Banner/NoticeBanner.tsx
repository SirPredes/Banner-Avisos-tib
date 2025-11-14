import {useEffect, useState} from 'react'

import '../index.css'

import warningImg from '../assets/warning.svg'
import previousImg from '../assets/angle-left_grey.svg'
import nextImg from '../assets/angle-right_grey.svg'
import closeImg from '../assets/close_red.svg'

import noticesArray from './avisos_PRO_CTM_response.json'
import type {LineIdName} from './lineIdName'

export function NoticeBanner(){
    const notices = noticesArray.filter(notice => notice.title.length !== 0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [lines, setLines] = useState<LineIdName[]>([]);

    const [closed, setClosed] = useState(false);
    
    const currentNotice = notices[currentIndex];

    useEffect(() => {
        fetch("https://www.tib.org/o/manager/lines/ctmr4")
            .then(res => res.json())
            .then(data => setLines(data));
    },[]);

    const getLinesByIds = (ids:number[]): string[] => {
        return ids.map(id =>{
                const line = lines.find(l => l.lineId === id);
                if(!line) return "Línea desconocida";

                let code = line.lineCode;
                
                if(/^\d/.test(code)){
                    code = "L" + code;
                }

                return code
            }
        )
    };

    const handlePrevious = () => {
        setCurrentIndex(prev => (prev === 0 ? 0 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prev => (prev === notices.length - 1 ? notices.length - 1 : prev + 1));
    };

    const handleClose = () => {
        setClosed(prev => (prev ? false : true));
    };

    return (
        <>
            <div className="notice-container" style={closed ? {display: 'none'} : {}}>
                <div className="notice-content">
                    <div className='notice-left-banner'>
                        <div className='notice-warning-previous'>
                            <div className="notices-icon-container">
                                <img className="notices-icon" 
                                    src={warningImg} 
                                    alt="aviso" 
                                />
                                <div className='notices-icon-number'>
                                    <p className="notices-number">{notices.length}</p>
                                </div>
                            </div>
                            <div className={`notice-previous`}
                                onClick={handlePrevious}
                                style={{visibility: currentIndex === 0 ? 'hidden' : 'visible'}}
                            >
                                <img className="notices-previous" 
                                    src={previousImg} 
                                    alt="Aviso anterior" 
                                />
                            </div>
                        </div>
                        <div className="notice-info">
                            <h3 className='notice-info-header'>{getLinesByIds(currentNotice.afls).join(', ')}</h3>
                            <div className='notice-info-body'>
                                <p>{currentNotice.title} <a href={currentNotice.url}>Leer más{/*Aqui mirar com ho fan entre idiomes*/}</a></p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='notice-right-banner'>
                        <div className="notice-next"
                        onClick={handleNext}
                        style={{visibility: currentIndex === notices.length -1 ? 'hidden' : 'visible'}}
                        >
                            <img className={`notices-next`} 
                                src={nextImg} 
                                alt="Aviso siguiente"
                            />
                        </div>
                        <div className="notice-close"
                            onClick={handleClose}
                        >
                            <img className="notices-close" 
                                src={closeImg} 
                                alt="Cerrar avisos" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}