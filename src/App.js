import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import axios from 'axios';

const TOKEN_URL = 'https://us.battle.net/oauth/token';
const CREDS =
  'ZWJmZmQ0NDNlNzNlNGJlYWE5N2U1OTAyNGNmOTZjOTQ6UjhjUXc2V3BCdEM1Z08xT3cxUDZRN1ZYVlFhOTVwcWE=';

function App() {
  const [creature, setCreature] = useState({});
  const [newCreature, setNewCreature] = useState('');
  const [token, setToken] = useState('');
  const [portraits, setPortraits] = useState([]);

  const URL = `https://us.api.blizzard.com/data/wow/creature/${newCreature}?namespace=static-us&locale=en_US&access_token=${token}`;

  useEffect(() => {
    axios
      .get(
        `${TOKEN_URL}?grant_type=client_credentials`,
        buildHeader('Basic', CREDS)
      )
      .then(response => {
        setToken(response.data.access_token);
      });
  }, []);

  const buildHeader = (tokenType, token) => {
    const header = {
      headers: {
        Authorization: tokenType + ' ' + token
      }
    };
    return header;
  };

  const handleChange = event => {
    event.preventDefault();
    setNewCreature(event.target.value);
  };

  const handleSelect = event => {
    event.preventDefault();
    const header = buildHeader('Bearer', token);

    axios.get(URL, header).then(res => {
      setCreature(res.data);

      axios.get(res.data.creature_displays[0].key.href, header).then(stress => {
        const images = stress.data.assets.map(image => image.value);
        setPortraits(images);
        console.log(images);
      });
    });
  };
  return (
    <div className='App'>
      <h1>World of Warcraft Bestiary</h1>
      <form>
        <label>
          enter NPC id : <input type='text' onChange={handleChange} />
        </label>
        <button type='submit' onClick={handleSelect}>
          I am spartan
        </button>
      </form>
      <div>
        <h4>{creature.name}</h4>
        <img src={portraits[2]} alt=':D' />
      </div>
    </div>
  );
}

export default App;
