import Hero from "@/components/routes/publicPage/home/Hero";
import Testimonial from "@/components/routes/publicPage/home/Testimonial";
import Tips from "@/components/routes/publicPage/home/Tips";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div>
      <Hero />
      <Testimonial />
      <Tips />

    </div>
  );
}
