import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { expect, test } from "vitest";
import Banner from "./Banner";

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

test("renders main heading in the banner", () => {
  renderWithRouter(<Banner />);
  const heading = screen.getByText(/Satisfy Your Cravings with Tasty/i);
  expect(heading).toBeInTheDocument();
});

test("renders all images in the banner", () => {
  renderWithRouter(<Banner />);
  const images = screen.getAllByRole("img");
  expect(images).toHaveLength(4);
  expect(images[0].src).toContain("oe8rg51699014028.jpg");
  expect(images[1].src).toContain("BlackberryCrumble.jpg");
  expect(images[2].src).toContain("Arrow.png");
  expect(images[3].src).toContain("banner-img.png");
});

test("renders links with correct paths", () => {
  renderWithRouter(<Banner />);
  const strawberryLink = screen.getByText("Strawberries Romanoff").closest("a");
  expect(strawberryLink).toHaveAttribute("href", "/recipe/53082");

  const crumbleLink = screen
    .getByText("Apple & Blackberry Crumble")
    .closest("a");
  expect(crumbleLink).toHaveAttribute("href", "/recipe/52893");

  const findMoreLink = screen
    .getByText("Find Our More Recipies...")
    .closest("a");
  expect(findMoreLink).toHaveAttribute("href", "/allrecipes");
});
