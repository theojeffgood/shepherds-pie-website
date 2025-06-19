export interface Recipe {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
  instructions: string[];
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
}

export interface Ingredient {
  name: string;
  quantity: string;
  unit?: string;
}

// Utility functions for calculating and formatting time values
export function calculateTotalTime(prepTime: number, cookTime: number): number {
  return prepTime + cookTime;
}

export function formatTime(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} mins`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
  }
  
  return `${hours} ${hours === 1 ? 'hour' : 'hours'} ${remainingMinutes} mins`;
} 