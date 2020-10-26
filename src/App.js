import React from 'react';
import Search from "./pages/search";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Wrapper from './components/wrapper';
import "./App.css";

function App() {
  document.title = "Employee Directory";
  return (
    <div>
      <Nav />
      <Wrapper>
        <Search />
      </Wrapper>
      <Footer />
    </div>
  );
}
export default App;

