/** @format */

import {useLocation} from 'react-router-dom'
import {Nav as NavReactBootstrap} from 'react-bootstrap'
import NavDropdown from './NavDropdown'
import {
  faSearch,
  faBarsStaggered,
  faBuilding,
  faShare,
  faPencil,
  faCalendar,
  faSnowflake,
  faTrophy,
  faEye,
} from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  const {pathname} = useLocation()
  return (
    <NavReactBootstrap
      activeKey={pathname}
      navbarScroll
      className='mx-auto my-1 my-lg-0'>
      <NavDropdown
        title='Anime'
        items={[
          {value: 'Search', icon: faSearch},
          {value: 'Genres', icon: faBarsStaggered},
          {value: 'Producers', icon: faBuilding},
          {value: 'Recommendations', icon: faShare},
          {value: 'Reviews', icon: faPencil},
          {value: 'Schedules', icon: faCalendar},
          {value: 'Seasons', icon: faSnowflake},
          {value: 'Top', icon: faTrophy},
          {value: 'Watch', icon: faEye},
        ]}
      />
    </NavReactBootstrap>
  )
}
