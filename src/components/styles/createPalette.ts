import { deepmerge } from '@mui/utils'
import { PaletteOptions, alpha } from '@mui/material'
import blue from '../colors/blue'
import common from '../colors/common'
import green from '../colors/green'
import grey from '../colors/grey'
import orange from '../colors/orange'
import red from '../colors/red'

export const darkText = {
  // The most important text.
  primary: common.black,
  // Secondary text.
  secondary: alpha(common.black, 0.65),
  // Disabled text have even lower visual prominence.
  disabled: alpha(common.black, 0.4),
  // Text hints.
  hint: alpha(common.black, 0.4),
  // Complementing keys used for component color variants.
  main: common.black,
  dark: alpha(common.black, 0.8), // Mui uses `dark` for hover. We want a lighter color.
  contrastText: common.white,
}

export const lightText = {
  primary: common.white,
  secondary: alpha(common.white, 0.5),
  disabled: alpha(common.white, 0.3),
  hint: alpha(common.white, 0.4),
  main: common.white,
  dark: alpha(common.white, 0.9),
  contrastText: common.black,
}

// Dynamic colors meant to alternate between light/dark theme modes are added here.
export const light = {
  // The colors used to represent default interface elements for a user.
  default: {
    light: common.black,
    main: common.black,
    dark: common.black,
    contrastText: common.white,
  },
  // The colors used to style the text.
  text: darkText,
  textInverted: lightText,
  // The color used to divide different elements.
  divider: alpha(common.black, 0.1),
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    default: '#043B3B',
    paper: grey[50],
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: common.black,
    // The background color of an hovered action.
    hover: alpha(common.black, 0.04),
    hoverOpacity: 0.04,
    // The background color of a selected action.
    selected: alpha(common.black, 0.08),
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: alpha(common.black, 0.26),
    // The background color of a disabled action.
    disabledBackground: alpha(common.black, 0.12),
    disabledOpacity: 0.38,
    focus: alpha(common.black, 0.12),
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
}

export const dark = {
  default: {
    light: common.white,
    main: common.white,
    dark: common.white,
    contrastText: common.black,
  },
  text: lightText,
  textInverted: darkText,
  divider: alpha(common.white, 0.25),
  background: {
    default: common.black,
    paper: grey[900],
  },
  action: {
    active: common.white,
    hover: alpha(common.white, 0.08),
    hoverOpacity: 0.08,
    selected: alpha(common.white, 0.16),
    selectedOpacity: 0.16,
    disabled: alpha(common.white, 0.3),
    disabledBackground: alpha(common.white, 0.12),
    disabledOpacity: 0.38,
    focus: alpha(common.white, 0.12),
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
}

export default function createPalette(palette: PaletteOptions) {
  // Static colors that do not alternate between light/dark theme modes are added here.
  const {
    primary = {
      // `light`, `dark` & `contrastText` are automatically calculated if not defined.
      light: green[300],
      main: green[500],
      dark: green[700],
      contrastText: common.white,
    },
    secondary = {
      light: green[300],
      main: green[500],
      dark: green[700],
      contrastText: common.white,
    },
    error = {
      // `light`, `dark` & `contrastText` are automatically calculated if not defined.
      light: red[300],
      main: red[500],
      dark: red[700],
    },
    warning = {
      // `light`, `dark` & `contrastText` are automatically calculated if not defined.
      light: orange[300],
      main: orange[500],
      dark: orange[700],
    },
    info = {
      // `light`, `dark` & `contrastText` are automatically calculated if not defined.
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    success = {
      // `light`, `dark` & `contrastText` are automatically calculated if not defined.
      light: green[300],
      main: green[500],
      dark: green[700],
      contrastText: common.white,
    },
    modes = { dark, light },
    mode = 'light',
    contrastThreshold = 3,
    tonalOffset = 0.2,
    ...other
  } = palette

  const paletteOutput = deepmerge(
    {
      // A collection of common colors.
      common,
      // The palette mode, can be light or dark.
      mode,
      // The colors used to represent primary interface elements for a user.
      primary,
      // The colors used to represent secondary interface elements for a user.
      secondary,
      // The colors used to represent interface elements that the user should be made aware of.
      error,
      // The colors used to represent potentially dangerous actions or important messages.
      warning,
      // The colors used to present information to the user that is neutral and not necessarily important.
      info,
      // The colors used to indicate the successful completion of an action that user triggered.
      success,
      // The grey colors.
      grey,
      // The green colors.
      green,
      // Used by `getContrastText()` to maximize the contrast between the background and
      // the text.
      contrastThreshold,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset,
      // The light and dark type object.
      ...modes[mode],
    },
    other,
  )

  return paletteOutput
}
