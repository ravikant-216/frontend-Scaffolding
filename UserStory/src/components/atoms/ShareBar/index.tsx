import theme from '../../../theme/index'
import Typography from '../Typography'

export interface ShareBarProps {
  percentage: number
  name: string
  color: string
  height?: string
}

const ShareBar = ({
  percentage,
  name,
  color,
  height = '16px',
}: ShareBarProps) => {
  return (
    <div data-testid="share-bar" style={{ width: `${percentage}%` }}>
      <div style={{ background: color, height, alignSelf: 'stretch' }}></div>
      <Typography
        height={height}
        text={`${percentage}% ${name}`}
        variant="c1"
        color={theme.palette.text.lowEmphasis}
        padding={'0px 4px'}
      />
    </div>
  )
}

export default ShareBar
