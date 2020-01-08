import React from 'react';
import styled from '@emotion/styled';

const BossWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  flex-direction: column;
  width: 100%;
`;

const NotesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-size: cover;
  background-attachment: scroll;
  flex-direction: column;
  width: 100%;
`;
const SpellContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SpellCard = styled.div`
  width: 250px;
  height: 200px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: auto;
  margin-bottom: 12px;
  align-content: inline;
  border: 1px brown solid;
  &:hover {
    width: 255px;
    height: 205px;
  }
`;

const Boss = props => {
  console.log(props);

  const { name, zone, baseHp, spells } = props;

  const prettyZone = zone.replace(/_/g, ' ');

  return (
    <BossWrapper>
      <h3>{name}</h3>
      <p>Zone: {prettyZone}</p>
      <p>Health: {baseHp}</p>
      <p>Abilities:</p>
      <SpellContainer>
        {spells.map(spell => (
          <SpellCard>
            <h4>{spell.name}</h4>
            <p>{spell.baseDmg}</p>
            <p>{spell.school}</p>
          </SpellCard>
        ))}
      </SpellContainer>
    </BossWrapper>
  );
};

export default Boss;
