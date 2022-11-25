import React from 'react';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class PlanetList extends React.Component {
  render() {
    return (
      <ul>
        {planets.map((planeta) => (
          <PlanetCard
            planetName={ planeta.name }
            planetImage={ planeta.image }
            key={ planeta.name }
          />
        ))}
      </ul>
    );
  }
}
export default PlanetList;
