import { render, screen } from "@testing-library/react";
import Item from "../pages/home/item";

test("Gönderilen proplar doğru şekilde kullanılır", () => {
  render(<Item color="text-blue-500" text="Toplam Test" value="399M" />);

  const icon = screen.getByTestId("icon");

  expect(icon).toHaveClass("text-blue-500");

  const h2 = screen.getByRole("heading");
  expect(h2).toHaveTextContent("399M");

  screen.getByText("Toplam Test");
});
