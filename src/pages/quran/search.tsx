import * as React from 'react'
import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import CopyrightSection from '~/components/CopyrightSection'
import NavBar from '~/components/NavBar'
import SearchSection from '~/components/SearchSection'
import TopBar from '~/components/TopBar'

const SearchPage = () => {
  const router = useRouter()

  const [result, setResult] = React.useState<any>()

  React.useEffect(() => {
    axios
      .get(`https://api.quran.com/api/v4/search?size=20&page=0&language=sv&q=${router.query.s}`)
      .then((res: any) => setResult(res.data.search))
  }, [router])

  return (
    <React.Fragment>
      <Head>
        <title>Search Page</title>
      </Head>
      <main className="font-inter bg-color1 overflow-x-hidden flex flex-col min-h-screen">
        <TopBar />
        <NavBar />
        <div className="flex-grow container px-5 text-white">
          <SearchSection />
          <h1
            className="text-center text-lg
          "
          >
            Search result for <em className="font-semibold">&quot;{result?.query}&quot;</em>
          </h1>
          {result && result.results.length > 0 && (
            <div className="space-y-5 py-10">
              {result.results.map((r: any, i: number) => (
                <div key={i} className="border border-[#E0D2B4] p-5">
                  <Link
                    href={`/surah/view?chapter_id=${r.verse_key?.split(':')[0]}&verse=${
                      r.verse_key?.split(':')[1]
                    }`}
                  >
                    {r.highlighted ? (
                      <div
                        className=""
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                          __html: r.highlighted,
                        }}
                      />
                    ) : (
                      // result.translations?.map((trans, i) => (
                      <div
                        key={i}
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                          __html: r.translations[0].text,
                        }}
                      />
                      // ))
                    )}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
        <CopyrightSection />
      </main>
    </React.Fragment>
  )
}

export default SearchPage
