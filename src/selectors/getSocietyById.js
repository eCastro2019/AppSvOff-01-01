import { computer, society } from '../data/conexiones';

export const getSocietyById = ( id_society ) => {

    return society.find( view => view.id_society === id_society );

}

export const getSocietyByComputer = ( id_society ) => {    

   return computer.find( view2 => view2.society_id === id_society ).map( list => ( list )) 

}