
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceCategory } from "@/types/services";
import ServiceCard from "./ServiceCard";
import InheritanceServiceCard from "./InheritanceServiceCard";
import LegalizationServiceCard from "./LegalizationServiceCard";

interface ServiceTabsProps {
  categories: ServiceCategory[];
}

const ServiceTabs = ({ categories }: ServiceTabsProps) => {
  return (
    <Tabs defaultValue="contracte" className="w-full">
      <TabsList className="grid w-full grid-cols-5 mb-8">
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
          {category.services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
          {category.inheritanceServices?.map((service, index) => (
            <InheritanceServiceCard key={index} service={service} />
          ))}
          {category.legalizationServices?.map((service, index) => (
            <LegalizationServiceCard key={index} service={service} />
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ServiceTabs;
