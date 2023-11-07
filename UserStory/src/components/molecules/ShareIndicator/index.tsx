import React from 'react'
import ShareBar from '../../atoms/ShareBar'

export interface ShareIndicatorProps {
  shares: Shares[]
}

export interface Shares {
  name: string
  percentage: number
  color: string
}

const ShareIndicator = ({ shares }: ShareIndicatorProps) => {
  return (
    <div
      data-testid="share-indicator"
      style={{ width: '100%', display: 'flex', gap: '1px' }}
    >
      {shares.map((share) => (
        <ShareBar
          key={share.name}
          percentage={share.percentage}
          name={share.name}
          color={share.color}
        />
      ))}
    </div>
  )
}

export default ShareIndicator
