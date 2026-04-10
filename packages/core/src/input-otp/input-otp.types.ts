import type * as React from "react";
import type { OTPInput } from "input-otp";

export type InputOTPProps = React.ComponentPropsWithoutRef<typeof OTPInput>;

export type InputOTPGroupProps = React.ComponentPropsWithoutRef<"div">;

export interface InputOTPSlotProps extends React.ComponentPropsWithoutRef<"div"> {
  index: number;
}
