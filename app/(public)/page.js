import Features from "./components/ui/features";
import Hero from "./components/ui/hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] ">
      <Hero />
      <Features />
    </main>
  );
}
