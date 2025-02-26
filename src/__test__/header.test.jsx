import { render, screen } from "@testing-library/react";
import Header from "../pages/detail/header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { mockData } from "../utils/constants";

const mockStore = configureStore([thunk]);

it("store yüklenme durumundayken ekrana loader basılır", () => {
  const store = mockStore({ isLoading: true, error: null, data: null });
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  screen.getByTestId("header-loader");
});

it("store yüklenme bittiğinde ekranda loader yoktur", () => {
  const store = mockStore({ isLoading: false, error: null, data: null });
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const loader = screen.queryByTestId("header-loader");
  expect(loader).toBeNull();
});

it("store'a veri geldiğinde ekrana ülke ve bayrak basılır", () => {
  const store = mockStore({ isLoading: false, error: null, data: mockData });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  screen.getByRole("heading", { name: mockData.country });

  const img = screen.getByAltText(mockData.flag.alt);

  expect(img).toHaveAttribute("src", mockData.flag.png);
});
