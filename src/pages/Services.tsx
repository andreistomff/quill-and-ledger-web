
import { serviceCategories } from "@/data/servicesData";
import ServiceTabs from "@/components/services/ServiceTabs";

export default function Services() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="font-playfair text-3xl font-bold mb-8 text-primary">
        Serviciile noastre
      </h2>
      
      <ServiceTabs categories={serviceCategories} />
    </div>
  );
}
