import React from 'react';
import './StudioDescription.css';
import monitor1 from '../images/monitor1.jpg';
import monitor3 from '../images/monitor3.png';
import mic1 from '../images/mic1.jpg';
import mic2 from '../images/mic2.jpg';
import cont from '../images/cont.jpg';
import protools from '../images/protools.jpg';
import kemper from '../images/kemper.jpg';
import lynx  from '../images/lynx.jpg';
import logo from '../images/img-5.png';

function StudioDescription(){
    return(
        
        <div>
        <div className="separador">

        </div>

        <div className="studio-container">
            <img src={logo} alt="logo" id="logo" height="300px"/>
            <h1>MEBRIT STUDIOS</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, tempore esse nihil debitis unde sit a doloremque facilis commodi. Enim fugit asperiores perspiciatis iste aspernatur? Doloremque nihil alias sit quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aspernatur aut exercitationem temporibus blanditiis doloremque ipsa hic tempore explicabo obcaecati optio perferendis saepe, consequuntur rem dolor possimus harum consectetur a?</p>
            
        </div>
        <div className="equipos-container">
            <div className="separador-img">
                
            </div>
            <h1>EQUIPOS</h1>
            <div className="container">
                <div className="row row-cards">
                    <div className="col-md-5 col-sm-10 equipos-card card">
                        <div className="card-body">
                            <img src={monitor1} alt="monitor1" className="card-img-top"/>
                            <h5 className="card-title">MONITOR</h5>
                            <h6 className="card-subtitle mb-2 text-muted">FOCAL SOLO 6BE</h6>
                            {/* <p className="card-text">Microfono de alta sensibilidad. Cuenta ademas con filtro antipop</p> */}
                        </div>                
                    </div>
                    <div className="col-md-5 col-sm-10 equipos-card card">
                        <div className="card-body">
                            <img src={monitor3} alt="monitor3" className="card-img-top"/>
                            <h5 className="card-title">MONITOR</h5>
                            <h6 className="card-subtitle mb-2 text-muted">AVANTONE MIX CUBE</h6>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>                      */}
                        </div>
                    </div>
                </div>
                <div className="row row-cards">
                    <div className="col-md-5 col-sm-10 equipos-card card">                        
                        <div className="card-body">
                            <img src={mic1} alt="monitor3" className="card-img-top"/>
                            <h5 className="card-title">MICROFONO</h5>
                            <h6 className="card-subtitle mb-2 text-muted">MICROFONO NEUMAN TML 103</h6>
                            {/* <p className="card-text">Microfono de alta sensibilidad. Cuenta ademas con filtro antipop</p> */}
                        </div>                       
                    </div>
                    <div className="col-md-5 col-sm-10 equipos-card card">
                        <div className="card-body">
                            <img src={mic2} alt="monitor3" className="card-img-top"/>
                            <h5 className="card-title">MICROFONO</h5>
                            <h6 className="card-subtitle mb-2 text-muted">AUDIO TECHNICA AT2020</h6>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>                      
                    </div>
                </div>
                <div className="row row-cards">
                    <div className="col-md-5 col-sm-10 equipos-card card">                        
                        <div className="card-body">
                            <img src={cont} alt="monitor3" className="card-img-top"/>
                            <h5 className="card-title">CONTRLADOR MIDI</h5>
                            <h6 className="card-subtitle mb-2 text-muted">M-AUDIO KEYSTATION 88ES</h6>
                            {/* <p className="card-text">Microfono de alta sensibilidad. Cuenta ademas con filtro antipop</p> */}
                        </div>                       
                    </div>
                    <div className="col-md-5 col-sm-10 equipos-card card">
                        <div className="card-body">
                            <img src={protools} alt="monitor3" className="card-img-top"/>
                            <h5 className="card-title">SOFTWARES</h5>
                            <h6 className="card-subtitle mb-2 text-muted">ABLETON LIVE 11</h6>
                            <h6 className="card-subtitle mb-2 text-muted">PRO TOOLS 12</h6>
                            <h6 className="card-subtitle mb-2 text-muted">STAY DIGITAL ALL ACCESS</h6>
                            <h6 className="card-subtitle mb-2 text-muted">SLATE DIGITAL TRIGGER</h6>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>                      
                    </div>
                </div>
                <div className="row row-cards">
                    <div className="col-md-5 col-sm-10 equipos-card card">                        
                        <div className="card-body">
                            <img src={lynx} alt="monitor3" className="card-img-top"/>
                            <h5 className="card-title">INTERFACES</h5>
                            <h6 className="card-subtitle mb-2 text-muted">LYNX HILO</h6>
                            <h6 className="card-subtitle mb-2 text-muted">FOCUSRITE</h6>
                            <h6 className="card-subtitle mb-2 text-muted">SCARLET 18I20</h6>
                            {/* <p className="card-text">Microfono de alta sensibilidad. Cuenta ademas con filtro antipop</p> */}
                        </div>                       
                    </div>
                    <div className="col-md-5 col-sm-10 equipos-card card">
                        <div className="card-body">
                            <img src={kemper} alt="monitor3" className="card-img-top"/>
                            <h5 className="card-title">EQUIPAMIENTO PARA BAJO Y GUITARRA</h5>
                            <h6 className="card-subtitle mb-2 text-muted">KEMPER1</h6>
                            <h6 className="card-subtitle mb-2 text-muted">TWO NOTES TORPEDO LIVE</h6>
                            <h6 className="card-subtitle mb-2 text-muted">KORG PICHBLACK PRO</h6>
                            <h6 className="card-subtitle mb-2 text-muted">MESAO BOGGIE</h6>
                            <h6 className="card-subtitle mb-2 text-muted">DUAL RECTIFIER</h6>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>                      
                    </div>
                </div>
            </div>
            
        </div>
    </div>    
        
    )
}

export default StudioDescription;