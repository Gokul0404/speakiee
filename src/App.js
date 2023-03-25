
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layout from './Layout/Layout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Product from './Components/product/Product';
import Service from './Components/service/Service';
import Contact from './Components/contact/Contact';
import ProtectView from './Components/product/ProtectView';
import AboutView from './Components/about/AboutView';
import ServiceView from './Components/service/ServiceView';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="product" element={<Product />} />
      <Route path="service" element={<Service />} />
      <Route path="contact" element={<Contact />} />
      <Route path="protectview" element={<ProtectView />} />
      <Route path="aboutview" element={<AboutView />} />
      <Route path="serviceview" element={<ServiceView />} />
    </Route>
  )
);

function App() {
  return (
    <div  className='App'>
      {/* <Layout /> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
