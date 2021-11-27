import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding >
    <LeftSection>
      <SectionTitle main center>
        Welcome
      </SectionTitle>
      <SectionText>
        To my software developer portfolio
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/FURIAL-LTD?tab=repositories.com'}>
        View repos
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;