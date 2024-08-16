import React, { useState } from 'react'
import style from './style.module.scss'

export default function Search({handleSearchQueryChange}) {
  return (
    <div className={style.searchBlock}>
        <div className={style.searchBlock__title}>
            <p>All Customers</p>
            <span>Active Members</span>
        </div>
        <div className={style.searchContainer}>

            <img src="/searchIcon.svg" alt="Search Icon" className={style.searchContainer__img}/>
            <input onInput={(e)=>handleSearchQueryChange(e.target.value)} type="text" placeholder="Search" className={style.searchContainer__input}/>

        </div>
    </div>
  )
}
