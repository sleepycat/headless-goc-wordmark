/**
 * A Headless Government of Canada Wordmark Component
 *
 * A React component for rendering the official Government of Canada wordmark.
 * This component is designed to play nice with i18n libraries and expose
 * everything so that aria attributes and your choice of styling can be applied.
 *
 * @example
 * ```tsx
 * import { SVG, Flag, Text } from "jsr:@sleepycat/headless-goc-wordmark";
 *
 * function MyComponent() {
 *   return (
 *     <SVG aria-label="Government of Canada" role="img" width="200px">
 *       <Flag />
 *       <Text />
 *     </SVG>
 *   );
 * }
 * ```
 *
 * @module
 */

export { default as Wordmark } from "./main.tsx"
export { default } from "./main.tsx"

// Re-export individual components for convenience
import Wordmark from "./main.tsx"
export const SVG = Wordmark.SVG
export const Flag = Wordmark.Flag
export const Text = Wordmark.Text
