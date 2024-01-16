import { useContext } from 'react'
import { useSelector } from '@xstate/react'
import { AudioPlayerMachineContext } from '~/xstate/AudioPlayerMachineContext'
import { PauseIcon, PlayIcon } from '../icons'
import styles from './CuratedStationList.module.scss'
import curatedStations from './curatedStations'
import { StationType } from './types'

// When one of the curated station is clicked,
// 1) Pick (randomly) one of the audioTrack listen in the station
//    the listen can be found in curatadStations.ts
// 2) Update the current station state in the redux
// 3) Play the audio
const CuratedStationList = () => {
  const audioService = useContext(AudioPlayerMachineContext)
  const isAudioPlaying = useSelector(audioService, (state) =>
    state.matches('VISIBLE.AUDIO_PLAYER_INITIATED.PLAYING'),
  )
  const radioActor = useSelector(audioService, (state) => state.context.radioActor)

  const playStation = async (id: string) => {
    audioService.send({
      type: 'PLAY_RADIO',
      stationType: StationType.Curated,
      stationId: Number(id),
    })
  }

  const radioContext = radioActor?.getSnapshot()?.context || {}

  return (
    <div className={styles.container}>
      {Object.entries(curatedStations).map(([id, station]) => {
        const isSelectedStation =
          radioContext.type === StationType.Curated && radioContext.id === Number(id)

        let onClick
        if (!isSelectedStation) onClick = () => playStation(id)
        if (isSelectedStation && isAudioPlaying) onClick = () => audioService.send('TOGGLE')
        if (isSelectedStation && !isAudioPlaying) onClick = () => audioService.send('TOGGLE')

        const actionIcon = isSelectedStation && isAudioPlaying ? <PauseIcon /> : <PlayIcon />

        return (
          <div className={styles.item} key={id}>
            {`curated-station.${station.title}`}

            {/* <Card
              shouldFlipIconOnRTL={false}
              actionIcon={actionIcon}
              imgSrc={station.bannerImgSrc}
              size={CardSize.Large}
              title={t(`curated-station.${station.title}`)}
              imgAlt={t(`curated-station.${station.title}`)}
              description={t(`curated-station.${station.description}`)}
              onImgClick={onClick}
              onActionIconClick={onClick}
            /> */}
          </div>
        )
      })}
    </div>
  )
}

export default CuratedStationList
