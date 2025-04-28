import { FeatureBlogs } from "@/components/feature-blogs";
import { Hero } from "@/components/rnit-hero";
import { TeamsProfile } from "@/components/teams-profile";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Employees } from "@/data/employees"
import { FeaturePrograms } from "@/components/feature-programs";


export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturePrograms
        maxPrograms={5} // Optionally customize how many programs to show
        showTitleRow={true}
      // You can also override title, subText, badgeText here if needed
      />
      <FeatureBlogs showViewAllButton={true} />
      {/* <IndexBlogs /> */}
    </main>
  );
}
