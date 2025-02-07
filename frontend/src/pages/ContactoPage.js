import '../styles/components/pages/ContactoPage.css';
import {useState} from 'react';
import axios from 'axios';
import { FaPhone, FaWhatsapp, FaEnvelope, FaFacebook} from "react-icons/fa";



const ContactoPage = (props) => {

    const initialForm ={
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }


    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false){
            setFormData(initialForm)
        }

    }




    return (
        <main className=" holder contacto">

            <div>
 
                <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                   <p>
                        <label for="nombre" >Nombre</label>
                        <input type="text" name="nombre"   value = {formData.nombre} onChange = {handleChange}  />
                    </p>
                  
                    <p>
                         <label for="nombre" >email</label>
                        <input type="text" name="email"   value = {formData.email} onChange = {handleChange}   />
                    </p>    
                    <p>
                        <label for="nombre" >Telefono</label>
                        <input type="text" name="telefono"  value = {formData.telefono} onChange = {handleChange}   />
                    </p>
                    <p>
                        <label for="nombre" >Mensaje</label>
                        <textarea type="text" name="mensaje"   value = {formData.mensaje} onChange = {handleChange}></textarea> 
                    </p>
                    <div class="acciones"><input type="submit" value="Enviar" />
                    </div>
                </form>
                 {sending ? <p>Enviando...</p>: null}
                 {msg ? <p>{msg}</p>:null}  
            </div>
            <div>
                <h2>Centro de Distribución</h2>
              
                    <FaPhone/>: 0280 4432022 <br/>
                    <FaEnvelope/>: admin@distrisoc.com <br/>
                    <FaFacebook/>: distrisoc01 <br/>
                    <FaWhatsapp/>: "+5492804402154 <br/>
                   
                
            </div>  
        </main>

    );
}

export default ContactoPage;