import { App } from "./../src/App";
import { render, screen } from "@testing-library/react";

describe("Pruebas a <App />", () => {
  test("Deberia hacer snapshot con el componente", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  test("Should haber una etiqueta h1", () => {
    render(<App />);
    expect(screen.getAllByText("Practica para pruebas")).toBeTruthy();
  });
});
