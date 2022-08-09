import { useIntl } from 'react-intl'

export interface TSubMenu {
  title: string
  link: string
  icon: string
  desc: string
}
interface TMainMenu {
  title: string
  link: string
  subMenu?: TSubMenu[]
}
export const useHeaderData = (): { MainMenuItem: TMainMenu[] } => {
  const { formatMessage } = useIntl()
  const f = (id: string, value?: string) => formatMessage({ id }, { value })
  const MainMenuItem = [
    {
      title: f('header.menu.item1'),
      link: 'investment',
      subMenu: [
        {
          title: f('header.menu.item1.subMenu.item1'),
          desc: f('header.menu.item1.subMenu.item1.subTitle'),
          link: 'investment',
          icon: 'icon-investment'
        },
        {
          title: f('header.menu.item1.subMenu.item2'),
          desc: f('header.menu.item1.subMenu.item2.subTitle'),
          link: 'funds',
          icon: 'icon-funds'
        }
      ]
    },
    {
      title: f('header.menu.item2'),
      link: 'trades',
      subMenu: [
        {
          title: f('header.menu.item2.subMenu.item1'),
          desc: f('header.menu.item2.subMenu.item1.subTitle'),
          link: 'investment',
          icon: 'icon-trades'
        },
        {
          title: f('header.menu.item2.subMenu.item2'),
          desc: f('header.menu.item2.subMenu.item2.subTitle'),
          link: 'funds',
          icon: 'icon-easytrader'
        }
      ]
    },
    {
      title: f('header.menu.item3'),
      link: '',
      subMenu: [
        {
          title: f('header.menu.item3.subMenu.item1'),
          desc: f('header.menu.item3.subMenu.item1.subTitle'),
          link: 'investment',
          icon: 'icon-learning'
        },
        {
          title: f('header.menu.item3.subMenu.item2'),
          desc: f('header.menu.item3.subMenu.item2.subTitle'),
          link: 'funds',
          icon: 'icon-events'
        },
        {
          title: f('header.menu.item3.subMenu.item3'),
          desc: f('header.menu.item3.subMenu.item3.subTitle'),
          link: 'funds',
          icon: 'icon-course'
        }
      ]
    },
    {
      title: f('header.menu.item4'),
      link: '/about/'
    },
    {
      title: f('header.menu.item5'),
      link: '/branches/'
    },
    {
      title: f('header.menu.item6'),
      link: '/job/'
    }
  ]
  return { MainMenuItem }
}
