import React from 'react'
import style from './style.module.scss'

export default function PaginationItems({currentData}) {


  return (
    <>
      {currentData.map((e)=> (
        
        <div className={style.paginationItems} key={e.id}>
          <p className={style.paginationItems__item}> 
            <span className={style.mobileTitle}>Customer Name:</span>
            <span className={style.dots}></span>
            {e.name} 
          </p>
          <p className={style.paginationItems__item}>
            <span className={style.mobileTitle}>Company:</span>
            <span className={style.dots}></span>
            {e.company}
          </p>
          <p className={style.paginationItems__item}>
            <span className={style.mobileTitle}>Phone Number:</span>
            <span className={style.dots}></span>
            {e.phone}
          </p>
          <p className={style.paginationItems__item}>
            <span className={style.mobileTitle}>Email:</span>
            <span className={style.dots}></span>
            {e.email}
          </p>
          <p className={style.paginationItems__item}>
            <span className={style.mobileTitle}>Country:</span>
            <span className={style.dots}></span>
            {e.country}
          </p>
          {e.status ? 
            <div className={style.statusBlock}>
              <span className={style.mobileTitle}>Status:</span>
              <span className={style.dots}></span>
              <p className={style.paginationItems__active}>Active</p>
            </div>
            :
            <div className={style.statusBlock}>
                <span className={style.mobileTitle}>Status:</span>
                <span className={style.dots}></span>
                <p className={style.paginationItems__inActive}>Inactive</p>
            </div>
          }
        </div>

      ))} 
    </>
  )

}
