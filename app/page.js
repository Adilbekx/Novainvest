import ClinicCards from './_components/ClinicCards';
import Banner from './_components/Home/Banner';
import SolutionStep from './_components/SolutionStep';
import DocPage from './_components/Doctors/DocList';
import GenDir from './_components/GenDir';
import NewsSection from './_components/NewsSection';
import Services from './_components/Services';
import AboutSection from './_components/AboutSection';
import FadeInWhenVisible from '@/components/FadeInWhenVisible'
import FAQSection from './_components/FAQSection';


export default function Home() {
  return (
    <>
      <div className="container mx-auto py-3 px-6 lg:px-8" >
        <FadeInWhenVisible>
          <Banner />
        </FadeInWhenVisible>
        <FadeInWhenVisible><AboutSection /> </FadeInWhenVisible>
        <FadeInWhenVisible><SolutionStep /> </FadeInWhenVisible>
        <FadeInWhenVisible><GenDir /></FadeInWhenVisible>
        <FadeInWhenVisible><NewsSection /></FadeInWhenVisible>
        <FadeInWhenVisible><DocPage /></FadeInWhenVisible>
        <FadeInWhenVisible><Services /></FadeInWhenVisible>
        <FadeInWhenVisible><FAQSection /></FadeInWhenVisible>
        <FadeInWhenVisible><ClinicCards /></FadeInWhenVisible>
      </div>
    </>
    
  );
}
