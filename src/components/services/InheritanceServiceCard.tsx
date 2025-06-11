
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { InheritanceService } from "@/types/services";

interface InheritanceServiceCardProps {
  service: InheritanceService;
}

const InheritanceServiceCard = ({ service }: InheritanceServiceCardProps) => {
  const [selectedAssetTypes, setSelectedAssetTypes] = useState<string[]>([]);

  const handleAssetTypeChange = (assetTypeKey: string, checked: boolean) => {
    if (checked) {
      setSelectedAssetTypes(prev => [...prev, assetTypeKey]);
    } else {
      setSelectedAssetTypes(prev => prev.filter(key => key !== assetTypeKey));
    }
  };

  // Combină documentele din toate tipurile selectate și elimină duplicatele
  const getCombinedDocuments = () => {
    const allDocuments = selectedAssetTypes.flatMap(
      assetTypeKey => service.assetTypes[assetTypeKey]?.documents || []
    );
    return [...new Set(allDocuments)]; // Elimină duplicatele
  };

  const combinedDocuments = getCombinedDocuments();

  return (
    <div className="border-l-4 border-primary/20 pl-4 bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="mb-2">
        <h4 className="font-playfair text-lg font-semibold text-primary">
          {service.name}
        </h4>
      </div>
      <p className="text-gray-700 font-inter mb-4">
        {service.description}
      </p>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-3 font-inter">
          Selectați tipurile de bunuri moștenite:
        </label>
        <div className="space-y-3">
          {Object.entries(service.assetTypes).map(([key, assetType]) => (
            <div key={key} className="flex items-center space-x-2">
              <Checkbox
                id={key}
                checked={selectedAssetTypes.includes(key)}
                onCheckedChange={(checked) => handleAssetTypeChange(key, checked as boolean)}
              />
              <label 
                htmlFor={key} 
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {assetType.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {selectedAssetTypes.length > 0 && (
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
    </div>
  );
};

export default InheritanceServiceCard;
