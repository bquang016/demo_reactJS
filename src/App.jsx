// Import hook 'useState' từ React
import React, { useState } from 'react';
import './App.css'; // Import CSS cho component này

// --- 1. Component con (nhận Props) ---
// Component này nhận một 'prop' tên là 'name'
function WelcomeMessage(props) {
  return (
    <h2>Xin chào, {props.name}! Chào mừng đến với React.</h2>
  );
}

// --- 2. Component con (dùng State và Hook) ---
// Component này có 'state' (trạng thái) riêng của nó
function Counter() {
  // Dùng hook 'useState' để tạo ra một biến state tên là 'count'
  const [count, setCount] = useState(0); // 0 là giá trị khởi tạo

  // Hàm này sẽ được gọi khi click button
  const handleClick = () => {
    setCount(count + 1); // Cập nhật state, làm component re-render
  };

  return (
    <div className="counter-box">
      <p>Bạn đã click {count} lần</p>
      <button onClick={handleClick}>
        Click tôi đi!
      </button>
    </div>
  );
}


// --- 3. Component APP (Component cha) ---
// Đây là component chính, nó sẽ "gọi" 2 component con ở trên
function App() {
  return (
    // <> là một React Fragment, dùng để bọc nhiều element
    <>
      <header className="app-header">
        <h1>Dự án React đầu tiên của tôi</h1>
      </header>
      
      <main>
        {/* Sử dụng component WelcomeMessage và truyền 'prop' name */}
        <WelcomeMessage name="Quang Dai Ka" />
        
        <hr />

        {/* Sử dụng component Counter */}
        <Counter />
      </main>
    </>
  );
}

// Xuất App để file main.jsx có thể import
export default App;