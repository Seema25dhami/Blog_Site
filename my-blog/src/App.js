//import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticleListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
//import axios from 'axios';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <h1>My Blog</h1>
      <div id ="page-body">
        <Routes>
        <Route path = "/" element ={<HomePage />} />
        <Route path = "/about" element ={<AboutPage/>} />
        <Route path = "/articles" element={<ArticleListPage/>} />
        <Route path = "/articles/:articleId" element={<ArticlePage/>} />
        <Route path = "/login" element={<LoginPage />} />
        <Route path = "/create-account" element={<CreateAccountPage />} />
        <Route path = "*" element = {<NotFoundPage />} />
        
        </Routes>
        


      </div>
    </div>
    </BrowserRouter>
    
    
  );
}

export default App;
