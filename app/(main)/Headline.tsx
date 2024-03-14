'use client'

import { motion } from 'framer-motion'
// import { PeekabooLink } from '~/components/links/PeekabooLink'
// import { SocialLink } from '~/components/links/SocialLink'
import { SocialIcon } from 'react-social-icons'
import Balancer from 'react-wrap-balancer'

import { SparkleIcon, UserSecurityIcon } from '~/assets'

function Developer() {
  return (
    <span className="group">
      <span className="font-mono">&lt;</span>开发者
      <span className="font-mono">/&gt;</span>
      <span className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500" />
    </span>
  )
}

function Designer() {
  return (
    <span className="group relative rounded-2xl bg-black/5 p-1 dark:bg-white/5">
      <span className="pointer-events-none absolute inset-0 border border-lime-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-lime-400/90">
        <span className="absolute -left-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
      </span>
      全干工程师
    </span>
  )
}

function OCD() {
  return (
    <span className="group">
      <SparkleIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" />
      <span>一人公司</span>
    </span>
  )
}

function Founder() {
  return (
    <span className="group">
      <UserSecurityIcon className="mr-1 inline-flex group-hover:fill-zinc-600/20 dark:group-hover:fill-zinc-200/20" />
      <span>超级奶爸</span>
    </span>
  )
}

export function Headline() {
  return (
    <div className="max-w-2xl">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        <Developer />，<Designer />，
        <br />
        <OCD />，<Founder />
      </motion.h1>
      <motion.p
        className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
          嗨，我是Jasper，一名移动开发工程师，目前在职，业余时间做自己的App。
          <br />
          正在朝超级个体方向
          梦想是做自己喜欢的事情，顺便把钱赚了。😄
          {/* 我是 Cali，
          <PeekabooLink href="https://zolplay.com">佐玩</PeekabooLink>
          创始人，目前带领着佐玩致力于创造一个充满创造力的工作环境，同时鼓励团队创造影响世界的产品。
          我热爱开发，设计，创新，享受生活，以及在未知领域中探索。 */}
        </Balancer>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <SocialIcon
          url='https://www.xiaohongshu.com/user/profile/62c1c732000000001902cd30?xhsshare=CopyLink&appuid=62c1c732000000001902cd30&apptime=1710403498'
          label='小红书'
          style={{ height: 30, width: 30 }}
        />
        <SocialIcon
          url='mailto:182767243@qq.com'
          label='邮箱'
          style={{ height: 30, width: 30 }}
        />
        
          
        {/* <SocialLink
          href="https://cali.so/twitter"
          aria-label="我的 小红书"
          platform="xhs"
        /> */}
        {/* <SocialLink
          href="https://cali.so/youtube"
          aria-label="我的 YouTube"
          platform="youtube"
        />
        <SocialLink
          href="https://cali.so/bilibili"
          aria-label="我的 Bilibili"
          platform="bilibili"
        />
        <SocialLink
          href="https://cali.so/github"
          aria-label="我的 GitHub"
          platform="github"
        />
        <SocialLink
          href="https://cali.so/tg"
          aria-label="我的 Telegram"
          platform="telegram"
        /> */}
        {/* <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅" />
        <SocialLink
          href="mailto:hi@cali.so"
          aria-label="我的邮箱"
          platform="mail"
        /> */}
      </motion.div>
    </div>
  )
}
