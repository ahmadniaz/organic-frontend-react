import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./components/Theme";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/layout/Menu";
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
import ProductState from "./context/productContext/ProductState";
import BlogState from "./context/blogsContext/BlogState";
import { ToastContainer } from "react-toastify";
import UserContext from "./context/usercontext/userContext";
import Error from "./pages/Error";

const App = () => {
  const userContext = useContext(UserContext);
  console.log(userContext, "context");
  const { user } = userContext;
  const [localUser, setLocalUser] = useState(user);
  console.log(user, "user in APP");

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("user")) || [];
    setLocalUser(localUsers);
    console.log(localUser, "in the app local user");
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <ProductState>
        <BlogState>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              {user ? <Menu /> : <Menu1 />}
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
                <Route
                  exact
                  path="/cart"
                  component={() => (user ? <Cart /> : <Redirect to="/" />)}
                />
                <Route
                  exact
                  path="/termsofservices"
                  component={TermsOfServices}
                />
                <Route exact path="/privacypolicy" component={PrivacyPolicy} />
                <Route exact path="/faq's" component={FAQs} />
                <Route
                  exact
                  path="/checkout"
                  component={() =>
                    user ? <Checkout /> : <Redirect to="/signup" />
                  }
                />
                <Route
                  exact
                  path="/login"
                  component={() => (user ? <Redirect to="/" /> : <Login />)}
                />
                <Route
                  exact
                  path="/signup"
                  component={() => (user ? <Redirect to="/" /> : <SignUp />)}
                />
                <Route component={Error} />
              </Switch>
              <ScrollToTop />
              <Footer />
            </BrowserRouter>
          </ThemeProvider>
        </BlogState>
      </ProductState>
      <ToastContainer />
    </>
  );
};
export default App;
