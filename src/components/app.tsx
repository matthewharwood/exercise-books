import { FunctionalComponent, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import Home from "../routes/home";
import Authors from "../routes/authors";
import Author from "../routes/author";
import NotFoundPage from "../routes/notfound";
import Header from "./header";
import Serieses from "../routes/serieses";
import Series from "../routes/series";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

const App: FunctionalComponent = () => {
    let currentUrl: string;
    const handleRoute = (e: RouterOnChangeArgs) => {
        currentUrl = e.url;
    };

    return (
        <div id="app">
            <Header />
            <Router onChange={handleRoute}>
                <Home path="/" />
                <Authors path="/authors" />
                <Author path="/authors/:id" />
                <Serieses path="/serieses" />
                <Series path="/serieses/:id" />
                <NotFoundPage default />
            </Router>
        </div>
    );
};

export default App;
