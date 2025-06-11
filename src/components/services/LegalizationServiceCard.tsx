
import { LegalizationService } from "@/types/services";
import { useState } from "react";

interface LegalizationServiceCardProps {
  service: LegalizationService;
}

const LegalizationServiceCard = ({ service }: LegalizationServiceCardProps) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleTypeToggle = (typeKey: string) => {
    setSelectedTypes(prev => 
      prev.includes(typeKey) 
        ? prev.filter(key => key !== typeKey)
        : [...prev, typeKey]
    );
  };

  const getCombinedDocuments = () => {
    if (selectedTypes.length === 0) return [];
    
    const allDocuments = selectedTypes.flatMap(typeKey => 
      service.legalizationTypes[typeKey]?.documents || []
    );
    
    return Array.from(new Set(allDocuments));
  };

  const combinedDocuments = getCombinedDocuments();

  return (
    <div className="border-l-4 border-primary/20 pl-4 bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="mb-4">
        <h4 className="font-playfair text-lg font-semibold text-primary mb-2">
          {service.name}
        </h4>
        <p className="text-gray-700 font-inter mb-4">
          {service.description}
        </p>
      </div>

      <div className="mb-4">
        <span className="block text-gray-500 text-sm font-semibold mb-3 font-inter">
          Selectați tipurile de legalizări:
        </span>
        <div className="space-y-2">
          {Object.entries(service.legalizationTypes).map(([key, type]) => (
            <label key={key} className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTypes.includes(key)}
                onChange={() => handleTypeToggle(key)}
                className="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <span className="text-gray-700 text-sm font-inter">
                {type.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {selectedTypes.length > 0 && (
        <div className="mb-2">
          <span className="block text-gray-500 text-sm font-semibold mb-1 font-inter">
            Documente necesare pentru tipurile selectate:
          </span>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-[15px] font-inter">
            {combinedDocuments.map((doc, idx) => (
              <li key={idx}>{doc}</li>
            ))}
          </ul>
        </div>
      )}

      {selectedTypes.length === 0 && (
        <p className="text-gray-500 text-sm font-inter italic">
          Selectați unul sau mai multe tipuri de legalizări pentru a vedea documentele necesare.
        </p>
      )}
    </div>
  );
};

export default LegalizationServiceCard;
