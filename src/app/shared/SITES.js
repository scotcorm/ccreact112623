import reactLakeImg from '../assets/img/minnowmaze.jpg';
import chromeRiverImg from '../assets/img/chrome-river.jpg';
import breadCrumbImg from '../assets/img/breadcrumb-trail.jpg';
import reduxWoodsImg from '../assets/img/redux-woods.jpg';

export const SITES = [
  {
    id: 0,
    name: 'Minnows in a Maze by Scott Cormier is licensed under a Creative Commons Attribution 4.0 International License.  Derivative of Maze Motif from the Cooper Hewitt Smithsonian Design Museum, licensed CC0, and Notropis louisianae from the National Museum of Natural History, also licensed CC0.  Changed “Maze Motif” by desaturating it and adding filter.',
    image: reactLakeImg,
    //elevation: (
    //   <p>
    //     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
    //       <img
    //         alt="Creative Commons License"
    //         style="border-width:0"
    //         src="https://i.creativecommons.org/l/by/4.0/88x31.png"
    //       />
    //     </a>
    //     <br />
    //     “Minnows in a Maze” by Scott Cormier is licensed under a{' '}
    //     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
    //       Creative Commons Attribution 4.0 International License
    //     </a>
    //     . Derivative of{' '}
    //     <a href="https://www.si.edu/object/maze-motif:chndm_1959-150-4?edan_q=maze&oa=1&edan_fq%5B0%5D=media_usage:CC0&destination=/search/collection-images&searchResults=1&id=chndm_1959-150-4">
    //       Maze Motif
    //     </a>{' '}
    //     from the Cooper Hewitt Smithsonian Design Museum, licensed CC0 and{' '}
    //     <a href="https://www.si.edu/object/notropis-louisianae:nmnhvz_5011981?page=3&edan_q=louisiana&edan_fq%5B0%5D=media_usage:CC0&oa=1&destination=/search/collection-images&searchResults=1&id=nmnhvz_5011981">
    //       Notropis louisianae
    //     </a>{' '}
    //     from the National Museum of Natural History, also licensed CC0. Changed
    //     “Maze Motif” by desaturating it and adding filter.
    //   </p>
    //),
    featured: false,
    description:
      'Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers.',
  },
  {
    id: 1,
    name: 'Chrome River Campground ',
    image: chromeRiverImg,
    elevation: 877,
    featured: false,
    description:
      'Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River.',
  },
  {
    id: 2,
    name: 'Breadcrumb Trail Campground',
    image: breadCrumbImg,
    elevation: 2901,
    featured: false,
    description:
      'Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground.',
  },
  {
    id: 3,
    name: 'Redux Woods Campground',
    image: reduxWoodsImg,
    elevation: 42,
    featured: true,
    description:
      "You'll never want to leave this hidden gem, deep within the lush Redux Woods.",
  },
];
