import React from 'react';
import MissionsCard from './MissionsCard';
import missions from '../data/missions';

class MissionsList extends React.Component {
  render() {
    return (
      <ul>
        {missions.map((missao) => (
          <MissionsCard
            name={ missao.name }
            year={ missao.year }
            country={ missao.country }
            destination={ missao.destination }
            key={ missao.name }
          />
        ))}
      </ul>
    );
  }
}
export default MissionsList;
