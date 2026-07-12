import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CoralButton } from "./CoralButton";

describe("CoralButton", () => {
  it("renders its children", () => {
    render(<CoralButton>Click me</CoralButton>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeTruthy();
  });

  it("applies variant and size class names", () => {
    render(
      <CoralButton variant="danger" size="lg">
        Delete
      </CoralButton>,
    );
    const button = screen.getByRole("button", { name: "Delete" });
    expect(button.className).toContain("coral-button--danger");
    expect(button.className).toContain("coral-button--lg");
  });
});
