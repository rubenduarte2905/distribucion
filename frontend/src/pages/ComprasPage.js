import { useState, useEffect} from 'react';
import axios from 'axios';
import ComprasItem from '../components/compras/ComprasItem';

const ComprasPage= (props) => {
   
   const [loading, setLoading] = useState(false);
   const [compras, setCompras] = useState([]);
   
   useEffect(()=>{

       const cargarCompras = async () => {
            setLoading(true);

            const response = await axios.get('http://localhost:3000/api/compras');
            setCompras(response.data);
            setLoading(false);
       } 

       cargarCompras();

   }, [] );
   
   
   
   

   
        return (
            <section className="holder">
                <h2>Compras realizadas</h2>
               {loading ? (
                  <p>Cargando...</p>
               ):(
                    compras.map(item => <ComprasItem key={item.id}
                    expedienteOC={item.expedienteOC}
                    mercaderia={item.mercaderia}
                    proveedor={item.proveedor}
                    fechaAltaEntregas={item.fechaAltaEntregas}
                    lugarDeposito = {item.lugarDeposito}
                    cantidadTotal = {item.cantidadTotal}
                    imagen = {item.imagen}  />


                    )
               )}
             </section>
            
        );
    
    }

export default ComprasPage;
