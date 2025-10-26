// src/PokemonFetcher.jsx

import React, { useState, useEffect } from 'react';

function PokemonFetcher() {
  // State để lưu dữ liệu Pokémon
  const [pokemon, setPokemon] = useState(null);
  
  // State cho việc tải và báo lỗi
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // pikachu, squirtle, charmander, bulbasaur
    const pokemonName = 'pikachu';

    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // 1. Gọi fetch đến API Pokémon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        // 2. Kiểm tra response.ok (quan trọng với fetch)
        if (!response.ok) {
          throw new Error(`Không tìm thấy Pokémon "${pokemonName}"!`);
        }

        // 3. Lấy dữ liệu JSON
        const data = await response.json();
        
        // 4. Cập nhật state với dữ liệu lấy về
        setPokemon(data);

      } catch (err) {
        // 5. Xử lý lỗi
        setError(err.message);
      } finally {
        // 6. Dù thành công hay lỗi cũng tắt loading
        setLoading(false);
      }
    };

    // Gọi hàm fetch
    fetchPokemon();
    
  }, []); // Mảng [] rỗng = chỉ chạy 1 lần khi component render

  // 7. Hiển thị UI dựa trên các state
  
  // Trạng thái Đang tải...
  if (loading) {
    return <div>Đang tìm Pokémon... ⏳</div>;
  }

  // Trạng thái Lỗi
  if (error) {
    return <div>Lỗi: {error} ❌</div>;
  }

  // Trạng thái Thành công
  return (
    <div>
      <h1>Thông tin Pokémon</h1>
      {pokemon && (
        <div>
          {/* API trả về tên trong data.name
            Và hình ảnh trong data.sprites.front_default
          */}
          <h2>{pokemon.name.toUpperCase()}</h2>
          <img 
            src={pokemon.sprites.front_default} 
            alt={`Hình ảnh của ${pokemon.name}`} 
            style={{ width: '150px' }}
          />
          <p><strong>ID:</strong> {pokemon.id}</p>
          <p><strong>Chiều cao:</strong> {pokemon.height * 10} cm</p>
          <p><strong>Cân nặng:</strong> {pokemon.weight / 10} kg</p>
        </div>
      )}
    </div>
  );
}

export default PokemonFetcher;