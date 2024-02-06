import { style } from "@vanilla-extract/css"

export const rootClass = style({
  fontSize: "1.25rem",

  selectors: {
    "h1&": {
      fontSize: "1.5rem"
    }
  }
})
