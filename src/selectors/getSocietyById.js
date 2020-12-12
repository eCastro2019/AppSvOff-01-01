import { society } from '../data/conexiones';

export const getSocietyById = ( id_society ) => {
    
    return society.find( view => view.id_society === id_society );

}