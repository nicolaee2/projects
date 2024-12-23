import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));

/**
Challenge: Project setup

- Go to Google fonts and get the "Inter" font with weights 400, 600, and 700.
  Put the `<links />` to those fonts ABOVE the style.css link in index.html.
  You may need to do some extra research to figure out how this 
  works if you haven't done it before.
*/

root.render(<App />);
