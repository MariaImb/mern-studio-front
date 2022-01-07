import React, {useState} from 'react'
import './ContactForm.css';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ContactForm = (e) => {
    
    // const [nombre, setNombre] = useState()
    // const [email, setEmail] = useState()
    // const [telefono, setTelefono] = useState()
    // const [asunto, setAsunto] = useState()
    // const [mensaje, setMensaje] = useState()

    //evita que la pagina se recargue cuando se envie el formulario
    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     await axios.post('http://localhost:4000/api/contact', {
    //         nombre: nombre,
    //         email: email,
    //         telefono: telefono,
    //         asunto: asunto,
    //         mensaje: mensaje,

    //     })

    //     setNombre('')
    //     setEmail('')
    //     setTelefono('')
    //     setAsunto('')
    //     setMensaje('')
        
    // }

    return (    
        <>     
            <div className="contact-container">
                <div className="row contcontacto">
                    <div className="col-md-12 contenedortitulo">
                        <h1 className="display-4 font-weight-bold text-uppercase text-center titulocontacto">Contacto</h1>
                        <p className="lead text-center">Completá los campos con tus datos, envianos tu consulta o solicitud de turno y nos pondremos en contacto a la brevedad</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 datoscontacto">                   
                        <div className="infocontacto">
                            <h3><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg> Ubicación</h3>
                            <p>Santiago del Estero 2400<br/> Ciudad de Santa Fe</p>
                        </div>                   
                    
                        <div className="infocontacto">
                            <h3>  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                            </svg> Whatsapp</h3>
                            <p>+54 342-123456</p>
                        </div>
                        <div className="infocontacto">
                            <h3><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                            </svg> E-mail</h3>
                            <p>mebritstudios@123.com</p>
                        </div>  
                    </div>                   
                    <div className="col-md-8">
                    <Formik
                        initialValues={{ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' }}
                        validationSchema= {Yup.object({
                            nombre: Yup.string()
                            .min(3, 'Minimo de 3 caracteres')
                            .required('Requerido'),
                            email: Yup.string().email('Correo electronico no valido').required('Requerido'),
                            telefono: Yup.number()
                            .max(12, 'Numero de telefono no valido')
                            .required('Requerido'),
                            asunto: Yup.string()
                            .max(20, 'Debe tener menos de 20 caracteres')
                            .required('Requerido'),
                            mensaje: Yup.string()
                            .max(120, 'Debe tener menos de 120 caracteres')
                            .required('Requerido'),
                            })}                 
                        onSubmit={(values, { setSubmitting }) => {
                            axios.post('http://localhost:4000/api/contact', {
                            nombre: values.nombre,
                            email: values.email,
                            telefono: values.telefono,
                            asunto: values.asunto,
                            mensaje: values.mensaje,
                            })
                            setSubmitting(false);
                        }}
                        >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                        <form className="contactform" id="contactform" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-8">

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <input name="nombre" type="text" id="nombre" className="form-control my-3" placeholder='Nombre' value={values.nombre} onChange={handleChange} onBlur={handleBlur}/>
                                    <span id="respuesta" className="tab-content">
                                        {errors.nombre && touched.nombre ? errors.nombre:""}&nbsp;
                                    </span>
                                </div>
                                <br/>
                                <div className="col-md-6">
                                    <input name="email" type="text" id="email" className="form-control my-3" placeholder='Email' value={values.email} onChange={handleChange} />
                                </div>
                                <br/>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <input name="telefono" type="text" id="telefono" className="form-control my-3" value={values.telefono} placeholder='Telefono' onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <input name="asunto" type="text" id="asunto" className="form-control my-3" value={values.asunto} placeholder='Asunto' onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <textarea name="mensaje" row="10" id="mensaje" cols="30" className="form-control my-3" height="200px" value={values.mensaje} placeholder='Mensaje' onChange={handleChange}></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 contbutton">
                                    <button type="submit" id="submit" className="btn btn-lg btn-submit btn-outline-light" >Enviar</button>
                                </div>
                            </div>
                        </form>
                        )}</Formik>
                    </div>               
                </div>     
                
            </div>
            <div className="mapa">
                <div dangerouslySetInnerHTML={ {__html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.6958724357764!2d-60.69519412358719!3d-31.611027768398536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5075f3cfffbc7%3A0x36d95453cef4453c!2sEscuela%20de%20Danzas%20Miriam%20Heredia!5e0!3m2!1ses!2sar!4v1625277147779!5m2!1ses!2sar" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'} } />
            </div>
        </>      
    )
}

export default ContactForm;
