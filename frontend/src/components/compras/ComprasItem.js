import React from 'react'

const ComprasItem = (props) => {


        const{ id, expedienteOC, mercaderia, proveedor,  fechaAltaEntregas, lugarDeposito, cantidadTotal, imagen } = props;

    return (
        <div className="compras">

            <h1>Expediente: {expedienteOC}</h1>
            <h4>  Insumo: {mercaderia}</h4>
            <img src={imagen} alt="imagen"/>
            <h4> Depósito: {lugarDeposito} Fecha Inicio Entregas: {fechaAltaEntregas} Cantidad Existente: {cantidadTotal} </h4>
            <h4> Proveedor: {proveedor}</h4>
            
            <hr />
        </div>
    );

}

export default ComprasItem;

