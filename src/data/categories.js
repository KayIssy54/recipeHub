import recipes from './recipes';

const categoryData = [
  {
    name: 'Breakfast',
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600',
  },
  {
    name: 'Lunch',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600',
  },
  {
    name: 'Dinner',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?w=600',
  },
  {
    name: 'Dessert',
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600',
  },
  {
    name: 'Healthy',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600',
  },
  {
    name: 'Snacks',
    image:
      'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=600',
  },
];

const categories = categoryData.map((category, index) => ({
  id: index + 1,
  name: category.name,
  image: category.image,

  // Count recipes that belong to this category
  count: recipes.filter(
    (recipe) => recipe.category === category.name
  ).length,
}));

export default categories;