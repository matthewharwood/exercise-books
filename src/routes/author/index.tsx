import { FunctionalComponent, h } from "preact";

import * as style from "./style.css";

const Author: FunctionalComponent = (props: any) => {
    return (
        <div>
            <h1>Author {props.match}</h1>
        </div>
    );
};

export default Author;
