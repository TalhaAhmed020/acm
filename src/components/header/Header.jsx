import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'

const links = [
    {
        id: 1,
        title: "Home",
        href: "/"
    },
    {
        id: 2,
        title: "Anti-Hacker Software",
        href: "/"
    },
    {
        id: 3,
        title: "Our Services",
        href: "/"
    }
]

const Header = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}> <Image src='/logo.png' width={216} height={60} alt='Image Loading Error'/> </Link>
      <div className={styles.links}>
        {links.map(link=>(
            <Link  key={link.id} href={link.href} className={styles.link}>{link.title}</Link>
        ))}
      </div>
    </div>
  )
}

export default Header
