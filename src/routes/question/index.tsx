import { FunctionalComponent, h } from "preact";

import * as style from "./style.css";

const Question: FunctionalComponent<any> = (props: any) => {
    return (
        <div>
            <h1>Question {props.match}</h1>
        </div>
    );
};

export default Question;
