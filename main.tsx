import React from "react"

/**
 * Flag component representing the Canadian flag in the Government of Canada wordmark.
 *
 * This component renders the maple leaf flag element with customizable SVG properties.
 * It accepts all standard SVG path element props and passes them through to the underlying path element.
 *
 * @param props - SVG path element properties
 * @returns A React component representing the Canadian flag
 *
 * @example
 * ```tsx
 * <SVG>
 *   <Flag className="custom-flag" data-testid="flag" />
 *   <Text />
 * </SVG>
 * ```
 */
function Flag(props: React.SVGProps<SVGPathElement>): React.ReactElement {
  return (
    <path
      {...props}
      d="m 137.9,1.2 h 5.2 v 10.4 h -5.2 z m -9,5.2 -0.3,0.1 c 0,0 1.8,1.5 1.8,1.6 0.1,0.1 0.2,0.1 0.1,0.4 -0.1,0.3 -0.2,0.6 -0.2,0.6 0,0 1.6,-0.3 1.8,-0.4 0.2,0 0.3,0 0.3,0.2 0,0.2 -0.1,1.9 -0.1,1.9 h 0.5 c 0,0 -0.1,-1.8 -0.1,-1.9 0,-0.2 0.1,-0.2 0.3,-0.2 0.2,0 1.8,0.4 1.8,0.4 0,0 -0.1,-0.4 -0.2,-0.6 -0.1,-0.3 0,-0.3 0.1,-0.4 0.1,-0.1 1.8,-1.6 1.8,-1.6 L 136.2,6.4 C 136,6.3 136.1,6.2 136.1,6.1 136.1,6 136.4,5 136.4,5 c 0,0 -0.8,0.2 -0.9,0.2 -0.1,0 -0.2,0 -0.2,-0.1 0,-0.1 -0.2,-0.5 -0.2,-0.5 0,0 -0.9,1 -1,1.1 -0.2,0.2 -0.4,0 -0.3,-0.2 0,-0.2 0.5,-2.3 0.5,-2.3 0,0 -0.5,0.3 -0.7,0.4 -0.2,0.1 -0.3,0.1 -0.3,-0.1 -0.1,-0.2 -0.7,-1.3 -0.7,-1.4 0,0 -0.6,1.2 -0.7,1.4 -0.1,0.2 -0.2,0.2 -0.3,0.1 -0.2,-0.1 -0.7,-0.4 -0.7,-0.4 0,0 0.5,2.1 0.5,2.3 0,0.2 -0.1,0.3 -0.3,0.2 l -1,-1.1 c 0,0 -0.1,0.3 -0.2,0.4 0,0.1 -0.1,0.2 -0.2,0.1 -0.2,0 -1,-0.2 -1,-0.2 0,0 0.3,1 0.4,1.1 0,0.1 0,0.3 -0.2,0.4 z m -6.7,-5.2 h 5.2 v 10.4 h -5.2 z"
    />
  )
}

/**
 * Text component representing the "Government of Canada" text in the wordmark.
 *
 * This component renders the official text element with customizable SVG properties.
 * It accepts all standard SVG path element props and passes them through to the underlying path element.
 *
 * @param props - SVG path element properties
 * @returns A React component representing the "Government of Canada" text
 *
 * @example
 * ```tsx
 * <SVG>
 *   <Flag />
 *   <Text className="custom-text" data-testid="text" />
 * </SVG>
 * ```
 */
function Text(props: React.SVGProps<SVGPathElement>): React.ReactElement {
  return (
    <path
      {...props}
      d="m 144.2,32.4 c -0.4,0.9 -1.2,1.2 -1.7,1.2 -0.6,0 -2.4,-0.1 -2.4,-4.8 0,0 0,-9.5 0,-10.1 0,-3.1 -2.4,-5.6 -8.6,-5.6 -6.7,0 -6.8,3.3 -6.8,4.1 -0.1,0.9 0.4,1.9 2.1,1.9 1.5,0 1.9,-1.7 2.1,-2.3 0.2,-0.7 0.3,-2.7 3,-2.7 2.3,0 3.7,2 3.8,4.9 0,0.5 0,0.8 0,1.1 0,0.2 0,0.3 0,0.5 v 0 0 0.1 c -0.2,1 -0.7,1.5 -1.6,1.9 -1.2,0.6 -4.7,1.1 -5.1,1.2 -1.4,0.3 -5.3,1.3 -5.2,5.4 0.1,4 4.1,5.4 6.9,5.3 2.7,-0.1 4.3,-1.2 5,-1.8 0.4,-0.3 0.4,-0.3 0.7,0.1 0.4,0.4 1.7,1.7 4.8,1.7 3.2,0 3.6,-1.5 3.8,-2 0.1,-0.3 -0.6,-0.6 -0.8,-0.1 z m -12.5,1.1 c -2.8,0 -3.5,-2.3 -3.5,-3.5 0,-1.1 0.6,-3.4 3.4,-5 0,0 1.3,-0.8 3.8,-1.8 0.1,0 0.2,0 0.2,0 0,0 0.1,0.1 0.1,0.2 v 0 0 0.1 0 0 0.1 0 0 0 4.2 c 0,3.3 -1.6,5.7 -4,5.7 z m -9.2,-0.1 c -0.4,-0.1 -2.9,0.2 -2.9,-7.4 0,-7.6 0,-23.9 0,-23.9 0,-0.3 0,-1.1 -0.9,-1.1 -0.9,0 -6.9,0.3 -7.3,0.4 -0.4,0 -0.7,0.5 0,0.5 0.7,0.1 3.9,0.3 3.9,5.6 0,2.6 0,5.2 0,7.1 0,0.1 0,0.2 0,0.2 0,0.2 0,0.3 -0.1,0.4 0,0 0,0 0,0.1 v 0 c -0.1,0.1 -0.2,0 -0.5,-0.2 -0.5,-0.4 -2.8,-1.8 -5.7,-1.8 -4.7,0 -10.5,3.4 -10.5,10.4 0,7.5 5.3,11.1 10.8,11.1 2.7,0 4.6,-1.2 5.3,-1.6 0.8,-0.5 0.7,-0.4 0.8,0.3 0.1,0.5 0,1.5 1.4,1.4 1.5,-0.2 5.1,-0.6 5.8,-0.7 0.7,-0.3 0.5,-0.7 -0.1,-0.8 z m -12.4,0.3 c -4.4,0 -6.7,-5.2 -6.7,-10.2 0,-5.5 3.1,-9.2 6.4,-9 4.3,0.3 5.4,3.7 5.5,9.8 0,0.4 0,0.8 0,1.3 -0.1,6 -2.6,8.1 -5.2,8.1 z M 98.4,32.4 c -0.4,0.9 -1.2,1.2 -1.7,1.2 -0.6,0 -2.4,-0.1 -2.4,-4.8 0,0 0,-9.5 0,-10.1 0,-3.1 -2.4,-5.6 -8.6,-5.6 -6.7,0 -6.8,3.3 -6.8,4.1 -0.1,0.9 0.4,1.9 2.1,1.9 1.5,0 1.9,-1.7 2.1,-2.3 0.2,-0.7 0.3,-2.7 3,-2.7 2.3,0 3.8,2 3.8,5 v 0.1 c 0,0.1 0,0.2 0,0.2 v 0.3 c 0,0.1 0,0.3 0,0.4 -0.1,1.5 -0.5,2 -1.7,2.6 -1.2,0.6 -4.7,1.1 -5.1,1.2 -1.4,0.3 -5.3,1.3 -5.2,5.4 0.1,4 4.1,5.4 6.9,5.3 2.7,-0.1 4.3,-1.2 5,-1.8 0.4,-0.3 0.4,-0.3 0.7,0.1 0.4,0.4 1.7,1.7 4.8,1.7 3.2,0 3.6,-1.5 3.8,-2 0.2,-0.4 -0.4,-0.7 -0.7,-0.2 z M 86,33.5 c -2.8,0 -3.5,-2.3 -3.5,-3.5 0,-1.1 0.6,-3.4 3.4,-5 0,0 1.3,-0.8 3.8,-1.8 0.1,0 0.2,0 0.2,0 v 0.1 0 0 c 0,0.1 0,0.2 0,0.4 v -0.1 c 0,0 0,0 0,0.1 v 4.2 c 0,3.2 -1.6,5.6 -3.9,5.6 z m -9.6,-0.1 c -0.8,-0.2 -2.2,-1.1 -2.2,-5.5 v -8 c 0,-1.9 0.2,-6.8 -7.3,-6.8 -3.9,0 -6.1,2 -6.3,2.1 -0.3,0.3 -0.5,0.4 -0.6,-0.1 -0.1,-0.4 -0.3,-1 -0.4,-1.4 -0.1,-0.3 -0.3,-0.6 -1,-0.5 -0.7,0.1 -5.1,0.8 -5.9,1 -0.7,0.2 -0.5,0.5 0,0.6 0.5,0.1 2.9,0.3 2.9,4.4 0,4.1 0,8.6 0,8.6 0,5 -1,5.4 -1.9,5.7 -1.2,0.3 -0.6,0.7 -0.1,0.7 0,0 8.9,0 9.1,0 0.6,0 0.9,-0.6 -0.3,-0.8 -1.2,-0.2 -2.3,-0.9 -2.3,-4.8 0,-0.4 0,-4.7 0,-5.5 0,-2.1 -0.5,-8.5 5.3,-8.6 4.1,-0.1 4.5,3.3 4.5,5.5 v 8.5 c 0,3.5 -1,4.6 -2.2,4.8 -1.1,0.2 -0.9,0.7 -0.3,0.7 0.2,0 9.3,0 9.3,0 0.5,0.2 1,-0.3 -0.3,-0.6 z m -24.3,-1 c -0.4,0.9 -1.2,1.2 -1.7,1.2 -0.6,0 -2.4,-0.1 -2.4,-4.8 0,0 0,-9.5 0,-10.1 0,-3.1 -2.4,-5.6 -8.6,-5.6 -6.7,0 -6.8,3.3 -6.8,4.1 -0.1,0.9 0.4,1.9 2.1,1.9 1.5,0 1.9,-1.7 2.1,-2.3 0.2,-0.7 0.3,-2.7 3,-2.7 2.3,0 3.7,2 3.8,4.9 0,0.5 0,0.8 0,1.1 0,0.2 0,0.4 -0.1,0.5 v 0.1 0 c -0.2,1 -0.7,1.5 -1.6,1.9 -1.2,0.6 -4.7,1.1 -5.1,1.2 -1.4,0.3 -5.3,1.3 -5.2,5.4 0.1,4 4.1,5.4 6.9,5.3 2.7,-0.1 4.3,-1.2 5,-1.8 0.4,-0.3 0.4,-0.3 0.7,0.1 0.4,0.4 1.7,1.7 4.8,1.7 3.2,0 3.6,-1.5 3.8,-2 0.2,-0.3 -0.5,-0.6 -0.7,-0.1 z m -12.5,1.1 c -2.8,0 -3.5,-2.3 -3.5,-3.5 0,-1.2 0.6,-3.4 3.4,-5 0,0 1.3,-0.8 3.8,-1.8 0.1,0 0.2,0 0.2,0 0,0 0.1,0.1 0.1,0.2 v 0 0 0 c 0,0 0,0.1 0,0.2 v 0 0 0.1 0 0 0 4.2 c 0,3.2 -1.6,5.6 -4,5.6 z M 30,24.8 C 29,28 27.1,33.2 20.2,33.4 13,33.5 8.7,28.6 8.5,19.5 8.2,9.8 12.4,2.4 18.9,2.2 c 7.3,-0.1 9.9,8.6 10,9.9 0.1,1 1.4,0.9 1.4,-0.1 0,-0.5 -0.6,-9.1 -0.8,-10.1 -0.2,-1 -1,-0.6 -1.2,-0.2 C 28.2,2 28.4,1.4 28,2.3 27.6,3.2 26.5,2.7 26.1,2.6 24.9,2.1 22.6,0.9 18.9,1 10.4,1.2 1.7,7.5 1.9,18.5 2.1,29.2 10.7,35.2 18.7,35.1 26,35 30.1,30.4 31.3,25.1 31.7,23.8 30.4,23.5 30,24.8 Z"
    />
  )
}

/**
 * SVG container component for the Government of Canada wordmark.
 *
 * This component provides the main SVG container with proper viewBox, namespace,
 * and preserveAspectRatio settings. It accepts all standard SVG element props
 * and allows children to be passed for the Flag and Text components.
 *
 * @param props - SVG element properties and optional children
 * @returns A React component representing the SVG container
 *
 * @example
 * ```tsx
 * <SVG
 *   aria-label="Government of Canada"
 *   role="img"
 *   width="200px"
 *   height="50px"
 * >
 *   <Flag />
 *   <Text />
 * </SVG>
 * ```
 */
const SVG = ({
  children,
  ...rest
}: React.SVGProps<SVGSVGElement> & {
  children?: React.ReactNode
}): React.ReactElement => {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: we're exposing this so people can add aria-labels or pass <title> to it.
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 143 35"
      preserveAspectRatio="xMinYMin meet"
      {...rest}
    >
      {children}
    </svg>
  )
}

/**
 * Government of Canada Wordmark Components
 *
 * A collection of React components for rendering the official Government of Canada wordmark.
 * These components are designed to be accessible, customizable, and compliant with official branding guidelines.
 *
 * @example
 * ```tsx
 * import Wordmark from "jsr:@sleepycat/headless-goc-wordmark";
 *
 * function MyComponent() {
 *   return (
 *     <Wordmark.SVG aria-label="Government of Canada" role="img" width="200px">
 *       <Wordmark.Flag />
 *       <Wordmark.Text />
 *     </Wordmark.SVG>
 *   );
 * }
 * ```
 */
const Wordmark = {
  SVG,
  Flag,
  Text,
} as const

export default Wordmark
