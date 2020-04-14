import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router";

import * as style from "./style.css";

const Questions: FunctionalComponent<any> = (props: any) => {
    return (
        <div>
            <h1>Questions</h1>
            <Link href="/questions/1">Question 1</Link>
        </div>
    );
};

export default Questions;
