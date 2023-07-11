export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  next_svg: '/next.svg',
  vercel_svg: '/vercel.svg'
} as const

export type StaticPath = typeof staticPath
