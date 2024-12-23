import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './Props';
import TodoList from './Keys';
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoList />
  </StrictMode>
)
