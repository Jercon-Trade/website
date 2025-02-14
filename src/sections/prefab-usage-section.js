/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import PostCard from 'components/post-card.js';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';
import PostThumb1 from 'assets/products/prefab-house/jercon-multi-story-prefab-house-landscape.jpg';
import PostThumb2 from 'assets/products/prefab-house/jercon-prefab-container-house-installation.jpg';
import PostThumb3 from 'assets/products/prefab-house/jercon-prefab-dormitory-rest-house.jpg';
import PostThumb4 from 'assets/products/prefab-house/jercon-prefab-office-store-spaces.jpg';
import PostThumb5 from 'assets/products/prefab-house/jercon-multi-prefab-office-units.jpg';
import PostThumb6 from 'assets/products/prefab-house/jercon-prefab-cozy-house-sofa-landscape.jpg';
import PostThumb7 from 'assets/products/prefab-house/jercon-prefab-house-internal.jpg';

// Container House
// Warehouse - OK
// Dormitories Barracks - OK
// Offices - OK 
// Single Floor Prefab House - OK
// Multi-story Prefab House - OK

const data = [
  {
    id: 1,
    imgSrc: PostThumb1,
    altText: 'Multi-story Prefab House',
    postLink: '#',
    title: 'Multi-story Prefab House',
    authorName: 'Jercon',
    date: 'Feb 14, 2025',
  },
  {
    id: 2,
    imgSrc: PostThumb2,
    altText: 'Single Floor Prefab House',
    postLink: '#',
    title: 'Single Floor Prefab House',
    authorName: 'Jercon',
    date: 'Feb 14, 2025',
  },
  {
    id: 3,
    imgSrc: PostThumb3,
    altText: 'Rest House / Staff House',
    postLink: '#',
    title: 'Rest House / Staff House',
    authorName: 'Jercon',
    date: 'Feb 14, 2025',
  },
  {
    id: 4,
    imgSrc: PostThumb4,
    altText: 'Office Space',
    postLink: '#',
    title: 'Office Space',
    authorName: 'Jercon',
    date: 'Feb 14, 2025',
  },
  {
    id: 5,
    imgSrc: PostThumb5,
    altText: 'Warehouse',
    postLink: '#',
    title: 'Warehouse',
    authorName: 'Jercon',
    date: 'Feb 14, 2025',
  },
  {
    id: 6,
    imgSrc: PostThumb6,
    altText: 'Cozy House',
    postLink: '#',
    title: 'Cozy House',
    authorName: 'Jercon',
    date: 'Feb 14, 2025',
  },
  {
    id: 7,
    imgSrc: PostThumb7,
    altText: 'Site Office',
    postLink: '#',
    title: 'Site Office',
    authorName: 'Jercon',
    date: 'Feb 14, 2025',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function PrefabUsageSection() {
  return (
    <section sx={{ variant: 'section.news' }} id="prefab-usages">
      <Container>
        <SectionHeader
          slogan="Usages"
          title="Our Prefab Container House Projects"
        />

        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass="test"
            draggable={true}
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {data.map((item) => (
              <PostCard
                key={item.id}
                src={item.imgSrc}
                alt={item.altText}
                postLink={item.postLink}
                title={item.title}
                authorName={item.authorName}
                date={item.date}
              />
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    '.carousel-container': {
      mx: -3,
    },
  },
};
