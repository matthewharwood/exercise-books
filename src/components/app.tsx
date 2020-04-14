import { FunctionalComponent, h } from "preact";
import { Router, RouterOnChangeArgs } from "preact-router";

import Home from "../routes/home";
import Authors from "../routes/authors";
import Author from "../routes/author";
import Serieses from "../routes/serieses";
import Series from "../routes/series";
import Books from "../routes/books";
import Book from "../routes/book";
import Questions from "../routes/questions";
import Question from "../routes/question";
import Header from "./header";
import NotFoundPage from "../routes/notfound";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

const App: FunctionalComponent<any> = () => {
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
                <Serieses path="/authors/:authorId/serieses" />
                <Series path="/authors/:authorId/serieses/:id" />
                <Books path="/authors/:authorId/serieses/:id/books" />
                <Book path="/authors/:authorId/serieses/:id/books/:id" />
                <Questions path="/authors/:authorId/serieses/:id/books/:id/questions" />
                <Question path="/authors/:authorId/serieses/:id/books/:id/questions/:id" />
                <NotFoundPage default />
            </Router>
        </div>
    );
};

export default App;
