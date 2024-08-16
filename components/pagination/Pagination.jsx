import React from 'react'
import style from './style.module.scss'

export default function Pagination({ itemPerPage, totalItems, paginate, currentPage }) {
    const pageNumbers = []
    const totalPages = Math.ceil(totalItems / itemPerPage)

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    const handlePrevClick = () => {
        paginate(currentPage === 1 ? totalPages : currentPage - 1)
    }

    const handleNextClick = () => {
        paginate(currentPage === totalPages ? 1 : currentPage + 1)
    }

    const renderPageNumbers = () => {
        const maxPageNumbers = 2
        const sidePages = Math.floor(maxPageNumbers / 2)

        let startPage = Math.max(1, currentPage - sidePages)
        let endPage = Math.min(totalPages, currentPage + sidePages)

        if (currentPage <= sidePages) {
            endPage = Math.min(totalPages, maxPageNumbers)
        }

        if (currentPage + sidePages >= totalPages) {
            startPage = Math.max(1, totalPages - maxPageNumbers + 1)
        }

        const pagesToShow = pageNumbers.slice(startPage - 1, endPage)

        return (
            <>
                {startPage > 1 && (
                    <>
                        <li className={style.selectPage__item} onClick={() => paginate(1)}>
                            <a>1</a>
                        </li>
                        {startPage > 2 && <li className={style.selectPage__dots}>...</li>}
                    </>
                )}
                {pagesToShow.map(number => (
                    <li
                        key={number}
                        className={`${style.selectPage__item} ${currentPage === number ? style.active : ''}`}
                        onClick={() => paginate(number)}
                    >
                        <a>{number}</a>
                    </li>
                ))}
                {endPage < totalPages && (
                    <>
                        {endPage < totalPages - 1 && <li className={style.selectPage__dots}>...</li>}
                        <li className={style.selectPage__item} onClick={() => paginate(totalPages)}>
                            <a>{totalPages}</a>
                        </li>
                    </>
                )}
            </>
        )
    }

    return (
        <div className={style.pagination}>
            <p>
                Showing data {((currentPage - 1) * itemPerPage) + 1} to {Math.min(currentPage * itemPerPage, totalItems)} of {totalItems} entries
            </p>

            <div className={style.container}>
                <button onClick={handlePrevClick}>{'<'}</button>
                <ul className={style.selectPage}>
                    {renderPageNumbers()}
                </ul>
                <button onClick={handleNextClick}>{'>'}</button>
            </div>
        </div>
    )
}
