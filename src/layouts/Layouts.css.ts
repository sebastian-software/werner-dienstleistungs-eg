import { style } from "@vanilla-extract/css"

export const rootClass = style({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column"
})

export const headerClass = style({
  background: "#eee",
  padding: "1.5rem 2rem"
})

export const mainClass = style({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  gap: "1rem",
  padding: "1.5rem 2rem"
})

export const footerClass = style({
  background: "#122774",
  color: "#fff",
  padding: "1.5rem 2rem"
})
