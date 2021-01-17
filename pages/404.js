import Link from 'next/link'

// pages/404.js
export default function Custom404() {
    return (
        <Link href={"/"} >
            <a style={{ margin: "50vh 0 0 50vw"}}>404 - Go back Home</a>
        </Link>
    )
}