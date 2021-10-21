import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./components/Theme";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/layout/Menu";
import Store from "./pages/Store";
import ProductDescription from "./pages/ProductDescription";
import TermsOfServices from "./pages/TermsOfServices";
import FAQs from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/scroll/Scroll";
import SingleBlog from "./pages/SingleBlog";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductState from "./context/productContext/ProductState";
import BlogState from "./context/blogsContext/BlogState";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ProductState>
        <BlogState>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Menu />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/store" component={Store} />
                <Route
                  exact
                  path="/productdescription"
                  component={ProductDescription}
                />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/post" component={SingleBlog} />
                <Route exact path="/cart" component={Cart} />
                <Route
                  exact
                  path="/termsofservices"
                  component={TermsOfServices}
                />
                <Route exact path="/privacypolicy" component={PrivacyPolicy} />
                <Route exact path="/faq's" component={FAQs} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
              </Switch>
              <ScrollToTop />
              <Footer />
            </BrowserRouter>
          </ThemeProvider>
        </BlogState>
      </ProductState>
      <ToastContainer/>
    </>
  );
};
export default App;
