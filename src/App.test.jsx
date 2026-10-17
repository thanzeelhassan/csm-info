import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { test, expect } from "vitest";
import App from "./App";

test("renders the navbar and the first hero slide", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole("link", { name: "Discussions" })).toBeInTheDocument();
  expect(screen.getByText("Angel")).toBeInTheDocument();
});
