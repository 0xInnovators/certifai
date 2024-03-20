import AllCourses from "./components/AllCourses";
import Team from "./components/Team";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 lg:p-24">
      <AllCourses />
      <Team />
    </main>
  );
}
