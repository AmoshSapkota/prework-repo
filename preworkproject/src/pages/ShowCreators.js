import React from 'react';
import card from './components/card';

const ShowCreators = () => {
  const creators = [
    {
      id: 1,
      name: 'Mr. Beast',
      url: 'https://www.youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA',
      description: 'This is Mr. Beast.',
      imageURL: 'https://www.instagram.com/mrbeast/?hl=en'
    },
    {
      id: 2,
      name: 'Donald Trump',
      url: 'https://www.donaldjtrump.com/',
      description: 'This is Donald Trump.',
      imageURL: 'https://truthsocial.com/@realDonaldTrump'
    },
    {
      id: 3,
      name: 'Barak Obama',
      url: 'https://barackobama.com/',
      description: 'This is Barak Obama.',
      imageURL: 'https://www.instagram.com/barackobama/?hl=en'
    },
    {
      id: 4,
      name: 'Kamala Harris',
      url: 'https://kamalaharris.com/',
      description: 'This is Kamala Harris.',
      imageURL: 'https://www.instagram.com/kamalaharris/?hl=en'
    },
    {
      id: 5,
      name: 'Narendra Modi',
      url: 'https://www.narendramodi.in/',
      description: 'This is Narendra Modi',
      imageURL: 'https://www.instagram.com/narendramodi/?hl=en'
    }
  ];

  return (
    <div>
      {creators.map((creator) => (
        <Card key={creator.id} {...creator} />
      ))}
    </div>
  );
};

export default ShowCreators;
