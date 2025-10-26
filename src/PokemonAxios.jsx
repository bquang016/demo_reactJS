// src/PokemonAxios.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // 1. Import axios

function PokemonAxios() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // 2. Gọi API bằng axios.get()
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');

        // 3. Dữ liệu JSON nằm ngay trong `response.data`
        setPokemon(response.data);

      } catch (err) {
        // 4. axios tự động ném lỗi nếu status là 4xx/5xx
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
    
  }, []);

  // Giao diện render giống hệt ví dụ fetch
  if (loading) {
    return <div>Đang tìm Pokémon (với Axios)... ⏳</div>;
  }

  if (error) {
    return <div>Lỗi: {error} ❌</div>;
  }

  return (
    <div>
      <h1>Thông tin Pokémon (Axios)</h1>
      {pokemon && (
        <div>
          <h2>{pokemon.name.toUpperCase()}</h2>
          <img 
            src={pokemon.sprites.front_default} 
            alt={`Hình ảnh của ${pokemon.name}`} 
            style={{ width: '150px' }}
          />
          <p><strong>ID:</strong> {pokemon.id}</p>
        </div>
      )}
    </div>
  );
}

export default PokemonAxios;