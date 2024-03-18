import { style } from "@vanilla-extract/css"

export const rootClass = style({
  fontSize: "1.25rem",
  fontWeight: "bold",

  selectors: {
    "h1&": {
      fontWeight: "normal",
      fontSize: "2.5rem"
    }
  }
})
