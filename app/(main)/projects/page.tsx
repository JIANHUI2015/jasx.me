import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'

const title = '个人项目'
const description =
  '虽然早在2020年已经开始独立开发，碍于种种原因，目前只有一款作品。希望在未来有更多好用的产品出现在这个列表里！'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          个人项目
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        虽然早在2020年已经开始独立开发，碍于种种原因，目前只有一款作品。
        <br />
        希望在未来有更多好用的产品出现在这个列表里！
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600
