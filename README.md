# Headless Government of Canada Wordmark

This library provides a web optimized and React friendly version of the Canada Wordmark that won't fight with your existing styling or i18n solutions.
Consult the [official branding guidelines](https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/design-standard/colour-design-standard-fip.html) to know what's allowed when using these components in government applications.

## Features

- 🎨 **Official Design**: Accurate representation of the Government of Canada wordmark
- ♿ **Accessible**: Built with accessibility in mind, supporting ARIA labels and screen readers
- 🎯 **Customizable**: Accepts all standard SVG props for styling and behavior
- 📦 **Lightweight**: Minimal bundle size with no external dependencies
- 🔧 **TypeScript**: Full TypeScript support with comprehensive type definitions
- 🧪 **Tested**: Comprehensive test suite ensuring reliability

## Installation

```bash
# Using JSR
deno add jsr:@sleepycat/headless-goc-wordmark

# Using npm (if available)
npm install @sleepycat/headless-goc-wordmark
```

## Quick Start

```tsx
import { Flag, SVG, Text } from "jsr:@sleepycat/headless-goc-wordmark"

function MyComponent() {
  return (
    <SVG
      aria-label="Government of Canada"
      role="img"
      width="200px"
      height="50px"
    >
      // Using the Federal Identity Program red:
      <Flag style={{ fill: "rgb(235,45,55)" }} />
      // Using the standard black:
      <Text style={{ fill: "rgb(0,0,0)" }} />
    </SVG>
  )
}
```

## API Reference

### `SVG`

The main container component that provides the SVG wrapper with proper viewBox and namespace settings.

#### Props

- `children?: React.ReactNode` - Child components (Flag and Text)
- All standard SVG element props (width, height, className, etc.)

#### Example

```tsx
<SVG
  aria-label="Government of Canada"
  role="img"
  width="200px"
  height="50px"
  className="my-wordmark"
>
  <Flag />
  <Text />
</SVG>
```

### `Flag`

Renders the Canadian flag (maple leaf) element of the wordmark.

#### Props

- All standard SVG path element props

#### Example

```tsx
<SVG>
  <Flag className="custom-flag" data-testid="flag" />
  <Text />
</SVG>
```

### `Text`

Renders the "Government of Canada" text element of the wordmark.

#### Props

- All standard SVG path element props

#### Example

```tsx
<SVG>
  <Flag />
  <Text className="custom-text" data-testid="text" />
</SVG>
```

## Usage Examples

### Basic Usage

```tsx
import { Flag, SVG, Text } from "jsr:@sleepycat/headless-goc-wordmark"

function Header() {
  return (
    <header>
      <SVG aria-label="Government of Canada" role="img" width="150px">
        <Flag />
        <Text />
      </SVG>
    </header>
  )
}
```

### With Custom Styling

```tsx
import { Flag, SVG, Text } from "jsr:@sleepycat/headless-goc-wordmark"

function StyledWordmark() {
  return (
    <SVG
      aria-label="Government of Canada"
      role="img"
      width="300px"
      className="wordmark-container"
    >
      <Flag className="flag-element" />
      <Text className="text-element" />
    </SVG>
  )
}
```

### With Title for Accessibility

```tsx
import { Flag, SVG, Text } from "jsr:@sleepycat/headless-goc-wordmark"

function AccessibleWordmark() {
  return (
    <SVG aria-label="Government of Canada" role="img">
      <title>Government of Canada Official Wordmark</title>
      <Flag />
      <Text />
    </SVG>
  )
}
```

### Responsive Design

```tsx
import { Flag, SVG, Text } from "jsr:@sleepycat/headless-goc-wordmark"

function ResponsiveWordmark() {
  return (
    <SVG
      aria-label="Government of Canada"
      role="img"
      width="100%"
      maxWidth="400px"
      style={{ height: "auto" }}
    >
      <Flag />
      <Text />
    </SVG>
  )
}
```

## CSS Styling

The point of a "headless" component is that it has no opinions about styling.
Whatever you're into is fine.

## Accessibility

The components are designed not to get in your way. If you have opinions about aria attributes, pass in whatever you want.

- Support for `aria-label` and `role` attributes
- Proper semantic structure
- Support for `<title>` elements within the SVG
- Screen reader friendly

### Best Practices

1. **Always provide an aria-label**: `aria-label="Government of Canada"` (you can translate those since it's just text)
2. **Use semantic role**: `role="img"`
3. **Add title for complex cases**: Include a `<title>` element for additional context
4. **Ensure sufficient contrast**: The default colors meet WCAG contrast requirements


