const recipes = [
  {
    id: 1,
    title: 'Creamy Pasta',
    category: 'Dinner',
    rating: 4.8,
    prepTime: '10 mins',
    cookTime: '15 mins',
    servings: 2,
    image:
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800',

    ingredients: [
      '200g pasta',
      '1 cup cream',
      '2 garlic cloves',
      'Parmesan cheese',
      'Salt and pepper',
    ],

    instructions: [
      'Boil the pasta until tender.',
      'Sauté garlic in a pan.',
      'Add cream and simmer for 5 minutes.',
      'Mix in the pasta and Parmesan cheese.',
      'Serve hot with extra cheese on top.',
    ],

    reviews: [
      { user: 'Mary', comment: 'Very creamy and delicious!' },
      { user: 'John', comment: 'Easy recipe for beginners.' },
    ],
  },
];

export default recipes;