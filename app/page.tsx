import { redirect } from 'next/navigation'

export default function RootPage() {
  // 自动重定向到默认语言
  redirect('/es')
} 