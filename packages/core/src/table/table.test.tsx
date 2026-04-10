import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table";

describe("Table", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Head</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(getByText("Head")).toBeTruthy();
    expect(getByText("Data")).toBeTruthy();
  });
});
