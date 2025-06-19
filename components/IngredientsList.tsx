import { Ingredient } from '@/types/recipe';

interface IngredientsListProps {
  ingredients: Ingredient[];
}

export default function IngredientsList({ ingredients }: IngredientsListProps) {
  return (
    <div>
      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
        <span className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
          📋
        </span>
        Ingredients
      </h3>
      <ul className="space-y-3">
        {ingredients.map((ingredient, index) => (
          <li 
            key={index} 
            className="flex items-start py-2 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200 rounded-md px-2 -mx-2"
          >
            <span className="bg-amber-50 text-amber-800 font-semibold rounded px-2 py-1 text-xs md:text-sm mr-3 min-w-0 flex-shrink-0">
              {ingredient.quantity} {ingredient.unit || ''}
            </span>
            <span className="text-gray-800 text-sm md:text-base leading-relaxed">
              {ingredient.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
} 