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
          You can contact me on <a target="_blank" href="https://www.linkedin.com/in/can-aygin-79856717a/">Linkedin</a>. </p>
          <p>
          Here are some of my works so far. There are more if you want to check on my <a target="_blank" href="https://github.com/gageracer">GitHub </a> like games, small prototypes and such.
            {/* (This is a sample website - you'll be building a site like this on{' '}
            <a href="https://nextjs.org/learn"> our Next.js tutorial</a>.) */}
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Works & Experience</h2>
          <ul className={utilStyles.list}>
              {allPostsData.map(({id, date ,title,img}) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}
                      {img && <img
                      src={`/images/${img}`}
                      alt={"Logo"}
                      style={{maxWidth: "48px"}}
                    />}</a>
                  </Link>
                  <br/>
                  <small>
                    {/* <Date dateString={date}/> */}
                  </small>
                </li>
              ))}
          </ul>
        <a className={utilStyles.resume} href="resume/John's Resume_1203.pdf" target="blank">Resume</a>
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
