import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import Boss from './components/Boss';
import styled from '@emotion/styled';
import Zone from './components/Zone';

const AppWrapper = styled.div`
  margin: -8px;
  padding: 24px;
  display: flex;
  flex-direction: row;
  background-image: linear-gradient(hsl(240, 100%, 10%), hsl(240, 100%, 83%));
  background-repeat: no-repeat;
  background-size: 100%;
  flex-wrap: wrap;
  height: 100vh;
  align-content: center;
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
  const [selectedZone, setSelectedZone] = useState('');
  const [zones, setZones] = useState([]);

  const URL = `http://localhost:3001/api/bosses`;

  useEffect(() => {
    axios.get('http://localhost:3001/api/zones').then(res => {
      console.log(res.data);
      setZones(res.data);
    });
  }, []);

  const handleChange = event => {
    event.preventDefault();
    setSelectedZone(event.target.value);
  };

  const handleSelect = event => {
    event.preventDefault();

    axios.get(`${URL}/${selectedZone}`).then(res => {
      setCreature(res.data);
    });
  };
  return (
    <AppWrapper>
      {zones.map(zone => (
        <Zone name={zone.name} background={zone.background} />
      ))}
    </AppWrapper>
  );
}

export default App;
