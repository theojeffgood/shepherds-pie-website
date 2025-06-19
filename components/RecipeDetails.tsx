import { Recipe } from '@/types/recipe';
import { useEffect, useRef, useState } from 'react';
import IngredientsList from './IngredientsList';
import CookingInstructions from './CookingInstructions';
import RecipeMetadata from './RecipeMetadata';

interface RecipeDetailsProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose?: () => void;
}

export default function RecipeDetails({ recipe, isOpen, onClose }: RecipeDetailsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && recipe) {
      // Opening animation
      setIsVisible(true);
      
      // Calculate height after content is rendered
      const timer = setTimeout(() => {
        if (contentRef.current) {
          const scrollHeight = contentRef.current.scrollHeight;
          setHeight(scrollHeight);
        }
      }, 10); // Small delay to ensure content is rendered
      
      return () => clearTimeout(timer);
    } else {
      // Closing animation
      setHeight(0);
      
      // Hide content after animation completes
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, recipe]);

  // Don't render anything if there's no recipe and it's not visible
  if (!recipe && !isVisible) return null;
  
  return (
    <div 
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ height: `${height}px` }}
    >
      {recipe && (
        <div 
          ref={contentRef}
          className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8 mt-6" 
          role="region" 
          aria-label="Recipe details"
        >
          {/* Recipe header - mobile optimized */}
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {recipe.title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              {recipe.description}
            </p>
          </div>

          {/* Recipe metadata - using dedicated component */}
          <RecipeMetadata 
            prepTime={recipe.prepTime}
            cookTime={recipe.cookTime}
            servings={recipe.servings}
          />
          
          {/* Content grid - mobile-first responsive layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Ingredients section - stacked on mobile, side-by-side on desktop */}
            <div className="lg:order-1">
              <IngredientsList ingredients={recipe.ingredients} />
            </div>
            
            {/* Instructions section - using dedicated component */}
            <div className="lg:order-2">
              <CookingInstructions instructions={recipe.instructions} />
            </div>
          </div>
          
          {/* Close button for mobile - with proper touch target */}
          <div className="mt-6 pt-4 border-t border-gray-200 md:hidden">
            <button
              onClick={() => onClose?.()}
              className="w-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 min-h-[44px] text-base"
              aria-label="Close recipe details"
            >
              Close Recipe Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 