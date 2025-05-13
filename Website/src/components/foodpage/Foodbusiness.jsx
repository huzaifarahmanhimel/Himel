import { Contact, Nut } from "lucide-react";
import FoodHero from "./FoodHero";
import NutriPlatesMealPlans from "./NutriPlatesMealPlans";
import ContactUsFood from "./ContactUsFood";
import Testimonials from "./testimonials";
import FoodDelivery from "./FoodDelivery";
import HealthyFood from "./HealthyFood";
import WhatWeServeSection from "./WhatWeServeSection";

const FoodBusiness = () => {
  return (
    <div>
   <FoodHero/>
   <HealthyFood/>
   <FoodDelivery/>
   <WhatWeServeSection/>
   <NutriPlatesMealPlans/>
   <ContactUsFood/>
   <Testimonials/>
    </div>
  );
}
export default FoodBusiness;