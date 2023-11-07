import { Grid, Stack } from '@mui/material'
import Typography from '../../atoms/Typography'
import Icon from '../../atoms/Icon'
import theme from '../../../theme'
import ChevronRightSvg from '../../../../public/assets/Icons/ChevronRightSvg.svg'
import DotSvg from '../../../../public/assets/Icons/Dot.svg'
import { formatNumberWithCommas } from '../../../utils/numberUtil'

export interface CapitalItemProps {
  name: string
  color: string
  certificates?: number
  raised?: number
  authorized?: number
}

const CaptionTypo = ({ text }: { text: string }) => (
  <Typography text={text} variant="c1" color={theme.palette.text.lowEmphasis} />
)

const DotIcon = () => <Icon src={DotSvg} alt="dot_divider" />

const CapitalItem = ({
  name,
  color,
  certificates,
  raised,
  authorized,
}: CapitalItemProps) => {
  return (
    <Grid
      data-testid="capital-item"
      container
      spacing={4}
      padding={'10px 0px'}
      sx={{ borderLeft: `4px solid ${color}` }}
    >
      <Grid item xs={1}>
        <Icon
          src={ChevronRightSvg}
          alt="chevron_right"
          boxProps={{ marginLeft: '50%' }}
        />
      </Grid>
      <Grid item xs={11}>
        <Stack gap={1} direction="column">
          <Typography
            text={name}
            variant="b3"
            color={theme.palette.text.highEmphasis}
          />
          <Stack direction="row" gap={2}>
            {certificates && (
              <CaptionTypo text={`${certificates} certificates`} />
            )}
            {raised && <DotIcon />}
            {raised && (
              <CaptionTypo text={`$${formatNumberWithCommas(raised)} raised`} />
            )}
            {authorized && <DotIcon />}
            {authorized && (
              <CaptionTypo
                text={`${formatNumberWithCommas(authorized)} authorized`}
              />
            )}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default CapitalItem
