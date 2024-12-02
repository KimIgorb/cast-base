import Backstage from "../components/main/Backstage";
import Faces from "../components/main/Faces";
import Hero from "../components/main/Hero";
import Works from "../components/main/Works";

export const Home: React.FC = () => {
  return (
    <main className="bg-bg">
      <Hero />
      <Works />
      <Faces />
      <Backstage />
    </main>
  );
};
