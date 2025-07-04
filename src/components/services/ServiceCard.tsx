
import { Service } from "@/types/services";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const isConsultancyService = service.name === "Consultanță Juridică";
  const isMatrimonialConventionService = service.name === "Convenție Matrimonială";
  
  // Split the consultancy service description into bullet points
  const formatConsultancyDescription = (description: string) => {
    const points = description.split('. ').filter(point => point.trim().length > 0);
    const formattedPoints = points.map(point => point.endsWith('.') ? point : point + '.');
    
    // Merge the last two bullet points if there are at least 2 points
    if (formattedPoints.length >= 2) {
      const lastPoint = formattedPoints.pop();
      const secondLastPoint = formattedPoints.pop();
      if (lastPoint && secondLastPoint) {
        const mergedPoint = `${secondLastPoint.replace(/\.$/, '')} și ${lastPoint}`;
        formattedPoints.push(mergedPoint);
      }
    }
    
    return formattedPoints;
  };
  
  return (
    <div className="border-l-4 border-primary/20 pl-4 bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="mb-2">
        <h4 className="font-playfair text-lg font-semibold text-primary">
          {service.name}
        </h4>
      </div>
      
      {isConsultancyService ? (
        <div className="text-gray-700 font-inter mb-3">
          <ul className="list-disc list-inside space-y-2 text-[15px]">
            {formatConsultancyDescription(service.description).map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-700 font-inter mb-3">
          {service.description}
        </p>
      )}
      
      {!isConsultancyService && !isMatrimonialConventionService && service.documents && service.documents.length > 0 && (
        <div className="mb-2">
          <span className="block text-gray-500 text-sm font-semibold mb-1 font-inter">
            Documente necesare:
          </span>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-[15px] font-inter">
            {service.documents.map((doc, idx) => (
              <li key={idx}>{doc}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
