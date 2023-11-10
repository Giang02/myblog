import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <Image src="/logo3.png" alt='giang-blog' width={50} height={50} />
            <h1 className={styles.logoText}>Giang-Blog</h1>
          </div>
          <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
          </p>
          <div className={styles.icons}>
            <Image src="/facebook.png" alt='fb' width={18} height={18} />
            <Image src="/instagram.png" alt='ig' width={18} height={18} />
            <Image src="/tiktok.png" alt='tiktok' width={18} height={18} />
            <Image src="/github.png" alt='github' width={18} height={18} />
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href="/">Homepage</Link>
            <Link href="/">Blog</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link href="/">Style</Link>
            <Link href="/">Fashion</Link>
            <Link href="/">Coding</Link>
            <Link href="/">Travel</Link>
            <Link href="/">Culture</Link>
            <Link href="/">Food</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Social</span>
            <Link href="/">Facebook</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">Tiktok</Link>
            <Link href="/">Github</Link>
          </div>
        </div>
    </div>
  )
}

export default Footer;
