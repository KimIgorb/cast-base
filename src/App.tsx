import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./routes";
import React from "react";
import ScrollToTop from "./hooks/ScrollToTop";

const App: React.FC = () => {
  function AppRoutes() {
    const routing = useRoutes(routes);
    return routing;
  }

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <AppRoutes />
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
