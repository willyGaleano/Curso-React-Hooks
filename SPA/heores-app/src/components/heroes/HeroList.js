import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  //Volvera a memorizar lo que genera la funcion solo si publisher cambia
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  //const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
