import Nav from "./Nav";
import Landing from "./Landing";
import { HelmetProvider } from 'react-helmet-async';
import "./App.css";

//TO DO:
//SEO 
//Production build
//Other site performance related things

//TO DO:
//Landing => our services
//Landing => about
//Landing => Final CTA

//About page <= Landing (about)
//Demo page <= our services (each service demo Figma, Ecommerce, Brochuresite, Maintenance process)

function App() {

  const helmetContext = {};
  
  return (
    <>
    <HelmetProvider context={helmetContext}>
        <Landing></Landing>
          {/* <Route path="/demo" element={<Demo></Demo>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route> */}
    </HelmetProvider>
  </>
  );
}

export default App;
