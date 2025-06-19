'use client';

import { useState } from 'react';
import Image from 'next/image';
import { recipes } from '@/data/recipes';
import RecipeGallery from '@/components/RecipeGallery';
import RecipeDetails from '@/components/RecipeDetails';

export default function Home() {
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  
  const handleSelectRecipe = (id: string) => {
    setSelectedRecipeId(prevId => prevId === id ? null : id);
  };

  const handleCloseRecipe = () => {
    setSelectedRecipeId(null);
  };

  const selectedRecipe = selectedRecipeId 
    ? recipes.find(recipe => recipe.id === selectedRecipeId) || null
    : null;

  return (
    <div className="min-h-screen">
      {/* Hero section with image and content */}
      <section className="h-[75vh] flex">
        {/* Left side - Hero image (placeholder) */}
        <div className="w-1/2 relative">
          <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-24 h-24 mx-auto bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-lg font-medium">Hero Image Placeholder</p>
              <p className="text-sm">Replace with your image</p>
            </div>
          </div>
        </div>

        {/* Right side - Header content */}
        <div className="w-1/2 flex items-center justify-center bg-white px-8 md:px-12 lg:px-16">
          <div className="text-center max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Shepherd&apos;s Pie Recipes
            </h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8">
              Classic comfort food recipes made simple
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Discover three amazing variations of the classic comfort food - from traditional to vegetarian to gourmet versions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Recipe gallery section - positioned to show top 15% */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12" aria-label="Recipe gallery">
        <RecipeGallery 
          recipes={recipes} 
          onSelectRecipe={handleSelectRecipe}
          selectedRecipeId={selectedRecipeId}
        />
        
        {/* Recipe details dropdown */}
        <RecipeDetails 
          recipe={selectedRecipe}
          isOpen={!!selectedRecipeId}
          onClose={handleCloseRecipe}
        />
      </section>
      
      {/* Instructions hint for mobile users */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center pb-8 md:pb-12 lg:hidden">
        <p className="text-sm text-gray-500">
          Tap any recipe above to view detailed ingredients and cooking instructions
        </p>
      </section>

      {/* Half Lemons App Promotion Section */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left side - Text content */}
            <div className="w-full lg:w-1/2 text-center lg:text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-12 leading-tight">
                Want more recipes using your ingredients?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-12 leading-relaxed">
                Try out Half Lemons - an iOS app and recipe generator using your ingredients.
              </p>
              
              {/* App Store Download Link */}
              <a 
                href="#" 
                className="inline-block transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                aria-label="Download Half Lemons on the App Store"
              >
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-12 md:h-14 lg:h-16"
                />
              </a>
            </div>

            {/* Right side - Half Lemons app image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-80 h-[480px] md:w-96 md:h-[576px] lg:w-[400px] lg:h-[600px]">
                <Image
                  src="/images/half-lemons-app.png"
                  alt="Half Lemons iOS app interface showing recipe generation from ingredients"
                  fill
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 400px"
                  className="object-contain drop-shadow-2xl"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 