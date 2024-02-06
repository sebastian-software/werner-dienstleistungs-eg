import { style } from "@vanilla-extract/css"

export const rootClass = style({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem"
})

export const headerClass = style({
  background: "#eee",
  padding: "1rem 2rem",
  boxShadow: `0px 2.3px 3.6px rgba(0, 0, 0, 0.038),
  0px 6.3px 10px rgba(0, 0, 0, 0.055),
  0px 15.1px 24.1px rgba(0, 0, 0, 0.072),
  0px 50px 80px rgba(0, 0, 0, 0.11)`
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
  padding: "1rem 2rem"
})
