import styles from './layout.module.css'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { motion, AnimatePresence} from 'framer-motion'

const name = 'John Can Aygin'
export const siteTitle = 'John\'s Portfolio'

export default function Layout({children, home}) {

    return <div className={styles.container}>
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                        <meta
                            name="description"
                            content="John Can Aygin's portfolio"
                        />
                        <meta
                            property="og:image"
                            content={`https://og-image.now.sh/${encodeURI(
                                siteTitle
                            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                        />
                        <meta name="og:title" content={siteTitle}/>
                        <meta name="twitter:card" content="summary_large_image"/>
                </Head>
               
                <AnimatePresence  exitBeforeEnter>
                <motion.div key={home} initial="hidden" animate="visible" 
                    variants={{
                        hidden: {
                            transition: {
                                when: "afterChildren",
                            },
                            scale: 0.5,
                            opacity: 0
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                when: "beforeChildren",
                                delay: 0,
                                duration: 1,
                            }
                        },
                        exit: {
                            scale: 0.2,
                            opacity: 0,
                            zIndex: 0,
                            transition: {
                                when: "beforeChildren",
                                delay: 1,
                                duration: 1,
                            }

                        }
                    }}>
                    <header className={styles.header}>
                        
                        { home ? (
                            <>
                                <img
                                    src="/images/profile.jpeg"
                                    className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                                    alt={name}
                                />
                                <h1 className={utilStyles.heading2Xl}>{name}</h1>
                            </>
                        )  : (
                            <>
                                <Link href="/">
                                    <a>
                                        <img
                                            src="/images/profile.jpeg"
                                            className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                            alt={name}
                                        />
                                    </a>
                                </Link>
                                <h2 className={utilStyles.headingLg}> 
                                    <Link href="/">
                                        <a className={utilStyles.colorInherit}>
                                            {name}
                                        </a>
                                    </Link>
                                </h2>
                            </>
                        )}
                    </header>
                </motion.div>
                </AnimatePresence>
                <AnimatePresence  key={home} custom={home}>
                <motion.div initial="hidden" animate="visible" custom={home}
                        variants={{
                            hidden: {
                                transition: {
                                    when: "afterChildren",
                                    type: "spring",
                                    stiffness: 300,
                                    duration: 0.5
                                },
                                // x: "-100%",
                                opacity: 0,
                                
                               
                            },
                            visible: {
                                x: 0,
                                opacity: 1,
                                zIndex: 1,
                                
                                transition: {
                                    when: "beforeChildren",
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 25,
                                    delay: 0.3,
                                },
                                
                            },
                            exit: {
                                x: "100%",
                                opacity: 0,
                                zIndex: 0,
                                transition: {
                                    duration: 0.5,
                                }
                                
                            }
                        }}>
                    <main>{children}</main>
                    {!home && (
                        <div className={styles.backToHome}>
                            <Link href="/">
                                <a>← Back to Home</a>
                            </Link>
                        </div>
                    )}
                    </motion.div>
                </AnimatePresence>
            <ul orientation="left"  className={utilStyles.socials}>
                <li>
                    <a href="https://github.com/gageracer" target="_blank"><img src="/images/svgs/github.svg" alt="github" /></a>
                </li>
                <li>
                    <a href="https://www.codewars.com/users/gageracer/stats" target="_blank"><img src="/images/svgs/codewars.svg" alt="codewars" /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/can-aygin-79856717a/" target="_blank"><img alt="linkedin" src="/images/svgs/linkedin.svg" /></a>
                </li>
            </ul>
            </div>

}