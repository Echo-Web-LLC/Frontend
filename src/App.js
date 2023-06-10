import Nav from "./Nav";
import Landing from "./Landing";
import { HelmetProvider } from 'react-helmet-async';
import "./App.css";

function App() {
  const helmetContext = {};
  return (
    <>
    <HelmetProvider context={helmetContext}>
        <Nav></Nav>
        <Landing></Landing>
          {/* <Route path="/demo" element={<Demo></Demo>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route> */}
    </HelmetProvider>
  </>
  );
}

export default App;
