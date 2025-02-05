import React from 'react'

const ComprasItem = (props) => {


        const{ id, expedienteOC, proveedor, mercaderia, fechaAltaEntrega, lugarDeposito, cantidadTotal, imagen } = props;

    return (
        <div className="compras">

            <h1>{expedienteOC}</h1>
            <h2>{mercaderia}</h2>
            <h4>{id}</h4>
            <h4>{proveedor} - {fechaAltaEntrega} - {cantidadTotal} - {lugarDeposito}</h4>
            <img src={imagen} alt="imagen"/>
            
            <hr />
        </div>
    );

}

export default ComprasItem;