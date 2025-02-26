import { fireEvent, render, screen } from "@testing-library/react";
import Error from "../components/error";

it("prop olarak alınan hata mesajı ekrana basılır", () => {
  render(<Error info="İnternetiniz çok yavaş" refetch={() => {}} />);

  screen.getByText(/yavaş/i);
});

it("prop olarak alınan fonksiyon butona tıklanınca çalışır", () => {
  const mockFn = jest.fn();

  render(<Error info="İnternetiniz çok yavaş" refetch={mockFn} />);

  const button = screen.getByRole("button");

  fireEvent.click(button);

  expect(mockFn).toHaveBeenCalled();
});
