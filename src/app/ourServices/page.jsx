import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const OurServices = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <h1 className={styles.title}>Cyber security and anti-hacker services</h1>
            <div className={styles.firstRow}>
                <div className={styles.antihacker}>
                    <Image src='/antihacker.png' className={styles.image} width={80} height={80} alt='Image Loading Error'/>
                    <h4 className={styles.heading}>Anti-hacker software for your business network</h4>
                    <p className={styles.desc}>Verified Vulnerability Assessments and Penetration Tests on URL/IP addresses and servers</p>
                </div>
                <div className={styles.antiphishing}>
                <Image src='/antiphishing.png' className={styles.image} width={80} height={80} alt='Image Loading Error'/>
                    <h4 className={styles.heading}>Anti-Phishing</h4>
                    <p className={styles.desc}>Cyber Security Awarness to prevent advanced email-based threats</p>
                </div>
            </div>

            <div className={styles.secRow}>
                <div className={styles.antihacker}>
                    <Image src='/penetration.png' className={styles.image} width={80} height={80} alt='Image Loading Error'/>
                    <h4 className={styles.heading}>Customised penetration tests</h4>
                    <p className={styles.desc}>A customised PT on the IT system to find all weaknesses</p>
                </div>
                <div className={styles.antiphishing}>
                <Image src='/VAPT.png' className={styles.image} width={80} height={80} alt='Image Loading Error'/>
                    <h4 className={styles.heading}>Certified VAPT testing for ISO 27001</h4>
                    <p className={styles.desc}>Documentary evidence required for ISO certification and for Art. 32 of the GDPR</p>
                </div>
            </div>

            <div className={styles.thirdRow}>
                <div className={styles.antihacker}>
                    <Image src='/Management.png' className={styles.image} width={80} height={80} alt='Image Loading Error'/>
                    <h4 className={styles.heading}>Customised Data Breach Management</h4>
                    <p className={styles.desc}>A security plan explaining what to do in the event of a data breach</p>
                </div>
                <div className={styles.antiphishing}>
                <Image src='/cyber.png' className={styles.image} width={80} height={80} alt='Image Loading Error'/>
                    <h4 className={styles.heading}>Cyber threat intelligence</h4>
                    <p className={styles.desc}>We find out if your data has already been stolen and if it is for sale on the dark web</p>
                </div>
            </div>
            
            <button className={styles.button}>Contact us for a free consultation</button>

        </div>
        
    </div>
  )
}

export default OurServices
