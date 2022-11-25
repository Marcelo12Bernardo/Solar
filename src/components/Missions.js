import React from 'react';
import Title from './Title';
import MissionsList from './MissionsList';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <MissionsList />
      </div>
    );
  }
}
export default Missions;
