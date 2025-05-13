 
import './App.css'

import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './components/home/HomePage';
import Contactus from './components/contactuspage/Contactus';
import MassagwepageFull from './components/massagepage/MassagepageFull';
import FoodBusiness from './components/foodpage/Foodbusiness';
import AppLayout from './components/ui/AppLayout';
import TennisPage from './components/tennis/TennisPage';
import DancingPages from './components/Dancing/Dancingpages';



const router = createBrowserRouter([
 { 
    path: '/', 
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> }, 
      { path: "contactus", element: <Contactus/> }, 
      { path: "MassageParlour", element: <MassagwepageFull/> },
      { path: "FoodBusiness", element: <FoodBusiness/> },
      { path: "DancingPages", element: <DancingPages/> },
      { path: "TennisPage", element: <TennisPage/> }
    ]
 }]
);




function App() {
  return (
    <RouterProvider router={router} />
    
  );
}

export default App;
