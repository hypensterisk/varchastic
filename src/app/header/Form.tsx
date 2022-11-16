/** @format */

import {useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
import {Form as FormReactBootstrap, Row, Col, Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

export default function Form() {
  const types = ['Anime', 'Characters', 'Clubs', 'Manga', 'People', 'Users']
  const navigate = useNavigate()
  const {handleSubmit, handleChange, values} = useFormik({
    initialValues: {
      type: 'anime',
      query: '',
    },
    onSubmit: ({type, query}) =>
      navigate(`${process.env.PUBLIC_URL}/${type}/search?q=${query}`),
  })
  return (
    <FormReactBootstrap onSubmit={handleSubmit} className='my-1 my-lg-0'>
      <Row className='gx-2'>
        <Col xs='auto'>
          <FormReactBootstrap.Select
            onChange={handleChange}
            value={values.type}
            name='type'>
            {types.map((value, index) => (
              <option key={index} value={value.toLowerCase()}>
                {value}
              </option>
            ))}
          </FormReactBootstrap.Select>
        </Col>
        <Col>
          <FormReactBootstrap.Control
            onChange={handleChange}
            type='text'
            value={values.query}
            placeholder={`Search ${values.type}`}
            name='query'
            minLength={3}
            required
          />
        </Col>
        <Col xs='auto'>
          <Button type='submit' variant='outline-primary'>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </Col>
      </Row>
    </FormReactBootstrap>
  )
}
