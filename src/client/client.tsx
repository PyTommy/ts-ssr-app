import * as React from 'react';
import * as ReactDOM from "react-dom";

import Home from "./components/Home";

const App = () => {
    return (
        <React.Fragment>
            <Home />
        </React.Fragment>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById("example")
);