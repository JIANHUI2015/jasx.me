export const seo = {
  title: 'Jasper | 开发者、全干工程师',
  description:
    '',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://jasx.me'
      : 'http://localhost:3000'
  ),
} as const
