import "./setup_tests.ts"
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  it,
} from "@std/testing/bdd"
import { expect } from "@std/expect"
import { cleanup, render, screen } from "@testing-library/react"
import { Flag, SVG, Text } from "./mod.ts"

// Store any timers that might be created during tests
let testTimers: number[] = []

beforeAll(() => {
  // Clear any existing timers before tests start
  if (typeof globalThis.clearTimeout === "function") {
    // This helps prevent leaks from previous test runs
    const maxId = setTimeout(() => {}, 0)
    for (let i = 0; i < maxId; i++) {
      clearTimeout(i)
    }
  }
})

afterAll(() => {
  // Clean up any remaining timers
  testTimers.forEach((id) => {
    if (typeof globalThis.clearTimeout === "function") {
      clearTimeout(id)
    }
    if (typeof globalThis.clearInterval === "function") {
      clearInterval(id)
    }
  })
  testTimers = []
})

beforeEach(() => {
  // Reset timer tracking for each test
  testTimers = []
})

afterEach(() => {
  // Clean up React Testing Library
  cleanup()

  // Clear any timers that might have been created during this test
  if (typeof globalThis.clearTimeout === "function") {
    const maxId = setTimeout(() => {}, 0)
    for (let i = 0; i < maxId; i++) {
      clearTimeout(i)
    }
  }
})

describe("<SVG />", () => {
  it("renders an SVG element", async () => {
    render(
      <SVG
        aria-label="Symbol of the Government of Canada"
        role="img"
        width="10em"
      >
        <Flag />
        <Text />
      </SVG>,
    )
    const image = await screen.findByRole("img")
    expect(image.tagName).toEqual("svg")
  })

  it("has preserve aspect ratio set", () => {
    render(
      <SVG aria-label="wordmark" role="img" width="10em">
        <Flag />
        <Text />
      </SVG>,
    )
    const image = screen.getByLabelText("wordmark")
    expect(image.getAttribute("preserveAspectRatio")).toEqual("xMinYMin meet")
  })

  it("passes through whatever props you supply", () => {
    render(
      <SVG aria-label="arbitraryprops" role="img" data-foo="bar">
        <Flag />
        <Text />
      </SVG>,
    )
    const image = screen.getByLabelText("arbitraryprops")
    expect(image.getAttribute("data-foo")).toEqual("bar")
  })

  it("passing a <title> for accessibility works", () => {
    render(
      <SVG role="img" data-foo="this one!">
        <title>some title</title>
        <Flag />
        <Text />
      </SVG>,
    )

    const titleElement = screen.getByTitle("some title")
    expect(titleElement.parentElement?.getAttribute("data-foo")).toEqual(
      "this one!",
    )
  })
})

describe("<Flag />", () => {
  it("passes through whatever props you supply", () => {
    const { container } = render(
      <SVG role="img">
        <Flag data-foo="bar" />
        <Text />
      </SVG>,
    )
    const flag = container.querySelector('[data-foo="bar"]')
    expect(flag?.tagName).toEqual("path")
  })
})
describe("<Text/>", () => {
  it("passes through whatever props you supply", () => {
    const { container } = render(
      <SVG
        aria-label="Symbol of the Government of Canada"
        role="img"
      >
        <Flag />
        <Text data-foo="bar" />
      </SVG>,
    )
    const textElement = container.querySelector('[data-foo="bar"]')
    expect(textElement!.tagName).toEqual("path")
  })
})
