import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";

// Mock Embla Carousel
vi.mock("embla-carousel-react", () => ({
  default: () => [vi.fn(), {
    scrollNext: vi.fn(),
    scrollPrev: vi.fn(),
    canScrollNext: vi.fn(() => true),
    canScrollPrev: vi.fn(() => true),
    on: vi.fn(),
    off: vi.fn(),
    emit: vi.fn(),
  }],
  useEmblaCarousel: () => [vi.fn(), {
    scrollNext: vi.fn(),
    scrollPrev: vi.fn(),
    canScrollNext: vi.fn(() => true),
    canScrollPrev: vi.fn(() => true),
    on: vi.fn(),
    off: vi.fn(),
    emit: vi.fn(),
  }],
}));

describe("Carousel", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
      </Carousel>
    );
    expect(getByText("Slide 1")).toBeTruthy();
    expect(getByText("Slide 2")).toBeTruthy();
  });
});
