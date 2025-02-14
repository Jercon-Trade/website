import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import PrefabUsageSection from 'sections/prefab-usage-section';
import PrefabSection from 'sections/prefab-section';
import ServiceSection from '../sections/service-section';
import Product from '../sections/product';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import BlogSection from '../sections/blog-section';
import Subscribe from '../sections/subscribe';
import Contact from 'sections/contact';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO 
              title="Jercon Trade Construction Development Corporation"
              author="Jercon Trade Construction Development Corporation"
              description="Official website of Jercon Trade Construction Development Corporation" 
          />
          <Banner />
          <PrefabSection />
          <PrefabUsageSection />
          <KeyFeature />
          {/* <ServiceSection /> */}
          <Product />
          {/* <CoreFeature /> */}
          {/* <WorkFlow /> */}
          {/* <Package /> */}
          {/* <TeamSection /> */}
          {/* <TestimonialCard /> */}
          <BlogSection />
          {/* <Subscribe /> */}
          <Contact/>
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
