import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {
  return (
    <div className={styles.container}>
        <div className={styles.login}>
            <div className={styles.heading}>
                <h2 className={styles.title}>Log In</h2>
            </div>

            <div className={styles.username}>
            <input type="text" name="" id="" className={styles.username2} placeholder='Username/Email'/>
            <Image width={20} height={20} alt='' src='/username.svg'/>
            </div>

            <div className={styles.username}>
            <input type="text" name="" id="" className={styles.username2} placeholder='Password'/>
            <Image width={20} height={20} alt='' src='/password.svg'/>
            </div>

            <button className={styles.button}>Log In</button>
            <p className={styles.paragraph}>OR</p>
            <p className={styles.desc}>Login with</p>
            <div className={styles.social}>
            <Link href='/https://www.linkedin.com/'> <Image src='/FACEBOOK.png' width={25} height={25} className={styles.facebook} alt='Image Loading Error'/> </Link>
          <Link href='/https://www.facebook.com/'> <Image src='/LINKEDIN.png' width={25} height={25} className={styles.facebook} alt='Image Loading Error'/> </Link>
          <Link href='/https://www.facebook.com/'> <Image src='/twitterb.svg' width={25} height={25} className={styles.facebook} alt='Image Loading Error'/> </Link>
            </div>

        </div>
    </div>
  )
}

export default Login
