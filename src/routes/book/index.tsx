import { FunctionalComponent, h } from "preact";

import * as style from "./style.css";

const Book: FunctionalComponent<any> = (props: any) => {
    return (
        <div>
            <h1>Book {props.match}</h1>
        </div>
    );
};

export default Book;
