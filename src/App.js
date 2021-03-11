import './App.css';

import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";

import urlImage from "./assets/img/layout/bg2.jpg";

const App = () => {
  return (
    <>
      <Header title="This is title" descr="This is Description!"/>
      <Layout title="This is title" descr="This is Description!" urlBg={ urlImage } />
      <Layout title="This is title" descr="This is Description!" colorBg="red"/>
      <Layout title="This is title" descr="This is Description!" urlBg={ urlImage }  />
      <Footer />
    </>
  );
};

export default App;
