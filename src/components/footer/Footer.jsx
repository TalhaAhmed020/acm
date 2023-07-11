import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}> 
      <div className={styles.inner1}>
        <p className={styles.desc}>Copyright © 2023 CyLock</p>
      </div>
      <div className={styles.inner2}>
      <div className={styles.socialMediaIcons}>
          <Link href='/https://www.linkedin.com/'> <Image src='/linkedIn.png' width={40} height={40} alt='Image Loading Error'/> </Link>
          <Link href='/https://www.facebook.com/'> <Image src='/facebook.png' width={40} height={40} alt='Image Loading Error'/> </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
