// src/TodoFetch.jsx

import React, { useState, useEffect } from 'react';

function TodoFetch() {
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect với mảng rỗng [] sẽ chạy 1 lần duy nhất 
  // khi component được render lần đầu (giống componentDidMount)
  useEffect(() => {
    // 1. Định nghĩa hàm gọi API
    const fetchTodo = async () => {
      try {
        setLoading(true);
        // 2. Gọi fetch đến endpoint
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        // 3. fetch không tự báo lỗi 404, 500. Ta phải tự kiểm tra
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // 4. Chuyển đổi response sang JSON
        const data = await response.json();
        
        // 5. Cập nhật state
        setTodo(data);
      } catch (e) {
        // 6. Bắt lỗi nếu có
        setError(e.message);
      } finally {
        // 7. Luôn tắt loading sau khi hoàn thành (dù thành công hay lỗi)
        setLoading(false);
      }
    };

    // 8. Gọi hàm
    fetchTodo();
  }, []); // Mảng rỗng nghĩa là "chỉ chạy 1 lần"

  // Hiển thị giao diện dựa trên state
  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div>Lỗi: {error}</div>;
  }

  return (
    <div>
      <h1>Thông tin Todo (Fetch)</h1>
      {/* Kiểm tra 'todo' có dữ liệu chưa trước khi render */}
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

export default TodoFetch;