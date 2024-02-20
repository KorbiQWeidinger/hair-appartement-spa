export const BREAKPOINT_SIZES_EM = {
    base: 0,
    sm: 30,
    md: 48,
    lg: 62,
    xl: 80,
    '2xl': 96,
  }

  export type Breakpoint = keyof typeof BREAKPOINT_SIZES_EM

  export const smallerEqual = (a: Breakpoint, b: Breakpoint) => {
    return BREAKPOINT_SIZES_EM[a] >= BREAKPOINT_SIZES_EM[b]
  }