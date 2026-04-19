import {
  createElement,
  useEffect,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react'

type StaggerGroupTag = 'div' | 'section' | 'ul'

interface StaggerGroupProps extends HTMLAttributes<HTMLElement> {
  as?: StaggerGroupTag
  children: ReactNode
}

export function StaggerGroup({
  as = 'div',
  children,
  className = '',
  ...props
}: StaggerGroupProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMounted(true)
    })

    return () => {
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return createElement(
    as,
    {
      ...props,
      className: `stagger-group ${className}`.trim(),
      'data-mounted': mounted ? 'true' : 'false',
    },
    children,
  )
}
