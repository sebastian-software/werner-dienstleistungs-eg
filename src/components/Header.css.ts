import { style } from "@vanilla-extract/css"

export const rootClass = style({
  fontSize: "1.5rem",

  selectors: {
    "h1&": {
      fontSize: "2rem"
    }
  }
})
