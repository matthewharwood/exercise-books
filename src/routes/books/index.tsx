import { FunctionalComponent, h } from "preact";

import * as style from "./style.css";
import { Link } from "preact-router";

const Books: FunctionalComponent<any> = (props: any) => {
    return (
        <div>
            <h1>Books</h1>
            <Link href="/books/1">Book 1</Link>
        </div>
    );
};

export default Books;
