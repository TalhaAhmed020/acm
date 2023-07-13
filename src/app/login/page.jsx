'use client'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'


const Login = () => {

  const [showPassword, setShowPassword] = useState(false);


  const router = useRouter();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const loginUser = async (e) => {
    console.log(data);
    e.preventDefault();
    await signIn('credentials', {
      ...data, 
      redirect: false
    });
    
    router.push('/home');
  }

  return (
    <div className={styles.container}>
        <div className={styles.login}>
            <div className={styles.heading}>
                <h2 className={styles.title}>Log In</h2>
            </div>
            <form action="" className={styles.form} onSubmit={loginUser}>
            <div className={styles.username}>
            <input type="text" name="" id="" value={data.email} onChange={(e) => {setData({...data, email: e.target.value});}} className={styles.username2} placeholder='Username/Email'/>
            <Image width={20} height={20} alt='' src='/username.svg'/>
            </div>

            <div className={styles.username}>
            <input type={showPassword?'text':'password'} name="" id="" value={data.password} className={styles.username2} onChange={(e) => {setData({...data, password: e.target.value})}} placeholder='Password'/>
            <Image width={20} onClick={()=>setShowPassword(!showPassword)} height={20} alt='' src='/password.svg'/>
            </div>

            <button className={styles.button}>Log In</button>
            </form>
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
