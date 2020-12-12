import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { computer } from '../../data/conexiones';
import { getSocietyById } from '../../selectors/getSocietyById';

export const SocietyScreen = ({ history }) => {

    const { SocietyId } = useParams();

    const view  = useMemo(
        () => getSocietyById( SocietyId ), [ SocietyId ]
    );   
 
    if ( !view ) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }

    const {
        id_society,
        company,
        note,
        address               
    } = view;

    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ `https://raw.githubusercontent.com/eCastro2019/Fotos-de-Empresa/main/${ id_society }.png` }
                    alt={ company }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <div className='row'>
                    <div className='col-1'>
                        { id_society } 
                    </div>
                    <div className='col-11'>
                        <h1> { company }  </h1>
                        <small> { address } </small>
                        <p> { note } </p>
                    </div>
                </div>                  

                {
                    computer[SocietyId].map( (  { id_computer, name_computer } ) => (                        
                        <ul className="list-group list-group-flush" id= { id_computer }>
                            <li className="list-group-item"> <b> Computadora: </b> { name_computer } </li>                                        
                        </ul> 
                    ))
                }

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>

        </div>
    )
}
