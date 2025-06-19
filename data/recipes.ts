import { Recipe } from '@/types/recipe';

export const recipes: Recipe[] = [
  {
    id: 'classic-shepherds-pie',
    title: "The Best Classic Shepherd's Pie",
    description: "Ground beef (or lamb) with vegetables in a rich gravy, topped with cheesy mashed potatoes, and baked until golden brown.",
    imagePath: '/images/classic-shepherds-pie.jpg',
    prepTime: 20,
    cookTime: 50,
    servings: 6,
    ingredients: [
      { name: 'olive oil', quantity: '2', unit: 'tablespoons' },
      { name: 'yellow onion, chopped', quantity: '1', unit: 'cup' },
      { name: '90% lean ground beef or ground lamb', quantity: '1', unit: 'lb' },
      { name: 'dried parsley leaves', quantity: '2', unit: 'teaspoons' },
      { name: 'dried rosemary leaves', quantity: '1', unit: 'teaspoon' },
      { name: 'dried thyme leaves', quantity: '1', unit: 'teaspoon' },
      { name: 'salt', quantity: '1/2', unit: 'teaspoon' },
      { name: 'ground black pepper', quantity: '1/2', unit: 'teaspoon' },
      { name: 'Worcestershire sauce', quantity: '1', unit: 'tablespoon' },
      { name: 'garlic cloves, minced', quantity: '2' },
      { name: 'all purpose flour', quantity: '2', unit: 'tablespoons' },
      { name: 'tomato paste', quantity: '2', unit: 'tablespoons' },
      { name: 'beef broth', quantity: '1', unit: 'cup' },
      { name: 'frozen mixed peas & carrots', quantity: '1', unit: 'cup' },
      { name: 'frozen corn kernels', quantity: '1/2', unit: 'cup' },
      { name: 'russet potatoes, peeled and cut into 1 inch cubes', quantity: '1 1/2 - 2', unit: 'lb' },
      { name: 'unsalted butter', quantity: '8', unit: 'tablespoons' },
      { name: 'half & half', quantity: '1/3', unit: 'cup' },
      { name: 'garlic powder', quantity: '1/2', unit: 'teaspoon' },
      { name: 'parmesan cheese', quantity: '1/4', unit: 'cup' }
    ],
    instructions: [
      'Add the oil to a large skillet and place it over medium-high heat for 2 minutes. Add the onions. Cook 5 minutes, stirring occasionally.',
      'Add the ground beef (or ground lamb) to the skillet and break it apart with a wooden spoon. Add the parsley, rosemary, thyme, salt, and pepper. Stir well. Cook for 6-8 minutes, until the meat is browned, stirring occasionally.',
      'Add the Worcestershire sauce and garlic. Stir to combine. Cook for 1 minute.',
      'Add the flour and tomato paste. Stir until well incorporated and no clumps of tomato paste remain.',
      'Add the broth, frozen peas and carrots, and frozen corn. Bring the liquid to a boil then reduce to simmer. Simmer for 5 minutes, stirring occasionally.',
      'Set the meat mixture aside. Preheat oven to 400 degrees F.',
      'Place the potatoes in a large pot. Cover the potatoes with water. Bring the water to a boil. Reduce to a simmer. Cook until potatoes are fork tender, 10-15 minutes.',
      'Drain the potatoes in a colander. Return the potatoes to the hot pot. Let the potatoes rest in the hot pot for 1 minute to evaporate any remaining liquid.',
      'Add butter, half & half, garlic powder, salt, and pepper. Mash the potatoes and stir until all the ingredients are mixed together.',
      'Add the parmesan cheese to the potatoes. Stir until well combined.',
      'Pour the meat mixture into a 9x9 (or 7x11) inch baking dish. Spread it out into an even layer. Spoon the mashed potatoes on top of the meat. Carefully spread into an even layer.',
      'If the baking dish looks very full, place it on a rimmed baking sheet so that the filling doesn\'t bubble over into your oven. Bake uncovered for 25-30 minutes.',
      'Cool for 15 minutes before serving.'
    ]
  },
  {
    id: 'gourmet-shepherds-pie',
    title: "Shepherd's Pie with Pork",
    description: "A delicious twist on the classic recipe using ground pork with herbs and vegetables, topped with fluffy mashed potatoes.",
    imagePath: '/images/gourmet-shepherds-pie.jpg',
    prepTime: 30,
    cookTime: 45,
    servings: 6,
    ingredients: [
      { name: 'ground pork', quantity: '1', unit: 'lb' },
      { name: 'yellow onion, diced', quantity: '1', unit: 'medium' },
      { name: 'carrots, diced', quantity: '2', unit: 'large' },
      { name: 'celery stalks, diced', quantity: '2' },
      { name: 'garlic cloves, minced', quantity: '3' },
      { name: 'tomato paste', quantity: '2', unit: 'tablespoons' },
      { name: 'fresh thyme', quantity: '1', unit: 'tablespoon' },
      { name: 'fresh sage, chopped', quantity: '1', unit: 'tablespoon' },
      { name: 'Worcestershire sauce', quantity: '2', unit: 'tablespoons' },
      { name: 'chicken broth', quantity: '1', unit: 'cup' },
      { name: 'frozen peas', quantity: '1', unit: 'cup' },
      { name: 'all-purpose flour', quantity: '2', unit: 'tablespoons' },
      { name: 'Yukon Gold potatoes, peeled and cubed', quantity: '2', unit: 'lbs' },
      { name: 'butter', quantity: '4', unit: 'tablespoons' },
      { name: 'milk', quantity: '1/2', unit: 'cup' },
      { name: 'sour cream', quantity: '1/4', unit: 'cup' },
      { name: 'salt', quantity: 'to taste' },
      { name: 'black pepper', quantity: 'to taste' },
      { name: 'olive oil', quantity: '2', unit: 'tablespoons' }
    ],
    instructions: [
      'Place potatoes in a large pot of salted water. Bring to a boil and cook for 15-20 minutes until fork-tender.',
      'Heat olive oil in a large skillet over medium-high heat. Add ground pork and cook, breaking it up, until browned and cooked through, about 8-10 minutes.',
      'Add diced onion, carrots, and celery to the skillet. Cook for 5-7 minutes until vegetables are softened.',
      'Add minced garlic, thyme, and sage. Cook for 1 minute until fragrant.',
      'Sprinkle flour over the mixture and stir to combine. Cook for 1 minute.',
      'Add tomato paste and stir well. Pour in Worcestershire sauce and chicken broth, stirring to combine.',
      'Bring to a simmer and cook for 10-15 minutes until the mixture thickens. Add frozen peas and cook for 2 minutes more. Season with salt and pepper.',
      'Meanwhile, drain the potatoes and return to the pot. Add butter, milk, and sour cream. Mash until smooth and creamy. Season with salt and pepper.',
      'Preheat oven to 400°F (200°C).',
      'Transfer the pork mixture to a 9x13 inch baking dish. Spread the mashed potatoes evenly over the top.',
      'Use a fork to create ridges on the potato surface for extra browning.',
      'Bake for 25-30 minutes until the top is golden brown and the filling is bubbling.',
      'Let rest for 10 minutes before serving.'
    ]
  },
  {
    id: 'vegetarian-shepherds-pie',
    title: "Mushroom Shepherd's Pie with Brown Butter Potatoes",
    description: "Umami-rich and packed with flavor, this mushroom mixture is layered with lots of veggies and topped off with the most delicious creamy brown butter mashed potatoes.",
    imagePath: '/images/vegetarian-shepherds-pie.jpg',
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    ingredients: [
      { name: 'potatoes, peeled and cut into large cubes', quantity: '2', unit: 'lb' },
      { name: 'butter', quantity: '1/3', unit: 'cup' },
      { name: 'fresh thyme leaves', quantity: '1', unit: 'teaspoon' },
      { name: 'garlic, finely minced', quantity: '1', unit: 'clove' },
      { name: 'olive oil', quantity: '1', unit: 'tablespoon' },
      { name: 'large onion, minced', quantity: '1' },
      { name: 'mushrooms, halved or quartered', quantity: '1 1/2', unit: 'lb' },
      { name: 'ground meat (see notes)', quantity: '1 1/2', unit: 'lb' },
      { name: 'large carrots, diced', quantity: '2' },
      { name: 'garlic cloves, minced', quantity: '4' },
      { name: 'tomato paste', quantity: '1/4', unit: 'cup' },
      { name: 'Worcestershire sauce', quantity: '2', unit: 'tablespoons' },
      { name: 'salt and pepper', quantity: 'to taste' }
    ],
    instructions: [
      'Put the potatoes in a large pot, cover them with water, and bring to a boil. Boil until the potatoes are soft, about 15 minutes. Drain them through a colander, add them back into the pan, and mash well.',
      'Make the brown butter while the potatoes are boiling. Melt the butter (or ghee) over medium heat. Keep it on the heat until it is fragrant and many brown specks appear. Remove from the heat and stir in the thyme and garlic. Pour the brown butter over the mashed potatoes and stir through. Salt the potatoes well.',
      'While the potatoes are cooking, begin the shepherd\'s pie. Preheat your oven to 350 degrees Fahrenheit. Heat the oil in a large pan over medium-high heat. Add the onion and cook for 5 minutes. Add the mushrooms and cook until they have released their liquid and are starting to brown, about 10 minutes. Add the ground meat (or veggie meat) and carrots and cook until the meat is no longer pink. Add the garlic, tomato paste, and Worcestershire sauce and cook for 2-3 minutes. Season to taste with sea salt and pepper.',
      'Transfer the mushroom shepherd\'s pie to an ovenproof baking dish. Top with the brown butter mashed potatoes and spread them evenly over the top. Bake in the oven for 30 minutes, or until it is hot and starting to bubble at the sides.'
    ]
  }
];

export default recipes; 