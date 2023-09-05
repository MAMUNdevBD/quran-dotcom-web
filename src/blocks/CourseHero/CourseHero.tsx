import { Media, MediaReveal } from '@noaignite/oui'
import { Button, styled } from '@mui/material'
import { useI18n } from '~/contexts'
import { RouterLink } from '~/containers'
import { Html } from '~/components'

const CourseHeroRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  background: theme.palette.primary.main,
  boxShadow: 'inset 0px 4px 136px rgba(0, 29, 29, 0.8)',
  color: theme.palette.common.white,
  padding: theme.spacing(20, 2, 5),
  minHeight: 550,

  [theme.breakpoints.up('md')]: {
    minHeight: 650,
    padding: theme.spacing(20, 2, 20),
  },
}))

const CourseHeroContainer = styled('div')(({ theme }) => ({
  ...theme.mixins.contain('lg'),
  position: 'relative',
  display: 'grid',
  justifyItems: 'center',
  alignItems: 'center',
  zIndex: 1,
  padding: 'calc(var(--cia-section-spacing) * 2) 0 calc(var(--cia-section-spacing) * 3)',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: theme.spacing(12),
    padding: 'var(--cia-section-spacing) 0',
  },
}))

const CourseHeroContent = styled('div')(({ theme }) => ({
  ...theme.mixins.verticalRhythm(3),
  [theme.breakpoints.up('md')]: {
    maxWidth: '100%',
    width: 'max(340px, 41.55vw)',
  },
}))

const CourseHeroMediaReveal = styled(MediaReveal)<{ ownerState: { layoutReverse?: boolean } }>(
  ({ theme, ownerState }) => ({
    ...(ownerState?.layoutReverse && {
      order: -1,
    }),

    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      top: theme.spacing(8),
      left: 0,
      opacity: 0.2,
    },
  }),
)

const CourseHeroBackground = styled('div')(({ theme }) => ({
  ...theme.mixins.absolute(0),
  zIndex: 0,
  '& *:not(style)': {
    height: '100%',
  },
  background: `url('/assets/quran-bkg.png')`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}))

type CourseHeroProps = {
  children: React.ReactNode
  text: string
  ctaLabel: string
  ctaUrl: string
  mediaProps: any
  layoutReverse?: boolean
  enablePattern?: boolean
}

function CourseHero(props: CourseHeroProps) {
  const { text, mediaProps, layoutReverse, enablePattern, ctaLabel, ctaUrl } = props
  const { t } = useI18n()

  return (
    <CourseHeroRoot>
      {enablePattern && <CourseHeroBackground />}
      <CourseHeroContainer>
        <CourseHeroContent>
          <Html dangerouslySetInnerHTML={{ __html: text }} />
          {ctaLabel && ctaUrl && (
            <Button
              component={RouterLink}
              href={ctaUrl}
              variant="contained"
              // @ts-ignore
              color="textInverted"
              size="medium"
              aria-label={t(__translationGroup)`Applay for private course"`}
              sx={{
                mt: 3,
              }}
            >
              {ctaLabel}
            </Button>
          )}
        </CourseHeroContent>
        {mediaProps && (
          <CourseHeroMediaReveal
            width={mediaProps.width}
            height={mediaProps.height}
            ownerState={{ layoutReverse }}
          >
            <Media
              {...(mediaProps?.component === 'video'
                ? {
                    autoPlay: true,
                    muted: true,
                    loop: true,
                    playsInline: true,
                  }
                : { alt: '' })}
              {...mediaProps}
            />
          </CourseHeroMediaReveal>
        )}
      </CourseHeroContainer>
    </CourseHeroRoot>
  )
}

export default CourseHero
