// src/TodoAxios.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // 1. Import axios

function TodoAxios() {
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        setLoading(true);
        // 2. Gọi axios.get. Ngắn gọn hơn fetch
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        
        // 3. axios tự động throw error nếu status code là 4xx, 5xx
        // 4. Dữ liệu JSON nằm sẵn trong `response.data`
        setTodo(response.data);

      } catch (e) {
        // 5. Bắt lỗi (từ mạng hoặc từ server)
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodo();
  }, []);

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div>Lỗi: {error}</div>;
  }

  return (
    <div>
      <h1>Thông tin Todo (Axios)</h1>
      {todo && (
        <div>
          <p><strong>ID:</strong> {todo.id}</p>
          <p><strong>Tiêu đề:</strong> {todo.title}</p>
          <p><strong>Hoàn thành:</strong> {todo.completed ? 'Rồi' : 'Chưa'}</p>
        </div>
      )}
    </div>
  );
}

export default TodoAxios;