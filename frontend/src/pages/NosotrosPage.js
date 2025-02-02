import React from 'react';
import '../styles/components/pages/NosotrosPage.css'

const NosotrosPage = (props)=>{
    return (
        <main className="holder">
             <div className="historia">

                    <h2>Historia</h2>
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
               
                <div className="staff">
                    <h2>Staff</h2>
                    <div className="personas">
                        <div className="persona">
                        <img src="images/nosotros/nosotros1.jpg" alt ="Juan Gomez" />
                        <h5>Juan Gomez</h5>
                        <h6>Gerente General</h6>
                        <p>
                            Ipsum enim sint do incididunt incididunt nisi. 
                            Labore tempor aliqua eu nulla non nulla consequat pariatur aliqua sint.
                            Elit ea anim proident fugiat quis do. 
                            Anim veniam deserunt minim culpa non voluptate anim officia reprehenderit reprehenderit.
                        </p>
                </div>
            </div>
            </div>
        </main>
    )
}

export default NosotrosPage; 

