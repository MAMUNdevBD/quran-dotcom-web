import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'
import { SettingsView, selectNavbar } from '~/store/slices/navbar'
import { SITE_FOOTER_ID, SITE_HEADER_ID, SITE_MAIN_ID } from '~/utils/constants'
import TranslationSelectionBody from '~/components/TranslationSelectionBody'
import AppBase from '../AppBase'
import { AppFooter, AppHeader, AppNavDrawer, AppSearchDrawer, AppSettingsDrawer } from './partials'
import { DrawerType } from './partials/AppSettingsDrawer'

const AppMain = styled('main')({
  flexGrow: 1,
  outline: 0, // Disable focus ring as `main` is focusable via "Skip Link".
})

function App(props) {
  const { children, headerMode } = props

  // const dispatch = useDispatch()
  // const { isSettingsDrawerOpen, settingsView } = useSelector(selectNavbar)

  // let header

  // if (settingsView === SettingsView.Translation) header = <div>Translations</div>

  return (
    <AppBase>
      <AppHeader id={SITE_HEADER_ID} headerMode={headerMode} />

      <AppMain id={SITE_MAIN_ID} role="main" tabIndex="-1">
        {children}
      </AppMain>

      <AppFooter id={SITE_FOOTER_ID} />

      <AppNavDrawer />
      <AppSearchDrawer />
      {/* <AppSettingsDrawer type={DrawerType.Settings} header={header} closeOnNavigation={false}>
        {isSettingsDrawerOpen && settingsView === SettingsView.Translation && (
          <TranslationSelectionBody />
        )}
      </AppSettingsDrawer> */}
    </AppBase>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  headerMode: PropTypes.string,
}

export default App
