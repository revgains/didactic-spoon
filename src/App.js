import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import Boss from './components/Boss';
import styled from '@emotion/styled';

const AppWrapper = styled.div`
  margin: -8px;
  padding: 24px;
  display: flex;
  flex-direction: row;
  background-image: url('http://getwallpapers.com/wallpaper/full/8/0/8/1291643-new-wow-orc-wallpaper-3840x2160.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
  justify-content: center;
`;

const Input = styled.input`
  width: 200px;
  height: 32px;
  font-size: 18px;
  padding-left: 16px;
  border-style: none;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
`;

const Button = styled.button`
  width: 64px;
  color: white;
  height: 34px;
  border-style: none;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  background-color: red;
  position: absolute;
`;

function App() {
  const [creatures, setCreature] = useState([]);
  const [zone, setZone] = useState('');

  const URL = `http://localhost:3001/api/bosses`;

  const handleChange = event => {
    event.preventDefault();
    setZone(event.target.value);
  };

  const handleSelect = event => {
    event.preventDefault();

    axios.get(`${URL}/${zone}`).then(res => {
      setCreature(res.data);
    });
  };
  return (
    <AppWrapper>
      <form>
        <label>
          <Input type='text' onChange={handleChange} />
        </label>
        <Button type='submit' onClick={handleSelect}>
          <strong>Search</strong>
        </Button>
      </form>
      <div>
        <ul>
          {creatures.map(creature => (
            <Boss
              name={creature.name}
              zone={creature.zone}
              baseHp={creature.baseHp}
              spells={creature.spells}
            />
          ))}
        </ul>
      </div>
    </AppWrapper>
  );
}

export default App;
