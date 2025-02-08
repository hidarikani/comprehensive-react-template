import { expect, test } from 'vitest'
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/vitest'
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

test("renders counter", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(getByText(/Counter Controlled By Redux/i)).toBeInTheDocument();
});
