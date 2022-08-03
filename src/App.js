import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./components/Theme";
import "bootstrap/dist/css/bootstrap.min.css";
import MainMenu from "./components/layout/Menu";
import Menu1 from "./components/layout/Menu1";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/scroll/Scroll";

//pages Import
import Store from "./pages/store/Store";
import ProductDescription from "./pages/product-description/ProductDescription";
import TermsOfServices from "./pages/terms/TermsOfServices";
import FAQs from "./pages/faq/FAQ";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import Home from "./pages/home/Home";
import Boys from "./pages/boys/Boys";
import Girls from "./pages/girls/Girls";
import Women from "./pages/women/Women";
import Men from "./pages/men/Men";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/SignUp";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Settings from "./pages/settings/Settings";
import Profile from "./pages/profile/Profile";
import Error from "./pages/error/Error";

import ProductState from "./context/productContext/ProductState";
import { ToastContainer } from "react-toastify";
import { StyledEngineProvider } from "@mui/material/styles";
import UserContext from "./context/usercontext/userContext";

const App = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const [localUser, setLocalUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("user");
    const tokenData = JSON.parse(token);
    setLocalUser(tokenData);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <StyledEngineProvider>
        <ProductState>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              {localUser || user ? <MainMenu /> : <Menu1 />}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/store" component={Store} />
                <Route path="/men" component={Men} />
                <Route path="/boys" component={Boys} />
                <Route path="/women" component={Women} />
                <Route path="/girls" component={Girls} />

                <Route
                  path="/productdescription"
                  component={ProductDescription}
                />
                <Route path="/contact" component={Contact} />
                <Route path="/cart" component={Cart} />
                <Route path="/termsofservices" component={TermsOfServices} />
                <Route path="/privacypolicy" component={PrivacyPolicy} />
                <Route path="/faq's" component={FAQs} />
                <Route path="/checkout" component={Checkout} />
                {localUser && user ? (
                  <Redirect to="/" />
                ) : (
                  <Route path="/login" component={Login} />
                )}
                <Route path="/signup" component={SignUp} />
                <Route path="/profile" component={Profile} />
                <Route path="/settings" component={Settings} />
                <Route component={Error} />
              </Switch>
              <ScrollToTop />
              <Footer />
            </BrowserRouter>
          </ThemeProvider>
        </ProductState>
        <ToastContainer />
      </StyledEngineProvider>
    </>
  );
};
export default App;
