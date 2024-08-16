import React, { useState } from 'react'
import style from './style.module.scss'
import Search from '@/components/search/Search'
import Pagination from '@/components/pagination/Pagination'
import PaginationItems from '../../components/paginationItems/PaginationItems'

export default function index() {
 const paginationData = [
        {
          name: 'Jane Cooper',
          company: 'Microsoft',
          phone: '(225) 555-0118',
          email: 'jane@microsoft.com',
          country: 'United States',
          status: true,
          id: 1
        },
        {
          name: 'Floyd Miles',
          company: 'Yahoo',
          phone: '(205) 555-0100',
          email: 'floyd@yahoo.com',
          country: 'Kiribati',
          status: false,
          id: 2
        },
        {
          name: 'Ronald Richards',
          company: 'Adobe',
          phone: '(302) 555-0107',
          email: 'ronald@adobe.com',
          country: 'Israel',
          status: false,
          id: 3
        },
        {
          name: 'Marvin McKinney',
          company: 'Tesla',
          phone: '(252) 555-0126',
          email: 'marvin@tesla.com',
          country: 'Iran',
          status: true,
          id: 4
        },
        {
          name: 'Jerome Bell',
          company: 'Google',
          phone: '(629) 555-0129',
          email: 'mjerome@google.com',
          country: 'Réunion',
          status: true,
          id: 5
        },
        {
          name: 'Kathryn Murphy',
          company: 'Microsoft',
          phone: '(406) 555-0120',
          email: 'kathryn@microsoft.com',
          country: 'Curaçao',
          status: true,
          id: 6
        },
        {
          name: 'Jacob Jones',
          company: 'Yahoo',
          phone: '(208) 555-0112',
          email: 'jacob@yahoo.com',
          country: 'Brazil',
          status: true,
          id: 7
        },
        {
          name: 'Kristin Watson',
          company: 'Facebook',
          phone: '(704) 555-0127',
          email: 'kristin@facebook.com',
          country: 'Åland Islands',
          status: false,
          id: 8
        },
        {
          name: 'Jake Male',
          company: 'Skype',
          phone: '(225) 311-5218',
          email: 'jane@microsoft.com',
          country: 'United States',
          status: true,
          id: 9
        },
        {
          name: 'Steph Ray',
          company: 'Steam',
          phone: '(211) 525-0132',
          email: 'floyd@yahoo.com',
          country: 'Kiribati',
          status: false,
          id: 10
        },
        {
          name: 'Michael Rolls',
          company: 'Instagram',
          phone: '(312) 002-0507',
          email: 'ronald@adobe.com',
          country: 'Israel',
          status: false,
          id: 11
        },
        {
          name: 'Klay Kipper',
          company: 'Tesla',
          phone: '(752) 155-0026',
          email: 'marvin@tesla.com',
          country: 'Iran',
          status: true,
          id: 12
        },
        {
          name: 'Jerome Jordan',
          company: 'Work.ua',
          phone: '(619) 855-1529',
          email: 'mjerome@google.com',
          country: 'Réunion',
          status: true,
          id: 13
        },
        {
          name: 'Kate Balis',
          company: 'Robota',
          phone: '(456) 155-5120',
          email: 'kathryn@microsoft.com',
          country: 'Curaçao',
          status: true,
          id: 14
        },
        {
          name: 'Jack Jones',
          company: 'EaSports',
          phone: '(208) 555-0112',
          email: 'jacob@yahoo.com',
          country: 'Brazil',
          status: true,
          id: 15
        },
        {
          name: 'Lui Watson',
          company: 'Apple',
          phone: '(124) 545-0627',
          email: 'kristin@facebook.com',
          country: 'Åland Islands',
          status: false,
          id: 16
        },
  ]

  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage] = useState(8)
  const [searchQuery, setSearchQuery] = useState('')


  const filteredProducts = () => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return paginationData.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.company.toLowerCase().includes(query) ||
        item.phone.toLowerCase().includes(query) ||
        item.country.toLowerCase().includes(query)
      );
    } else {
      return paginationData;
    }
  };

  const lastPageIndex = currentPage * itemPerPage
  const firstPageIndex = lastPageIndex - itemPerPage
  const currentData = filteredProducts().slice(firstPageIndex, lastPageIndex)

  const paginate = (pageNumber) => { 
    setCurrentPage(pageNumber)
  }
  const handleSearchQueryChange = (query) => {
    setSearchQuery(query)
    setCurrentPage(1)
  };


  return (
      <section className={style.customersPage}>
        <p className={style.customersPage__title}>Hello Evano 👋🏼,</p>
        <div className={style.customersBlock}>
          <Search handleSearchQueryChange={handleSearchQueryChange}/>
          <div className={style.paginationBlock}>
            <div className={style.paginationBlock__title}>
                <p>Customer Name</p>
                <p>Company</p>
                <p>Phone Number</p>
                <p>Email</p>
                <p>Country</p>
                <p>Status</p>
            </div>

            <PaginationItems currentData={currentData} />

            {filteredProducts().length > 0 
            ?
            (
              <Pagination
                itemPerPage={itemPerPage}
                totalItems={filteredProducts().length}
                paginate={paginate}
                currentPage={currentPage}
              />
            )
            : (
              <div>
                <p className={style.notFoundUsers}>Not Found</p>
              </div>
            )
            }

        
          </div>
        </div>
      </section>
  )
}
