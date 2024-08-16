import React from 'react'
import style from './style.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Navigation() {
    const router = useRouter()

  return (
        <nav className={style.main__list}>
            <Link href='/dashboard'>
                <li className={router.pathname === '/dashboard' ? `${style.active}` : ''}>
                  <img src={router.pathname === '/dashboard' ? '/whiteIcons/dashboardWhite.svg' : '/icons/dashboard.svg'} alt="Dashboard" className={style.icon}/>
                  <span>Dashboard</span>
                </li>   
            </Link>
            <Link href='/product'>
                <li className={router.pathname === '/product' ? `${style.active}` : ''}>
                  <img src={router.pathname === '/product' ? '/whiteIcons/productWhite.svg' : '/icons/product.svg'} alt="Product" className={style.icon}/>
                  <span>Product</span>
                  <div className={style.main__arrow}>
                    <img src={router.pathname === '/product' ? '/whiteIcons/arrowWhite.svg' : '/icons/arrow.svg'} alt="arrow right" />
                  </div>
                </li>
            </Link>
            <Link href='/customers'>
                <li className={router.pathname === '/customers' ? `${style.active}` : ''}>
                  <img src={router.pathname === '/customers' ? '/whiteIcons/customersWhite.svg' : '/icons/customers.svg'} alt="Customers" className={style.icon}/>
                  <span>Customers</span>
                  <div className={style.main__arrow}>
                    <img src={router.pathname === '/customers' ? '/whiteIcons/arrowWhite.svg' : '/icons/arrow.svg'} alt="arrow right" />
                  </div>
                </li>
            </Link>
            <Link href='/income'>
                <li className={router.pathname === '/income' ? `${style.active}` : ''}>
                  <img src={router.pathname === '/income' ? '/whiteIcons/incomeWhite.svg' : '/icons/income.svg'} alt="Income" className={style.icon}/>
                  <span>Income</span>
                  <div className={style.main__arrow}>
                    <img src={router.pathname === '/income' ? '/whiteIcons/arrowWhite.svg' : '/icons/arrow.svg'} alt="arrow right" />
                  </div>
                </li>
            </Link>
            <Link href='/promote'>
                <li className={router.pathname === '/promote' ? `${style.active}` : ''}>
                  <img src={router.pathname === '/promote' ? '/whiteIcons/promoteWhite.svg' : '/icons/promote.svg'} alt="Promote" className={style.icon}/>
                  <span>Promote</span>
                  <div className={style.main__arrow}>
                    <img src={router.pathname === '/promote' ? '/whiteIcons/arrowWhite.svg' : '/icons/arrow.svg'} alt="arrow right" />
                  </div>
                </li>
            </Link>
            <Link href='/help'>
                <li className={router.pathname === '/help' ? `${style.active}` : ''}>
                  <img src={router.pathname === '/help' ? '/whiteIcons/helpWhite.svg' : '/icons/help.svg'} alt="Help" className={style.icon}/>
                  <span>Help</span>
                  <div className={style.main__arrow}>
                    <img src={router.pathname === '/help' ? '/whiteIcons/arrowWhite.svg' : '/icons/arrow.svg'} alt="arrow right" />
                  </div>
                </li>
            </Link>
        </nav>
  )
}
