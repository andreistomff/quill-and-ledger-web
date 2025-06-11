
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceCategory } from "@/types/services";
import ServiceCard from "./ServiceCard";
import InheritanceServiceCard from "./InheritanceServiceCard";
import LegalizationServiceCard from "./LegalizationServiceCard";

interface ServiceTabsProps {
  categories: ServiceCategory[];
}

const ServiceTabs = ({ categories }: ServiceTabsProps) => {
  const gridCols = categories.length <= 3 ? 'grid-cols-3' : 
                   categories.length === 4 ? 'grid-cols-4' : 
                   'grid-cols-5';

  return (
    <Tabs defaultValue={categories[0]?.id || "contracte"} className="w-full">
      <TabsList className={`grid w-full ${gridCols} mb-8`}>
        {categories.map((category) => (
          <TabsTrigger 
            key={category.id} 
            value={category.id}
            className="font-inter text-sm"
          >
            {category.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map((category) => (
        <TabsContent key={category.id} value={category.id} className="space-y-6">
          {category.services?.map((service, index) => (
            <ServiceCard key={`service-${category.id}-${index}`} service={service} />
          ))}
          {category.inheritanceServices?.map((service, index) => (
            <InheritanceServiceCard key={`inheritance-${category.id}-${index}`} service={service} />
          ))}
          {category.legalizationServices?.map((service, index) => (
            <LegalizationServiceCard key={`legalization-${category.id}-${index}`} service={service} />
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ServiceTabs;
