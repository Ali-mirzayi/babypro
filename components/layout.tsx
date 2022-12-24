import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

type props = {
  children:JSX.Element[],
}

const Layout = ({ children }:props) => {

  return (
    <>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
