type Status = 'live' | 'beta' | 'dev'

interface WorkCardProps {
  href?: string
  wide?: boolean
  num: string
  status: Status
  title: string
  description: string
  colorIndex: 1 | 2 | 3 | 4 | 5 | 6
}

const statusMap: Record<Status, { cls: string; label: string }> = {
  live: { cls: 's-live', label: 'Live' },
  beta: { cls: 's-beta', label: 'Beta' },
  dev:  { cls: 's-dev',  label: 'In dev' },
}

export default function WorkCard({
  href,
  wide,
  num,
  status,
  title,
  description,
  colorIndex,
}: WorkCardProps) {
  const { cls, label } = statusMap[status]
  const className = `work-card card-${colorIndex}${wide ? ' wide' : ''}`

  const inner = (
    <>
      <div className="card-meta">
        <span className="card-num">{num}</span>
        <span className={`card-status ${cls}`}>{label}</span>
      </div>
      <h2 className="card-title">
        <span className="card-dot" />
        {title}
      </h2>
      <p className="card-desc">{description}</p>
    </>
  )

  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    )
  }

  return <div className={className}>{inner}</div>
}
