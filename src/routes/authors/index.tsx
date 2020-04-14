import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router";

import Author from "../author";
import * as style from "./style.css";

const Authors: FunctionalComponent<any> = () => {
    return (
        <div>
            <h1>Authors</h1>
            <Link href="/authors/1">Author 1</Link>
        </div>
    );
};

export default Authors;
