import { society } from '../data/conexiones';

export const getSocietiesByName = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLocaleLowerCase();
    return society.filter( view => view.company.toLocaleLowerCase().includes( name )  );

}