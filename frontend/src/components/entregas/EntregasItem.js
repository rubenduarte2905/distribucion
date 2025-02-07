import React from 'react'

const EntregasItem = (props) => {


        const{ id, expedienteOC, beneficiario,  cantidad, fechaEntrega } = props;

    return (
        <div className="entregas">

       
            <h4>  Beneficiario: {beneficiario}</h4>
         
            <h4>Expediente: {expedienteOC}  Fecha Entrega: {fechaEntrega} Cantidad : {cantidad} </h4>
          
            
            <hr />
        </div>
    );

}

export default EntregasItem;

