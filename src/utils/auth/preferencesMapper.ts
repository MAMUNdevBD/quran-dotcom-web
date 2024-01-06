/* eslint-disable import/prefer-default-export */
// import { DEFAULT_XSTATE_INITIAL_STATE } from '~/store/defaultSettings/defaultSettings'
// import AudioState from '~/store/types/AudioState'
import QuranReaderStyles from '~/store/types/QuranReaderStyles'
import ReadingPreferences from '~/store/types/ReadingPreferences'
import SliceName from '~/store/types/SliceName'
import TafsirsSettings from '~/store/types/TafsirsSettings'
import TranslationsSettings from '~/store/types/TranslationsSettings'
import PreferenceGroup from '~/types/auth/PreferenceGroup'

const SLICE_NAME_TO_PREFERENCE_GROUP = {
  [SliceName.AUDIO_PLAYER_STATE]: PreferenceGroup.AUDIO,
  [SliceName.LOCALE]: PreferenceGroup.LANGUAGE,
  [SliceName.QURAN_READER_STYLES]: PreferenceGroup.QURAN_READER_STYLES,
  [SliceName.READING_PREFERENCES]: PreferenceGroup.READING,
  [SliceName.TAFSIRS]: PreferenceGroup.TAFSIRS,
  [SliceName.TRANSLATIONS]: PreferenceGroup.TRANSLATIONS,
}

/**
 * Convert a slice's object into preference group
 * that will be persisted in the DB.
 *
 * @param {SliceName} sliceName
 * @param {any} currentSliceValue
 * @returns {Record<string, any>}
 */
const getPreferenceGroupValue = (
  sliceName: SliceName,
  currentSliceValue: any,
): Record<string, any> => {
  if (sliceName === SliceName.LOCALE) {
    return { language: currentSliceValue }
  }

  // if (sliceName === SliceName.AUDIO_PLAYER_STATE) {
  //   const { showTooltipWhenPlayingAudio, enableAutoScrolling } = currentSliceValue as AudioState
  //   // only partially pick those props
  //   return {
  //     reciter: DEFAULT_XSTATE_INITIAL_STATE.reciterId,
  //     playbackRate: DEFAULT_XSTATE_INITIAL_STATE.playbackRate,
  //     showTooltipWhenPlayingAudio,
  //     enableAutoScrolling,
  //   }
  // }

  if (sliceName === SliceName.READING_PREFERENCES) {
    const newPreferences = {
      ...currentSliceValue,
    } as ReadingPreferences
    // @ts-ignore
    delete newPreferences.isUsingDefaultWordByWordLocale
    return newPreferences
  }

  if (sliceName === SliceName.TRANSLATIONS) {
    const newPreferences = {
      ...currentSliceValue,
    } as TranslationsSettings
    // @ts-ignore
    delete newPreferences.isUsingDefaultTranslations
    return newPreferences
  }

  if (sliceName === SliceName.TAFSIRS) {
    const newPreferences = {
      ...currentSliceValue,
    } as TafsirsSettings
    // @ts-ignore
    delete newPreferences.isUsingDefaultTafsirs
    return newPreferences
  }

  if (sliceName === SliceName.QURAN_READER_STYLES) {
    const newPreferences = {
      ...currentSliceValue,
    } as QuranReaderStyles
    // @ts-ignore
    delete newPreferences.isUsingDefaultFont
    return newPreferences
  }

  return {
    ...currentSliceValue,
  }
}

/**
 * Convert the entire state object that includes multiple
 * slices into preference groups that will be persisted
 * in the DB.
 *
 * @param {any} state
 * @returns {Record<PreferenceGroup, any>}
 */
export const stateToPreferenceGroups = (state: any): Record<PreferenceGroup, any> => {
  const preferenceGroups = {} as Record<PreferenceGroup, any>
  // @ts-ignore
  Object.keys(state).forEach((sliceName: SliceName) => {
    const preferenceGroup = SLICE_NAME_TO_PREFERENCE_GROUP[sliceName]
    // if the current slice has a corresponding preference group name
    if (preferenceGroup) {
      preferenceGroups[preferenceGroup] = getPreferenceGroupValue(sliceName, state[sliceName])
    }
  })
  return preferenceGroups
}
