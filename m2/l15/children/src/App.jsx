import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Container from './components/Container'
import Row from './components/Row'
import Col from './components/Col'

function App() {


  return (
    <>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio doloribus harum facere ratione voluptatum saepe deserunt, eveniet est et nobis laudantium hic, possimus soluta consequatur laboriosam at a delectus.
          </Col>
          <Col sm={12} md={6} lg={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio doloribus harum facere ratione voluptatum saepe deserunt, eveniet est et nobis laudantium hic, possimus soluta consequatur laboriosam at a delectus.
          </Col>
          <Col sm={12} md={6} lg={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio doloribus harum facere ratione voluptatum saepe deserunt, eveniet est et nobis laudantium hic, possimus soluta consequatur laboriosam at a delectus.
          </Col>
          <Col sm={12} md={6} lg={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio doloribus harum facere ratione voluptatum saepe deserunt, eveniet est et nobis laudantium hic, possimus soluta consequatur laboriosam at a delectus.
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default App
