import RecentBlogs from "@/components/RecentBlogs";
import HeroSection from "../components/HeroSection";
import PlainLayout from "../components/master/PlainLayout";
import OurTeam from "@/components/OurTeam";

export default function page() {
  return (
    <>
      <PlainLayout>
        <HeroSection />
        <RecentBlogs />
        <OurTeam />
      </PlainLayout>
    </>
  );
}
