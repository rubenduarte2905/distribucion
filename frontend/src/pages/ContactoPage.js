import React from 'react';
import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">

            <div>
 
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="nombre">email</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="nombre">Telefono</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="nombre">Mensaje</label>
                        <input type="text" name="" />
                    </p>
                    <p class="acciones"><input type="submit" value="Enviar" />
                    </p>


                </form>

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