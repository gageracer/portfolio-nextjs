import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, my name is John. I'm a computer engineer and I build things for the web.
          You can contact me on <a target="_blank" href="https://www.linkedin.com/in/can-aygin-79856717a/">LinkedIn</a> and my resume is on the navigation bar.</p>
        <p>
          Here is some of my work so far. There are more if you want to check on my <a target="_blank" href="https://github.com/gageracer">GitHub </a> like games, small prototypes and such.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Works & Experience</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, img }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>
                  {img && <img
                    src={`/images/${img}`}
                    alt={"Logo"}
                    className={utilStyles.titleImage}
                  />}
                  <div className={utilStyles.titleText}>
                    {title}
                  </div>
                </a>
              </Link>
              <br />
              <small>
                {/* <Date dateString={date}/> */}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
