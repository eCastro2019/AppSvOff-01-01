// Card Principal individual, que solo muestra la informaion necesaria sin toda la informacion de la base de datos

import React from 'react';
import { Link } from 'react-router-dom';

export const SocietyCard = ({
    id_society,
    company, 
    note,
    address
}) => {

    return (
        <div className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 540 } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ `https://raw.githubusercontent.com/eCastro2019/Fotos-de-Empresa/main/${ id_society }.png` } className="card-img" alt={ company } />
                </div>
                <div className="col-md-12">
                    
                    <div className="card-body">
                        <h5 className="card-title"> { company } </h5>
                        <small>{ address } </small>
                        <p className="card-text"> { note }  </p>                                            

                        <Link to={ `./view/${ id_society }` }>
                            Más...
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )

}


export const SocietyCardList = ({
    id_society,
    company
}) => {

    return (
        <div className='row'>
            <div className='col'>
                <img src={ `https://raw.githubusercontent.com/eCastro2019/Fotos-de-Empresa/main/${ id_society }.png` } className="card-img" alt={ company } />
            </div>
        </div>
    )

}