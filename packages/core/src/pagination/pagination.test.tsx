import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "./pagination";

describe("Pagination", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
    expect(getByText("1")).toBeTruthy();
  });
});
