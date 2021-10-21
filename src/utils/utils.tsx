import React from 'react';
import { NetflixAppContextProps } from './interfaces';

export const defaultContextValue: NetflixAppContextProps = {
  showAddMovieModal: {
    handler: () => {},
    value: false,
  },
  movieDetail: {
    props: {
      title: '',
      imgUrl: '',
      genre: '',
      year: 0,
    },
    handler: () => {},
  },
  showDetails: {
    value: false,
    handler: () => {},
  },
  showEditMoviePopup: {
    value: false,
    handler: () => {},
  },
  closeAllModals: () => {},
};

export const Logo = ({ classes }: { classes?: string }): JSX.Element => (
  <svg
    className={classes}
    width="150"
    height="18"
    viewBox="0 0 150 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.6 5.86C8.94667 5.86 10.0267 6.26667 10.84 7.08C11.6667 7.89333 12.08 9.12 12.08 10.76V17H7.56V11.54C7.56 10.2867 7.11333 9.66 6.22 9.66C5.71333 9.66 5.3 9.84 4.98 10.2C4.67333 10.5467 4.52 11.1 4.52 11.86V17H1.49012e-08V6.06H4.3V7.14C4.72667 6.71333 5.22 6.39333 5.78 6.18C6.34 5.96667 6.94667 5.86 7.6 5.86ZM25.8783 11.52C25.8783 11.5867 25.8583 11.94 25.8183 12.58H18.2183C18.3783 12.9933 18.6449 13.3133 19.0183 13.54C19.3916 13.7533 19.8583 13.86 20.4183 13.86C20.8983 13.86 21.2983 13.8 21.6183 13.68C21.9516 13.56 22.3116 13.3533 22.6983 13.06L25.0583 15.44C23.9916 16.6133 22.3983 17.2 20.2783 17.2C18.9583 17.2 17.7983 16.96 16.7983 16.48C15.7983 15.9867 15.0249 15.3067 14.4783 14.44C13.9316 13.5733 13.6583 12.6 13.6583 11.52C13.6583 10.4267 13.9249 9.45333 14.4583 8.6C15.0049 7.73333 15.7449 7.06 16.6783 6.58C17.6249 6.1 18.6849 5.86 19.8583 5.86C20.9649 5.86 21.9716 6.08 22.8783 6.52C23.7983 6.96 24.5249 7.60667 25.0583 8.46C25.6049 9.31333 25.8783 10.3333 25.8783 11.52ZM19.8983 8.94C19.4316 8.94 19.0449 9.06667 18.7383 9.32C18.4316 9.57333 18.2316 9.93333 18.1383 10.4H21.6583C21.5649 9.94667 21.3649 9.59333 21.0583 9.34C20.7516 9.07333 20.3649 8.94 19.8983 8.94ZM35.3647 16.62C34.6847 17.0067 33.758 17.2 32.5847 17.2C31.0514 17.2 29.8714 16.8333 29.0447 16.1C28.218 15.3533 27.8047 14.24 27.8047 12.76V9.96H26.3047V6.66H27.8047V3.6H32.3247V6.66H34.5647V9.96H32.3247V12.72C32.3247 13.0533 32.4114 13.3133 32.5847 13.5C32.758 13.6867 32.9847 13.78 33.2647 13.78C33.6514 13.78 33.9914 13.68 34.2847 13.48L35.3647 16.62ZM41.1886 6.66H43.5686V9.96H41.3286V17H36.8086V9.96H35.3086V6.66H36.8086V6.6C36.8086 5.17333 37.2353 4.04667 38.0886 3.22C38.9419 2.38 40.1419 1.96 41.6886 1.96C42.1953 1.96 42.6886 2.00667 43.1686 2.1C43.6486 2.19333 44.0486 2.32667 44.3686 2.5L43.2886 5.64C42.9153 5.46667 42.5753 5.38 42.2686 5.38C41.9353 5.38 41.6686 5.48667 41.4686 5.7C41.2819 5.9 41.1886 6.21333 41.1886 6.64V6.66ZM44.8286 2.16H49.3486V17H44.8286V2.16ZM51.3477 6.06H55.8677V17H51.3477V6.06ZM53.6077 5.18C52.7943 5.18 52.1343 4.96667 51.6277 4.54C51.1343 4.1 50.8877 3.54667 50.8877 2.88C50.8877 2.21333 51.1343 1.66667 51.6277 1.24C52.1343 0.799999 52.7943 0.579999 53.6077 0.579999C54.4343 0.579999 55.0943 0.786666 55.5877 1.2C56.081 1.61333 56.3277 2.14667 56.3277 2.8C56.3277 3.49333 56.081 4.06667 55.5877 4.52C55.0943 4.96 54.4343 5.18 53.6077 5.18ZM64.7711 17L63.2711 14.66L61.5911 17H56.6911L60.8311 11.58L56.8111 6.06H61.9111L63.4711 8.38L65.1111 6.06H69.8511L65.8311 11.38L69.9511 17H64.7711ZM73.4217 8.18C73.7551 7.56667 74.2484 7.1 74.9017 6.78C75.5551 6.46 76.3484 6.3 77.2817 6.3V8.16C77.1751 8.14667 77.0284 8.14 76.8417 8.14C75.8017 8.14 74.9817 8.45333 74.3817 9.08C73.7951 9.69333 73.5017 10.5733 73.5017 11.72V17H71.5817V6.4H73.4217V8.18ZM84.0905 17.12C83.0371 17.12 82.0905 16.8867 81.2505 16.42C80.4105 15.9533 79.7505 15.3133 79.2705 14.5C78.8038 13.6733 78.5705 12.74 78.5705 11.7C78.5705 10.66 78.8038 9.73333 79.2705 8.92C79.7505 8.09333 80.4105 7.45333 81.2505 7C82.0905 6.53333 83.0371 6.3 84.0905 6.3C85.1438 6.3 86.0838 6.53333 86.9105 7C87.7505 7.45333 88.4038 8.09333 88.8705 8.92C89.3505 9.73333 89.5905 10.66 89.5905 11.7C89.5905 12.74 89.3505 13.6733 88.8705 14.5C88.4038 15.3133 87.7505 15.9533 86.9105 16.42C86.0838 16.8867 85.1438 17.12 84.0905 17.12ZM84.0905 15.44C84.7705 15.44 85.3771 15.2867 85.9105 14.98C86.4571 14.66 86.8838 14.22 87.1905 13.66C87.4971 13.0867 87.6505 12.4333 87.6505 11.7C87.6505 10.9667 87.4971 10.32 87.1905 9.76C86.8838 9.18667 86.4571 8.74667 85.9105 8.44C85.3771 8.13333 84.7705 7.98 84.0905 7.98C83.4105 7.98 82.7971 8.13333 82.2505 8.44C81.7171 8.74667 81.2905 9.18667 80.9705 9.76C80.6638 10.32 80.5105 10.9667 80.5105 11.7C80.5105 12.4333 80.6638 13.0867 80.9705 13.66C81.2905 14.22 81.7171 14.66 82.2505 14.98C82.7971 15.2867 83.4105 15.44 84.0905 15.44ZM102.126 6.4V17H100.306V15.4C99.9191 15.9467 99.4058 16.3733 98.7658 16.68C98.1391 16.9733 97.4524 17.12 96.7058 17.12C95.2924 17.12 94.1791 16.7333 93.3658 15.96C92.5524 15.1733 92.1458 14.02 92.1458 12.5V6.4H94.0658V12.28C94.0658 13.3067 94.3124 14.0867 94.8058 14.62C95.2991 15.14 96.0058 15.4 96.9258 15.4C97.9391 15.4 98.7391 15.0933 99.3258 14.48C99.9124 13.8667 100.206 13 100.206 11.88V6.4H102.126ZM105.781 2.16H107.701V17H105.781V2.16ZM120.947 11.76C120.947 11.9067 120.934 12.1 120.907 12.34H112.307C112.427 13.2733 112.834 14.0267 113.527 14.6C114.234 15.16 115.107 15.44 116.147 15.44C117.414 15.44 118.434 15.0133 119.207 14.16L120.267 15.4C119.787 15.96 119.187 16.3867 118.467 16.68C117.76 16.9733 116.967 17.12 116.087 17.12C114.967 17.12 113.974 16.8933 113.107 16.44C112.24 15.9733 111.567 15.3267 111.087 14.5C110.62 13.6733 110.387 12.74 110.387 11.7C110.387 10.6733 110.614 9.74667 111.067 8.92C111.534 8.09333 112.167 7.45333 112.967 7C113.78 6.53333 114.694 6.3 115.707 6.3C116.72 6.3 117.62 6.53333 118.407 7C119.207 7.45333 119.827 8.09333 120.267 8.92C120.72 9.74667 120.947 10.6933 120.947 11.76ZM115.707 7.92C114.787 7.92 114.014 8.2 113.387 8.76C112.774 9.32 112.414 10.0533 112.307 10.96H119.107C119 10.0667 118.634 9.34 118.007 8.78C117.394 8.20667 116.627 7.92 115.707 7.92ZM129.573 16.38C129.293 16.62 128.946 16.8067 128.533 16.94C128.12 17.06 127.693 17.12 127.253 17.12C126.186 17.12 125.36 16.8333 124.773 16.26C124.186 15.6867 123.893 14.8667 123.893 13.8V7.98H122.093V6.4H123.893V4.08H125.813V6.4H128.853V7.98H125.813V13.72C125.813 14.2933 125.953 14.7333 126.233 15.04C126.526 15.3467 126.94 15.5 127.473 15.5C128.06 15.5 128.56 15.3333 128.973 15L129.573 16.38ZM137.6 16.38C137.32 16.62 136.974 16.8067 136.56 16.94C136.147 17.06 135.72 17.12 135.28 17.12C134.214 17.12 133.387 16.8333 132.8 16.26C132.214 15.6867 131.92 14.8667 131.92 13.8V7.98H130.12V6.4H131.92V4.08H133.84V6.4H136.88V7.98H133.84V13.72C133.84 14.2933 133.98 14.7333 134.26 15.04C134.554 15.3467 134.967 15.5 135.5 15.5C136.087 15.5 136.587 15.3333 137 15L137.6 16.38ZM149.15 11.76C149.15 11.9067 149.137 12.1 149.11 12.34H140.51C140.63 13.2733 141.037 14.0267 141.73 14.6C142.437 15.16 143.31 15.44 144.35 15.44C145.617 15.44 146.637 15.0133 147.41 14.16L148.47 15.4C147.99 15.96 147.39 16.3867 146.67 16.68C145.963 16.9733 145.17 17.12 144.29 17.12C143.17 17.12 142.177 16.8933 141.31 16.44C140.443 15.9733 139.77 15.3267 139.29 14.5C138.823 13.6733 138.59 12.74 138.59 11.7C138.59 10.6733 138.817 9.74667 139.27 8.92C139.737 8.09333 140.37 7.45333 141.17 7C141.983 6.53333 142.897 6.3 143.91 6.3C144.923 6.3 145.823 6.53333 146.61 7C147.41 7.45333 148.03 8.09333 148.47 8.92C148.923 9.74667 149.15 10.6933 149.15 11.76ZM143.91 7.92C142.99 7.92 142.217 8.2 141.59 8.76C140.977 9.32 140.617 10.0533 140.51 10.96H147.31C147.203 10.0667 146.837 9.34 146.21 8.78C145.597 8.20667 144.83 7.92 143.91 7.92Z"
      fill="#F65261"
    />
  </svg>
);

export const SearchButton = ({ clickHandler }: { clickHandler?: () => void }) => (
  <svg
    onClick={clickHandler}
    width="29"
    height="30"
    viewBox="0 0 29 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="18.5" cy="10.5" r="9.5" stroke="#F65261" strokeWidth="2" />
    <path
      d="M10.5 19.5L1.5 28.5"
      stroke="#F65261"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>
);

export const CloseIcon = ({
  classes,
  clickHandler,
}: {
  classes: string;
  clickHandler?: () => void;
}): JSX.Element => (
  <svg
    onClick={clickHandler}
    className={classes}
    width="23"
    height="24"
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.47099 2.15426L21.529 22.2122"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M21.529 2.15426L1.47103 22.2122"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

interface ToolsIconProps {
  (props: { classes: string; clickHandler?: () => void }): JSX.Element;
}

export const ToolsIcon: ToolsIconProps = ({
  classes,
  clickHandler,
}): JSX.Element => (
  <svg
    className={classes}
    onClick={clickHandler}
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <circle cx="22" cy="22" r="18" fill="#2A202D" />
    </g>
    <circle cx="22" cy="15" r="2" fill="white" />
    <circle cx="22" cy="22.5" r="2" fill="white" />
    <circle cx="22" cy="30" r="2" fill="white" />
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="44"
        height="44"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196596 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

//mock data
export const movies = [
  {
    src: 'https://cdna.artstation.com/p/assets/images/images/041/762/826/large/lera-pi-lerapi-stream-commission-oc-arkilia-1.jpg?1632622745',
    title: 'Pulp Fiction',
    year: 2004,
    genre: 'Action & Adventure',
  },
  {
    src: 'https://cdna.artstation.com/p/assets/images/images/041/199/150/large/lera-pi-lerapi-stream-commission-oc-mint2.jpg?1631035037',
    title: 'Bohemian Rhapsody',
    year: 2003,
    genre: 'Drama, Biography, Music',
  },
  {
    src: 'https://cdna.artstation.com/p/assets/images/images/040/790/336/large/lera-pi-lerapi-oc-tyra-patreon-poll-winner1.jpg?1629889007',
    title: 'Kill Bill: Vol 2',
    year: 1994,
    genre: 'Oscar winning Movie',
  },
  {
    src: 'https://cdnb.artstation.com/p/assets/images/images/040/573/949/large/lera-pi-lerapi-stream-commission-oc-arkilia.jpg?1629262158',
    title: 'Avengers: War of Infinity',
    year: 2004,
    genre: 'Action & Adventure',
  },
  {
    src: 'https://cdna.artstation.com/p/assets/images/images/040/530/488/large/lera-pi-lerapi-stream-commission-oc-yae-vel1.jpg?1629140099',
    title: 'Inception',
    year: 2003,
    genre: 'Action & Adventure',
  },
  {
    src: 'https://cdnb.artstation.com/p/assets/images/images/040/003/899/large/lera-pi-lerapi-azula1.jpg?1627567539',
    title: 'Reservoir dogs',
    year: 1994,
    genre: 'Oscar winning Movie',
  },
  {
    src: 'https://cdnb.artstation.com/p/assets/images/images/038/274/789/large/lera-pi-lerapi-make-up-kiseira-ych1.jpg?1622645012',
    title: 'Tom & Jerry',
    year: 1990,
    genre: 'Cartoon',
  },
];

export const sortOptions = ['Title', 'Year', 'Genre'];
export const genres = ['all', 'Documentary', 'comedy', 'horror', 'crime'];
export const actions = {
  GET_DATA: 'GET_DATA',
};
