import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router";

import * as style from "./style.css";

const Serieses: FunctionalComponent = () => {
    return (
        <div>
            <h1>Serieses</h1>
            <Link href="/series/1">Series 1</Link>
        </div>
    );
};

export default Serieses;
