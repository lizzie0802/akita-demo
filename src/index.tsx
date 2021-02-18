import { akitaDevtools } from "@datorama/akita";
import * as React from "react";
import { render } from "react-dom";
import { UserPage } from "./users/containers/userPage";

akitaDevtools();
render(<UserPage />, document.getElementById("root"));
