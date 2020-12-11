import { society } from '../data/conexiones';

export const getSocietiesByCategory = ( category ) => {

    const validSocieties = ['Empresas', 'Computer'];

    if ( !validSocieties.includes( category ) ) {
        throw new Error(`category "${ category }" no es correcto`);
    }

    return society.filter( view => view.category === category );

}