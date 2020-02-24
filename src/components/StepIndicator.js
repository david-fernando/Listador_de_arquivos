import React from 'react';
import { Step } from 'semantic-ui-react';

function StepIndicator({step}) {
  return (
    <Step.Group attached='top' ordered>
        <Step active={step==='First'} completed={step==='Second'}>
            <Step.Content>
                <Step.Title>Primeiro passo</Step.Title>
            </Step.Content>
        </Step>
        <Step active={step==='Second'}>
            <Step.Content>
                <Step.Title>Segundo passo</Step.Title>
            </Step.Content>
        </Step>
    </Step.Group>
  );
}

export default StepIndicator;
