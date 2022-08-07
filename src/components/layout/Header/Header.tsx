import Image from 'next/image'
import { useIntl } from 'react-intl'

export const Header = () => {
  const { formatMessage } = useIntl()
  const f = (id: string, value?: string) => formatMessage({ id }, { value })
  const headerLink = [
    {
      label: f('header.menu.item1'),
      megaMenu: true,
      link: ''
    },
    {
      label: f('header.menu.item2'),
      megaMenu: true,
      link: ''
    },
    {
      label: f('header.menu.item3'),
      megaMenu: true,
      link: ''
    },
    {
      label: f('header.menu.item4'),
      megaMenu: false,
      link: '/about/'
    },
    {
      label: f('header.menu.item5'),
      megaMenu: false,
      link: '/branches/'
    },
    {
      label: f('header.menu.item6'),
      megaMenu: false,
      link: '/job/'
    }
  ]
  return (
    <header>
      <nav className='px-8 py-6 bg-gray-100 border-gray-200 '>
        <div className='flex flex-wrap items-center '>
          <a href='#' className='relative h-10 ml-8 w-44'>
            <Image
              src='/assets/images/logo/logo.svg'
              alt='logo'
              layout='fill'
              objectFit='contain'
            />
          </a>
          <button
            data-collapse-toggle='mobile-menu'
            type='button'
            className='inline-flex items-center justify-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500'
            aria-controls='mobile-menu-2'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
          <div className='hidden md:block' id='mobile-menu'>
            <ul className='flex flex-col md:flex-row'>
              {headerLink.map((item, idx) => (
                <li key={idx} className='py-1 ml-4'>
                  <a href='#' className='text-sm leading-normal text-m-blue'>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
