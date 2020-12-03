import Head from '../atom/Head'
import StepIndicator from '../atom/StepIndicator'

function Header() {
  return (
    <Head>
      <StepIndicator>Primeiro passo</StepIndicator>
      <StepIndicator secondstep={true}>Segundo passo</StepIndicator>
    </Head>
  );
}

export default Header;