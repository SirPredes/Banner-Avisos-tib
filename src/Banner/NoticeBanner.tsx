import warningImg from '../assets/warning.svg'
import previousImg from '../assets/angle-left_grey.svg'
import nextImg from '../assets/angle-right_grey.svg'
import closeImg from '../assets/close_red.svg'

export function NoticeBanner(){
    return (
        <>
            <div className="notice-container">
                <div className="notice-content">
                    <div className="notices-icon-container">
                        <img className="notices-icon" src={warningImg} alt="aviso" />
                        <p className="noticesNumber">{}</p>
                    </div>
                    <div className="notices-previous">
                        <img className="notices-previous" src={previousImg} alt="Aviso anterior" />
                    </div>
                    <div className="notice-info">
                        <h3 className='notice-info-header'>{}</h3>
                        <p className='notice-info-body'>{} <a href="">{}</a></p>
                    </div>
                    <div className="notice-next">
                        <img className="notices-next" src={nextImg} alt="Aviso siguiente" />
                    </div>
                    <div className="notice-close">
                        <img className="notices-close" src={closeImg} alt="Cerrar avisos" />
                    </div>
                </div>
            </div>
        </>
    );
}