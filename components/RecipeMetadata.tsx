interface RecipeMetadataProps {
  prepTime: number;
  cookTime: number;
  servings: number;
}

export default function RecipeMetadata({ prepTime, cookTime, servings }: RecipeMetadataProps) {
  const totalTime = prepTime + cookTime;
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 md:mb-8">
      <div className="bg-gray-50 p-3 rounded-lg text-center">
        <p className="text-xs md:text-sm text-gray-500 font-medium">Prep Time</p>
        <p className="text-sm md:text-base font-bold text-gray-900">{formatTime(prepTime)}</p>
      </div>
      <div className="bg-gray-50 p-3 rounded-lg text-center">
        <p className="text-xs md:text-sm text-gray-500 font-medium">Cook Time</p>
        <p className="text-sm md:text-base font-bold text-gray-900">{formatTime(cookTime)}</p>
      </div>
      <div className="bg-gray-50 p-3 rounded-lg text-center">
        <p className="text-xs md:text-sm text-gray-500 font-medium">Total Time</p>
        <p className="text-sm md:text-base font-bold text-gray-900">{formatTime(totalTime)}</p>
      </div>
      <div className="bg-gray-50 p-3 rounded-lg text-center">
        <p className="text-xs md:text-sm text-gray-500 font-medium">Servings</p>
        <p className="text-sm md:text-base font-bold text-gray-900">{servings}</p>
      </div>
    </div>
  );
}

function formatTime(minutes: number): string {
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