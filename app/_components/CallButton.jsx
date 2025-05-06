import { Phone } from "lucide-react"; 

export default function CallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a href="tel:+7 777 777 77 77" className="bg-[#20aa99] p-4 rounded-full shadow-lg hover:scale-97 transition-all duration-300 flex items-center justify-center">
        <Phone className="text-white w-6 h-6" />
      </a>
    </div>
  );
}
