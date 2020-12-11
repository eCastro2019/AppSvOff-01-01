import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { InicioScreen } from '../components/inicio/InicioScreen';
import { SocietyScreen } from '../components/card_conexiones/SocietyScreen';
import { EmpresaScreen } from '../components/empresa/EmpresaScreen';
import { TrabajosScreen } from '../components/trabajo/TrabajosScreen';

export const DashboardRoutes = () => {

    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/home" component={ InicioScreen } />
                    <Route exact path="/view/:SocietyId" component={ SocietyScreen } />
                    <Route exact path="/empresas" component={ EmpresaScreen } />
                    <Route exact path="/trabajos" component={ TrabajosScreen } />

                    <Redirect to="/home" />
                </Switch>
            </div>


        </>
    )
}
