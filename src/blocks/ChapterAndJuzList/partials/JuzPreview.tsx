import { styled } from '@mui/material'
import { RouterLink } from '~/containers'
import { getChapterData } from '~/utils'
import SurahPreview from './SurahPreview'

const JuzPreviewRoot = styled('div')(({ theme }) => ({
  borderRadius: 4,
  paddingBlockStart: 13,
  paddingBlockEnd: 13,
  paddingInlineStart: 13,
  paddingInlineEnd: 13,
  backgroundColor: '#f1f1f1',
  breakInside: 'avoid-column',
}))

const JuzPreviewItem = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  paddingBottom: 5,
}))

const JuzPreviewSurah = styled('div')(({ theme }) => ({
  '& > * + *': {
    marginTop: 20,
  },
}))

const SurahPreviewContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#f1f1f1',
}))

const JuzRouterLink = styled(RouterLink)({
  textDecoration: 'underline',
})

const JuzPreview = (props: any) => {
  const { chapters, id, verseMapping, juzNumber } = props

  const chapterIds = Object.keys(verseMapping)

  return (
    <JuzPreviewRoot>
      <JuzPreviewItem className="flex justify-between items-end pb-5">
        <RouterLink href={`/juz/${juzNumber}`}>Juz {juzNumber}</RouterLink>
        <JuzRouterLink href={`/juz/${juzNumber}`}>Read Juz</JuzRouterLink>
      </JuzPreviewItem>
      <JuzPreviewSurah>
        {chapterIds.map((chapterId) => {
          // @ts-ignore
          const chapter = getChapterData(chapters, chapterId - 1)
          console.log('chapterId', chapterId)
          return (
            <SurahPreviewContainer>
              <SurahPreview key={chapterId} chapter={chapter} />
            </SurahPreviewContainer>
          )
        })}
      </JuzPreviewSurah>
    </JuzPreviewRoot>
  )
}

export default JuzPreview
