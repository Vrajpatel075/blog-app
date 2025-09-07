import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BlogsProvider } from './assets/context/Blog.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogsProvider>
    <App />
    </BlogsProvider>
  </StrictMode>,
)
