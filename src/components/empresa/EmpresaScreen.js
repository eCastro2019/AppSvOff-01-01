import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getSocietiesByName } from '../../selectors/getSocietiesByName';
import { SocietyListFilter } from '../card_conexiones/SocietyList';
import { SocietyCard } from '../card_conexiones/SocietyCard';

export const EmpresaScreen = ({ history }) => {
    
    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    const { searchText } = formValues;
    
    const societiesFiltered = useMemo(() => getSocietiesByName( q ), [q])


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <div>
            <h1>Control de Empresas</h1>            
            <hr />
            
            <div className="row">
                
                <div className="col">  
                    <h5> Buscar empresa... </h5>                                                            
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Encuentra tu empresa"
                            className="form-control"
                            name="searchText"
                            autoFocus
                            autoComplete="off"
                            value={ searchText }                            
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn btn-block btn-dark"
                        >
                            Buscar...
                        </button>
                    </form>

                    <h3 className='text-center'>
                        Catalogo de Empresas                       
                    </h3>
                    <hr style = { { border: '1px solid' } } />
                    
                    <SocietyListFilter category="Empresas" />
                </div>


                <div className="col">

                    <h4> Detalle de Empresa </h4>
                    <hr />

                    { 
                        (q ==='') 
                            && 
                            <div className="alert alert-info">
                                ningun resultado filtrado por el momento...
                            </div>
                    }

                    { 
                        (q !=='' && societiesFiltered.length === 0 ) 
                            && 
                            <div className="alert alert-danger">
                                Error de busqueda, no se encuentra { q }
                            </div>
                    }

                    {
                        societiesFiltered.map( view => (
                            <SocietyCard 
                                key={ view.id_society }
                                { ...view }
                            />
                        ))
                    }

                </div>

            </div>            

        </div>
    )
}
