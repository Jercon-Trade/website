/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Subscription,
    altText: 'Sewage Treatment Plant',
    title: 'Sewage Treatment Plant',
    text:
      'We build facilities for removing wastewater contaminants.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Plumbing Services',
    title: 'Plumbing Services',
    text:
      'We provide end-to-end water supply services to a building / home.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Prefab Container Houses',
    title: 'Prefab Container Houses',
    text:
      'We supply and install prefabricated container houses.',
  },
  {
    id: 4,
    imgSrc: Performance,
    altText: 'Motor Control Panels',
    title: 'Motor Control Panels',
    text:
      'We cater motor control panel products and services.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="service">
      <Container>
        <SectionHeader
          slogan="Our Services"
          title="Services to create value"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
