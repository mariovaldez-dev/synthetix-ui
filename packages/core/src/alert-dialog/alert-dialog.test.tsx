import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogAction,
} from "./alert-dialog";

describe("AlertDialog", () => {
  it("renders trigger correctly", () => {
    const { getByText } = render(
      <AlertDialog>
        <AlertDialogTrigger>Abrir</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogAction>Confirmar</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    );
    expect(getByText("Abrir")).toBeTruthy();
  });
});
