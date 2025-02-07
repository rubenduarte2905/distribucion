import { useState, useEffect } from 'react';
import axios from 'axios';
import EntregasItem from '../components/entregas/EntregasItem';

const DistribucionPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [entregas, setEntregas] = useState([]);

    useEffect(() => {

        const cargarEntregas = async () => {
            setLoading(true);

            const response = await axios.get('http://localhost:3000/apiEntregas/entregas');
            setEntregas(response.data);
            setLoading(false);
        }

        cargarEntregas();

    }, []);






    return (
        <section className="holder">
            <h2>Entregas realizadas</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                entregas.map(item => <EntregasItem key={item.id}
                    expedienteOC={item.expedienteOC}
                    beneficiario={item.beneficiario}
                    fechaEntrega={item.fechaEntrega}
                    cantidad={item.cantidad}
                />


                )
            )}
        </section>

    );

}

export default DistribucionPage;