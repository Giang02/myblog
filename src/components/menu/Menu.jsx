import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'

const Menu = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.subtitle}>{"What's hot"}</h2>
        <h1 className={styles.title}>Most popular </h1>
        <MenuPosts withImage={false} />
        <h2 className={styles.subtitle}>Discover by topic</h2>
        <h1 className={styles.title}>Categories</h1>
        <MenuCategories />
        <h2 className={styles.subtitle}>Choosen by editor</h2>
        <h1 className={styles.title}>Editor Pick</h1>
          <MenuPosts withImage={true} />
      </div>
    </div>
  )
}

export default Menu
