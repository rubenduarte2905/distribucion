import React from 'react';
import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/home/img01.jpg" alt="Avion" />

            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Sint eiusmod elit sint quis dolore minim sint pariatur sunt enim.
                        Dolor do exercitation minim dolor elit ex ullamco velit cupidatat officia.
                        Voluptate consectetur minim tempor deserunt officia aute labore ad et eu occaecat anim culpa ipsum.
                        Sit magna cillum do nulla cillum dolore occaecat in sunt.
                    </p>
                    <p>Ex in tempor ad ad exercitation incididunt anim qui velit nisi nostrud.
                        Cupidatat id nostrud aliqua deserunt aute non pariatur irure non nisi veniam.
                        Veniam est ipsum aliqua reprehenderit voluptate qui voluptate.
                    </p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span class="cita">Simplemente excelente</span>
                        <span class="autor">Juan Perez - zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default HomePage; 