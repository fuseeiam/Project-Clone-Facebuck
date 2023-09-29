
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AuthContextProvider from './contexts/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode> => ตรวจจับ Error
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
  //</React.StrictMode>
);
