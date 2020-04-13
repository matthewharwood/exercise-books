import { FunctionalComponent, h } from "preact";

import * as style from "./style.css";

const Series: FunctionalComponent = (props: any) => {
    return (
        <div>
            <h1>Series {props.match}</h1>
        </div>
    );
};

export default Series;
