import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Top  from './Top';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  // React.useEffect(() => {
  //   AOS.init({
  //     offset: 100,
  //     duration: 800,
  //     easing: "ease-in-sine",
  //     delay: 100,
  //   });
  //   AOS.refresh();
  // }, []);
  return (
    <Router>
        <Top />
            <div className="container mt-4">
                <Routes>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.component} />
                    ))}
                </Routes>
            </div>
    </Router>
  );
};
export default App;
