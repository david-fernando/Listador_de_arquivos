import Container from '../atom/Container'
import Header from '../molecule/Header'
import Form from '../molecule/Form'

function Content() {
  return (
    <Container>
      <Header/>
      <Form />
    </Container>
  );
}

export default Content;