import React, { useState } from 'react'
import style from './style.module.scss'
import Link from 'next/link'
import Navigation from '../navigation/Navigation'
import classNames from 'classnames'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className={classNames([style.headerSection, {[style.active]:menuOpen}])}>
          <div className={classNames([style.header, {[style.active]:!menuOpen}])}>
              <Link href='/'>
                <img src='/icons/Logo.svg' alt='Logo' className={style.header__logo}/>
                <span className={style.header__version}>v.01</span>
              </Link>
          </div>
          <div className={style.main}>
              <Navigation/>
          </div>
          <div className={style.footer}>
              <div className={classNames([style.footer__user, {[style.active]:menuOpen}])}>
                <img src="/User.svg" alt="User"/>
              </div>
              <div className={style.footer__userName}>
                <p>Evano</p>
                <span>Project Manager</span>
              </div>
          </div>
      </header>
      <div className={style.menu} onClick={()=> setMenuOpen(!menuOpen)}>
          <img src="/menu.svg" alt="Menu" className={classNames([style.menuOpen, {[style.active]:menuOpen}])}/>
          <img src="/close.svg" alt="Menu" className={classNames([style.menuClose, {[style.active]:menuOpen}])}/>
      </div>

      
    </>
  )
}
