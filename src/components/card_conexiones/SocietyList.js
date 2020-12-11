import React, { useMemo } from 'react';
import { getSocietiesByCategory } from '../../selectors/getHeroesByPublisher';
import { SocietyCard, SocietyCardList } from './SocietyCard';

export const SocietyList = ({ category }) => {

    const society = useMemo(() => getSocietiesByCategory( category ), [ category ] );

    return (
        <div className="card-columns animate__animated animate__fadeIn">
           {
               society.map( view => (
                   <SocietyCard 
                        key={ view.id_society }
                        { ...view }
                    />
                   
               ))
           } 
        </div>
    )
}

export const SocietyListFilter = ({ category }) => {

    const society = useMemo(() => getSocietiesByCategory( category ), [ category ] );

    return (
        <div className="card-columns animate__animated animate__fadeIn">
           {
               society.map( view => (
                   <SocietyCardList 
                        key={ view.id_society }
                        { ...view }
                    />
                   
               ))
           } 
        </div>
    )
}