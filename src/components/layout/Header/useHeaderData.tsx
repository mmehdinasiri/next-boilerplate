import { useIntl } from 'react-intl'

interface MainMenu {
  label: string
  subMenu: boolean
  link: string
}
export const useHeaderData = (): { MainMenuItem: MainMenu[] } => {
  const { formatMessage } = useIntl()
  const f = (id: string, value?: string) => formatMessage({ id }, { value })
  const MainMenuItem = [
    {
      label: f('header.menu.item1'),
      subMenu: true,
      link: 'investment'
    },
    {
      label: f('header.menu.item2'),
      subMenu: true,
      link: 'trades'
    },
    {
      label: f('header.menu.item3'),
      subMenu: true,
      link: ''
    },
    {
      label: f('header.menu.item4'),
      subMenu: false,
      link: '/about/'
    },
    {
      label: f('header.menu.item5'),
      subMenu: false,
      link: '/branches/'
    },
    {
      label: f('header.menu.item6'),
      subMenu: false,
      link: '/job/'
    }
  ]
  return { MainMenuItem }
}
