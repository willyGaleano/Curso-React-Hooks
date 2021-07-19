import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { NavBar } from "../components/ui/NavBar";
import { DcScreen } from "../components/dc/DcScreen";
import { SearchScreen } from "../components/search/SearchScreen";

export const DashboardRoute = () => {
  //Switch mostrara lo que cumpla la condicion, path
  return (
    //<NavBar /> no hereda las props del react router, por no ser una ruta

    //podriamos obtener el history por parametro, pero no es una buena practica
    //para eso usamos un hook que nos trae el history
    <>
      <NavBar />

      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/herosearch" component={SearchScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
