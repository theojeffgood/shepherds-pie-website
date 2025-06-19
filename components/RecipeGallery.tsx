import { Recipe } from '@/types/recipe';
import RecipeImage from './RecipeImage';

interface RecipeGalleryProps {
  recipes: Recipe[];
  // eslint-disable-next-line no-unused-vars
  onSelectRecipe: (id: string) => void;
  selectedRecipeId?: string | null;
}

export default function RecipeGallery({ recipes, onSelectRecipe, selectedRecipeId }: RecipeGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 group">
      {recipes.map((recipe, index) => (
        <article 
          key={recipe.id}
          className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 
            ${selectedRecipeId === recipe.id 
              ? 'shadow-2xl drop-shadow-2xl bg-amber-50 group-hover:opacity-100' 
              : 'shadow-md hover:shadow-2xl hover:drop-shadow-2xl bg-white group-hover:opacity-50 hover:!opacity-100 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-offset-2'
            }
            ${selectedRecipeId && selectedRecipeId !== recipe.id ? 'opacity-50' : ''}
            active:shadow-lg`}
          onClick={() => onSelectRecipe(recipe.id)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectRecipe(recipe.id);
            }
          }}
          tabIndex={0}
          role="button"
          aria-label={`${selectedRecipeId === recipe.id ? 'Close' : 'Select'} ${recipe.title} recipe details`}
          aria-pressed={selectedRecipeId === recipe.id}
        >
          {/* Image container with improved aspect ratio and loading */}
          <div className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] relative overflow-hidden bg-gray-200">
            <RecipeImage
              src={recipe.imagePath}
              alt={`${recipe.title} - ${recipe.description}`}
              priority={index === 0}
              className="transition-all duration-500"
            />
            
            {/* Selection indicator overlay */}
            {selectedRecipeId === recipe.id && (
              <div className="absolute top-3 right-3 bg-amber-400 text-amber-900 rounded-full p-2 shadow-lg">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
          
          {/* Content overlay with improved mobile layout */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 md:p-6">
            <h2 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 leading-tight">
              {recipe.title}
            </h2>
            
            {/* Recipe metadata with icons - improved for mobile */}
            <div className="flex items-center justify-between text-xs md:text-sm text-gray-300">
              <div className="flex items-center gap-3 md:gap-4">
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{recipe.prepTime + recipe.cookTime} mins</span>
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">{recipe.servings} servings</span>
                </span>
              </div>
              
              {/* Action hint for mobile */}
              <div className="md:hidden">
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {selectedRecipeId === recipe.id ? 'Tap to close' : 'Tap to view'}
                </span>
              </div>
            </div>
          </div>
          
          {/* Enhanced focus indicator */}
          <div className="absolute inset-0 rounded-xl ring-0 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-offset-2 pointer-events-none transition-all duration-200" />
        </article>
      ))}
      
      {/* Half Lemons Promotional Card */}
      <article 
        className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 shadow-md hover:shadow-2xl hover:drop-shadow-2xl bg-black group-hover:opacity-50 hover:!opacity-100 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-offset-2 ${selectedRecipeId ? 'opacity-50' : ''}`}
        onClick={() => window.open('#', '_blank')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.open('#', '_blank');
          }
        }}
        tabIndex={0}
        role="button"
        aria-label="Check out more Shepherd's pie recipes on Half Lemons app"
      >
        {/* Black background card content */}
        <div className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] relative bg-black flex flex-col justify-between p-4 md:p-6">
          {/* Main text content */}
          <div className="flex-1 flex items-center justify-center">
            <h2 className="text-white text-lg md:text-xl lg:text-2xl font-bold text-center leading-tight">
              Check out more Shepherd&apos;s pie recipes on Half Lemons
            </h2>
          </div>
          
          {/* Bottom call-to-action */}
          <div className="flex items-center justify-between mt-4 px-2">
            <span className="text-yellow-400 text-xl md:text-2xl lg:text-3xl font-bold">
              Let&apos;s go
            </span>
            
            {/* Extended arrow line */}
            <div className="flex-1 flex items-center ml-4">
              <div className="w-full h-0.5 bg-yellow-400 relative max-w-[85%]">
                {/* Arrow head */}
                <div className="absolute -right-2 -top-0.5 w-0 h-0 border-l-[8px] border-l-yellow-400 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced focus indicator */}
        <div className="absolute inset-0 rounded-xl ring-0 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-offset-2 pointer-events-none transition-all duration-200" />
      </article>
    </div>
  );
} 