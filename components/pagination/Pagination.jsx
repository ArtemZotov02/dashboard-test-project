import React, { useState } from 'react'
import style from './style.module.scss'


export default function Pagination({itemPerPage, totalItems, paginate, currentPage}) {
 
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
      pageNumbers.push(i);
    }

    const handlePrevClick = () => {
      paginate(currentPage === 1 ? Math.ceil(totalItems / itemPerPage) : currentPage - 1);
    };

    const handleNextClick = () => {
        paginate(currentPage === Math.ceil(totalItems / itemPerPage) ? 1 : currentPage + 1);
    };


  return (
    <div className={style.pagination}>
      <p>Showing data {((currentPage - 1) * itemPerPage) + 1} to {Math.min(currentPage * itemPerPage, totalItems)} of {totalItems} entries</p>

      <div className={style.container}>
        <button onClick={() => handlePrevClick()}>{'<'}</button>
        <ul className={style.selectPage}>
            {pageNumbers.map(number => (
                <li 
                    key={number} 
                    className={`${style.selectPage__item} ${currentPage === number ? style.active : ''}`} 
                    onClick={() => paginate(number)}>
                    <a>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
        <button onClick={() => handleNextClick()}>{'>'}</button>
      </div>
    </div>  
  )
}
