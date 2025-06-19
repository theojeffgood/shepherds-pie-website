interface CookingInstructionsProps {
  instructions: string[];
}

export default function CookingInstructions({ instructions }: CookingInstructionsProps) {
  return (
    <div>
      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
        <span className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
          👩‍🍳
        </span>
        Instructions
      </h3>
      <ol className="space-y-4">
        {instructions.map((step, index) => (
          <li key={index} className="flex items-start">
            <span className="bg-amber-100 text-amber-800 font-bold rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-sm mr-3 md:mr-4 flex-shrink-0 mt-0.5">
              {index + 1}
            </span>
            <p className="text-gray-800 text-sm md:text-base leading-relaxed">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
} 