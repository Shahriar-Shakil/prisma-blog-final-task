import FAQ from "@/components/FAQ";
import Stats from "@/components/Stats";
import PlainLayout from "@/components/master/PlainLayout";

export default function page() {
  return (
    <PlainLayout>
      <Stats />
      <FAQ />
    </PlainLayout>
  );
}
