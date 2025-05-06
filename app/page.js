import { Calendar } from 'lucide-react';
import ClinicCards from './_components/ClinicCards';
import Banner from './_components/Home/Banner';
import SolutionStep from './_components/SolutionStep';
import DocPage from './_components/Doctors/DocPage';
import GenDir from './_components/GenDir';
import NewsSection from './_components/NewsSection';
import Services from './_components/Services';
import AboutSection from './_components/AboutSection';


export default function Home() {
  return (
    <>
      <div className="container mx-auto py-3 px-6 lg:px-8" >
        <Banner />
        <AboutSection />
        <SolutionStep />
        <ClinicCards />
        <GenDir />
        <NewsSection />
        <DocPage />
        <Services />
      </div>
    </>
    
  );
}
