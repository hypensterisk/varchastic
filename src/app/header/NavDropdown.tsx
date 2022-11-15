/** @format */

import {IconProp} from '@fortawesome/fontawesome-svg-core'
import {useLocation, Link} from 'react-router-dom'
import {NavDropdown as NavDropdownReactBootstrap} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

interface NavDropdownType {
  title: string
  items: Array<{
    value: string
    icon: IconProp
  }>
}

export default function NavDropdown({title, items}: NavDropdownType) {
  const {pathname} = useLocation()
  const href = `${process.env.PUBLIC_URL}/${title}`
  const active = pathname.search(href.toLowerCase())
  return (
    <NavDropdownReactBootstrap
      active={active === 0}
      menuVariant='dark'
      renderMenuOnMount
      rootCloseEvent='click'
      title={title}>
      {items.map(({value, icon}, index) => {
        const href = index
          ? `${process.env.PUBLIC_URL}/${title}/${value}`
          : `${process.env.PUBLIC_URL}/${title}`
        return (
          <NavDropdownReactBootstrap.Item
            key={index}
            as={Link}
            to={href.toLowerCase()}
            eventKey={href.toLowerCase()}>
            <FontAwesomeIcon icon={icon} /> {value}
          </NavDropdownReactBootstrap.Item>
        )
      })}
    </NavDropdownReactBootstrap>
  )
}
