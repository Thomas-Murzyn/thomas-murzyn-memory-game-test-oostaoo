import store from "./app/store";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
