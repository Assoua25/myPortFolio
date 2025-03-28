declare module 'aos' {
  interface AosOptions {
    offset?: number
    delay?: number
    duration?: number
    easing?: string
    once?: boolean
    mirror?: boolean
    anchorPlacement?: string
    disable?: boolean | string | (() => boolean)
  }

  interface Aos {
    init(options?: AosOptions): void
    refresh(): void
    refreshHard(): void
  }

  const aos: Aos
  export default aos
}
