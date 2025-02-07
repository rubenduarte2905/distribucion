import '../styles/components/pages/ContactoPage.css';
import {useState} from 'react';
import axios from 'axios';



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
        <main className="holder contacto">

            <div>
 
                <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" name="nombre" class="form-control"  value = {formData.nombre} onChange = {handleChange}  />
                    </div>
                  
                    <div class="mb-3">
                         <label for="nombre" class="form-label">email</label>
                        <input type="text" name="email" class="form-control"  value = {formData.email} onChange = {handleChange}   />
                    </div>    
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Telefono</label>
                        <input type="text" name="telefono" class="form-control"  value = {formData.telefono} onChange = {handleChange}   />
                    </div>
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Mensaje</label>
                        <textarea type="text" name="mensaje" class="form-control"  value = {formData.mensaje} onChange = {handleChange}></textarea> 
                    </div>
                    <div class="acciones"><input type="submit" value="Enviar" />
                    </div>
                </form>
                 {sending ? <p>Enviando...</p>: null}
                 {msg ? <p>{msg}</p>:null}  
            </div>
            <div>
                <h2>Centro de Distribución</h2>
                <ul>
                    <li>Teléfono: 0280 4432022</li>
                    <li>Email: admin@distrisoc.com</li>
                    <li>Facebook: distrisoc01</li>
                    <li>Twitter: "@distrisoc01</li>
                    <li>X: "#distrisoc01</li>

                </ul>
            </div>  
        </main>

    );
}

export default ContactoPage;