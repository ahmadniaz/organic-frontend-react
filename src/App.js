import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./components/Theme";
import "bootstrap/dist/css/bootstrap.min.css";
import MainMenu from "./components/layout/Menu";
import Menu1 from "./components/layout/Menu1";
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
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import ProductState from "./context/productContext/ProductState";
import BlogState from "./context/blogsContext/BlogState";
import { ToastContainer } from "react-toastify";
import Error from "./pages/Error";
import { StyledEngineProvider } from "@mui/material/styles";
import UserContext from "./context/usercontext/userContext";

const App = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  console.log(user, " In App user , User");
  const [localUser, setLocalUser] = useState("");
  const [localBlog, setLocalBlog] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("user");
    const tokenData = JSON.parse(token);
    setLocalUser(tokenData);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const getBlog = localStorage.getItem("curBlog");
    const blogData = JSON.parse(getBlog);
    setLocalBlog(blogData);
  }, []);

  return (
    <>
      <StyledEngineProvider>
        <ProductState>
          <BlogState>
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                {localUser || user ? <MainMenu /> : <Menu1 />}
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/store" component={Store} />
                  <Route
                    path="/productdescription"
                    component={ProductDescription}
                  />
                  <Route path="/contact" component={Contact} />
                  <Route path="/blog" component={Blog} />
                  <Route path="/post" component={SingleBlog} />
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
          </BlogState>
        </ProductState>
        <ToastContainer />
      </StyledEngineProvider>
    </>
  );
};
export default App;
