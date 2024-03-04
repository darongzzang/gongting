import React from 'react'; //클래스 가져옴
import ReactDOM from 'react-dom/client'; //클래스 가져옴
import './index.css';
// import Routes from "./Routes";
import App from './App'; //클래스?
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  
    {/* app.js에 정의된 컴포넌트 */}
  </React.StrictMode>
);

// ReactDOM.render(<Routes />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
