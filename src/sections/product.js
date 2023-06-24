/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Thermo Plastic Powder',
    title: 'Thermo Plastic Powder',
    text:
      'Calmax, Hi Brite, Thermaxx',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Glass Beads',
    title: 'Glass Beads, Road Primer, Calsomine',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'PVC Traffic Cone',
    title: 'PVC Traffic Cone, Traffic Barrier',
    text:
      'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Reflectorized Traffic Paint',
    title: 'Reflectorized Traffic Paint',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
  {
    id: 5,
    imgSrc: Support,
    altText: 'Thermoplastic Applicator, Kneading Machine',
    title: 'Thermoplastic Applicator, Kneading Machine',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
  {
    id: 6,
    imgSrc: Support,
    altText: 'Aluminum Road Signage, Informative Sign',
    title: 'Aluminum Road Signage, Informative Sign',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
  {
    id: 7,
    imgSrc: Support,
    altText: 'Galvanize Guardrail, Endrail, Splice Bolt',
    title: 'Galvanize Guardrail, Endrail, Splice Bolt',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
  {
    id: 8,
    imgSrc: Support,
    altText: 'Asphalt Sealant',
    title: 'Asphalt Sealant',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
  {
    id: 9,
    imgSrc: Support,
    altText: 'Asphalt SSI',
    title: 'Asphalt SSI. CSSI, MC70, 85/100',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
  {
    id: 10,
    imgSrc: Support,
    altText: 'Coldmix',
    title: 'Coldmix',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
  {
    id: 11,
    imgSrc: Support,
    altText: 'Concrete Epoxy Sealant',
    title: 'Concrete Epoxy Sealant (Crack and Scaling)',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
  {
    id: 12,
    imgSrc: Support,
    altText: 'Galvanize Gabion Wire / Mattresses',
    title: 'Galvanize Gabion Wire / Mattresses',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
  {
    id: 13,
    imgSrc: Support,
    altText: 'Filter Cloth (Geotextile)',
    title: 'Filter Cloth (Geotextile)',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
  {
    id: 14,
    imgSrc: Support,
    altText: 'Galvanize Steel Lamp Post',
    title: 'Galvanize Steel Lamp Post',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
  {
    id: 15,
    imgSrc: Support,
    altText: 'LED, Solar LED, Solar Power',
    title: 'LED, Solar LED, Solar Power',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
  {
    id: 16,
    imgSrc: Support,
    altText: 'Conveyor Roller',
    title: 'Conveyor Roller',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }} id="product">
      <Container>
        <SectionHeader
          slogan="Quality Products"
          title=""
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
