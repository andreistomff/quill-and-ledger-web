
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ServiceCategory } from "@/types/services";
import ServiceCard from "./ServiceCard";
import InheritanceServiceCard from "./InheritanceServiceCard";
import LegalizationServiceCard from "./LegalizationServiceCard";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

interface ServiceTabsProps {
  categories: ServiceCategory[];
}

const ServiceTabs = ({ categories }: ServiceTabsProps) => {
  const isMobile = useIsMobile();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id || "contracte");

  const gridCols = categories.length <= 3 ? 'grid-cols-3' : 
                   categories.length === 4 ? 'grid-cols-4' : 
                   'grid-cols-5';

  if (isMobile) {
    return (
      <div className="w-full space-y-6">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selectează categoria" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="space-y-6">
          {categories
            .filter(category => category.id === selectedCategory)
            .map((category) => (
              <div key={category.id}>
                {category.services?.map((service, index) => (
                  <ServiceCard key={`service-${category.id}-${index}`} service={service} />
                ))}
                {category.inheritanceServices?.map((service, index) => (
                  <InheritanceServiceCard key={`inheritance-${category.id}-${index}`} service={service} />
                ))}
                {category.legalizationServices?.map((service, index) => (
                  <LegalizationServiceCard key={`legalization-${category.id}-${index}`} service={service} />
                ))}
              </div>
            ))}
        </div>
      </div>
    );
  }

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
