import AllCourses from "./components/AllCourses";
import AllFeatures from "./components/AllFeatures";
import Button from "./components/Button";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Team from "./components/Team";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 lg:px-8">
      <Hero />
      <AllCourses />
      <AllFeatures />
      <Team />
    </main>
  );
}
