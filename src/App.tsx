
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './routes/Home';
import HomeBody from './routes/Home/HomeBody';
import ProfileSearch from './routes/Home/ProfileSearch';

export default function App() {
 
  return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}>
              <Route index element={<Navigate to="/home"/>}/> 
              <Route path="home" element={<HomeBody/> }/>
              <Route path='search' element ={<ProfileSearch/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
     
  );
}
