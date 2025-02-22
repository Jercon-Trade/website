/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import PostCard from 'components/post-card.js';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';
import PostThumb1 from 'assets/products/flooring/municipality-echague-gym-isabela.png';
import PostThumb2 from 'assets/products/flooring/municipality-allacapan-playground-cagayan.png';
import PostThumb3 from 'assets/products/flooring/municipality-allacapan-court-cagayan.png';
import PostThumb4 from 'assets/products/flooring/penablanca-gym-cagayan.png';
import PostThumb5 from 'assets/products/flooring/private-residence-court.png';
import PostThumb6 from 'assets/products/flooring/bball-goal-allacapan-cagayan.png';
import PostThumb7 from 'assets/products/flooring/municipality-echague-lighting-box-isabela.png';
import PostThumb8 from 'assets/products/flooring/nueva-ecija-coliseum-bball-goal.png';
import PostThumb9 from 'assets/products/flooring/quibal-gymnasium-finished-penablanca-cagayan.png';

const data = [
  {
    id: 1,
    imgSrc: PostThumb1,
    altText: 'Gym at Municipality of Echague, Isabela',
    postLink: '#',
    title: 'Gym at Municipality of Echague, Isabela',
    authorName: 'Jercon',
    date: 'Feb 22, 2025',
  },
  {
    id: 2,
    imgSrc: PostThumb2,
    altText: 'Playground at Municipality of Allacapan, Cagayan',
    postLink: '#',
    title: 'Playground at Municipality of Allacapan, Cagayan',
    authorName: 'Jercon',
    date: 'Feb 22, 2025',
  },
  {
    id: 3,
    imgSrc: PostThumb3,
    altText: 'Basketball Court at Municipality of Allacapan, Cagayan',
    postLink: '#',
    title: 'Basketball Court at Municipality of Allacapan, Cagayan',
    authorName: 'Jercon',
    date: 'Feb 22, 2025',
  },
  {
    id: 4,
    imgSrc: PostThumb4,
    altText: 'Gym Improvement at Peñablanca, Cagayan',
    postLink: '#',
    title: 'Gym Improvement at Peñablanca, Cagayan',
    authorName: 'Jercon',
    date: 'Feb 22, 2025',
  },
  {
    id: 5,
    imgSrc: PostThumb5,
    altText: 'Basketball Court at a private residence',
    postLink: '#',
    title: 'Basketball Court at a private residence',
    authorName: 'Jercon',
    date: 'Feb 22, 2025',
  },
  {
    id: 6,
    imgSrc: PostThumb6,
    altText: 'Basketball Goal at Allacapan, Cagayan',
    postLink: '#',
    title: 'Basketball Goal at Allacapan, Cagayan',
    authorName: 'Jercon',
    date: 'Feb 22, 2025',
  },
  {
    id: 7,
    imgSrc: PostThumb7,
    altText: 'Lighting Box at Municipality of Echague, Isabela',
    postLink: '#',
    title: 'Lighting Box at Municipality of Echague, Isabela',
    authorName: 'Jercon',
    date: 'Feb 22, 2025',
  },
  {
    id: 8,
    imgSrc: PostThumb8,
    altText: 'Basketball Goal at Nueva Ecija Coliseum',
    postLink: '#',
    title: 'Basketball Goal at Nueva Ecija Coliseum',
    authorName: 'Jercon',
    date: 'Feb 22, 2025',
  },
  {
    id: 9,
    imgSrc: PostThumb9,
    altText: 'Quibal Gymnasium at Peñablanca, Cagayan',
    postLink: '#',
    title: 'Quibal Gymnasium at Peñablanca, Cagayan',
    authorName: 'Jercon',
    date: 'Feb 22, 2025',
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

export default function FlooringProjectsSection() {
  return (
    <section sx={{ variant: 'section.news' }} id="prefab-usages">
      <Container>
        <SectionHeader
          slogan="Projects"
          title="Our Sports Facilities and Equipment Projects"
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
