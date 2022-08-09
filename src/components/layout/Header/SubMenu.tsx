import Image from 'next/image'
import { FC } from 'react'

import DynamicIcon from '@/utils/helpers/DynamicIcon'

import { TSubMenu } from './useHeaderData'

interface SubMenuProps {
  items: TSubMenu[]
}
export const SubMenu: FC<SubMenuProps> = ({ items }) => {
  return (
    <ul className='z-10 absolute left-0 right-0 flex flex-col invisible p-4 transitions-all-150ms rounded-md opacity-0 shadow-m-shadow top-8 bg-white w-[360px] group-hover:opacity-100 group-hover:visible group-hover:top-9 '>
      {items.map((item, idx) => (
        <li key={idx} className='flex group-1'>
          <a
            id={`subMenu-${idx}`}
            href={item.link}
            className='block w-full p-4 transitions-colors-150ms group-1-hover:bg-m-green-light'
          >
            <div className='flex items-center pr-3'>
              {item.icon && (
                <div className='relative w-10 h-10'>
                  <Image
                    src={`/assets/images/icon/${item.icon}.svg`}
                    alt='logo'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              )}
              <div className='mr-2'>
                <span className='block mb-1 text-sm font-medium transitions-colors-150ms text-m-text-darker group-1-hover:text-m-green'>
                  {item.title}
                </span>
                <span className='block text-xs transitions-colors-150ms text-m-text-lighter group-1-hover:text-m-blue'>
                  {item.desc}
                </span>
              </div>
              <DynamicIcon
                icon='Md/MdArrowBack'
                className='mr-auto opacity-0 transitions-opacity-150ms text-m-green group-1-hover:opacity-100'
              />
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}
