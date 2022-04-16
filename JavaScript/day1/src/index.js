import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import './index.css';

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page></Page>, document.getElementById('root'));