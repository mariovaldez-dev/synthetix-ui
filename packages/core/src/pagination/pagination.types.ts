import type * as React from "react";
import type { ButtonProps } from "../button/button.types";

export type PaginationProps = React.ComponentProps<"nav">;
export type PaginationContentProps = React.ComponentProps<"div">;
export type PaginationItemProps = React.ComponentProps<"div">;

export type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

export type PaginationPreviousProps = React.ComponentProps<"a">;
export type PaginationNextProps = React.ComponentProps<"a">;
export type PaginationEllipsisProps = React.ComponentProps<"span">;
