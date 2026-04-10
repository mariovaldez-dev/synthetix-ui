"use client";

import * as React from "react";
import { format } from "date-fns";

import { cn } from "@synthetix-ui/utils";
import { Button } from "../button";
import { Calendar } from "../calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import type { DatePickerProps } from "./date-picker.types";

export function DatePicker({ 
  className, 
  placeholder = "Pick a date",
  selected,
  onSelect,
  ...props 
}: DatePickerProps) {
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(selected);

  const date = selected !== undefined ? selected : internalDate;
  const handleSelect = (newDate: Date | undefined) => {
    setInternalDate(newDate);
    onSelect?.(newDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
            className
          )}
          {...props}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
          </svg>
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
