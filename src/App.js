import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import Signup from "./pages/SignUp/Signup";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return <BrowserRouter>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/sign-up" component={Signup} />
        </Switch>
        <Footer />
    </BrowserRouter>;
}

export default App;
