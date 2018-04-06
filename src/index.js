import React from "react";
import ReactDOM from "react-dom";

import App from "./app";
import { fetchToken } from "./api";

import "./styles/index.css";

fetchToken();

ReactDOM.render(<App />, document.getElementById('root'));
