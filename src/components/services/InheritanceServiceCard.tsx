
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { InheritanceService } from "@/types/services";

interface InheritanceServiceCardProps {
  service: InheritanceService;
}

const InheritanceServiceCard = ({ service }: InheritanceServiceCardProps) => {
  const [selectedAssetType, setSelectedAssetType] = useState<string>("");

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
        <label className="block text-gray-700 text-sm font-semibold mb-2 font-inter">
          Selectați tipul de bun moștenit:
        </label>
        <Select value={selectedAssetType} onValueChange={setSelectedAssetType}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Alegeți tipul de bun..." />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(service.assetTypes).map(([key, assetType]) => (
              <SelectItem key={key} value={key}>
                {assetType.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedAssetType && (
        <div className="mb-2">
          <span className="block text-gray-500 text-sm font-semibold mb-1 font-inter">
            Documente necesare pentru {service.assetTypes[selectedAssetType].label.toLowerCase()}:
          </span>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-[15px] font-inter">
            {service.assetTypes[selectedAssetType].documents.map((doc, idx) => (
              <li key={idx}>{doc}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InheritanceServiceCard;
