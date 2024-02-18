// Based on https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js
import * as React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import { AppType } from 'next/dist/shared/lib/utils'
import createEmotionServer from '@emotion/server/create-instance'
import { EmotionCache } from '@emotion/cache'
import { createEmotionCache } from '~/utils'

interface DocumentProps extends DocumentInitialProps {
  emotionStyleTags: React.ReactNode[]
  defaultLocale?: string
}

export default class MyDocument extends Document<DocumentProps> {
  render() {
    const lang = this.props.locale || this.props.defaultLocale
    return (
      <Html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <Head>
          {/* Generated from https://favicon.io/ */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />

          {/* Preload font files here: */}
          <link
            rel="preload"
            href="/fonts/Elmessiri/el-messiri-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Elmessiri/el-messiri-500.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Elmessiri/el-messiri-600.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Elmessiri/el-messiri-700.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/fonts/IrishGrover/irish-grover-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/fonts/Inter/inter-regular"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/fonts/Inter/inter-500.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/fonts/Inter/inter-700.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          <meta name="emotion-insertion-point" content="" />
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<DocumentProps> => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: AppType | React.ComponentType<{ emotionCache: EmotionCache }>) => (props) =>
        <App emotionCache={cache} {...props} />,
    })

  const initialProps = await Document.getInitialProps(ctx)
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...initialProps,
    emotionStyleTags,
  }
}
