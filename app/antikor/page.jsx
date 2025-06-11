'use client';

import { FileText } from 'lucide-react'; 

const documents = [
  { title: 'ПОРЯДОК информирования работниками ТОО «El Aman Nova Invest» о фактах или возможных нарушениях антикоррупционного законодательства', file: '/docs/Antikor/pikp.pdf' },
];

export default function DocsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-black mb-6 text-center">
        Антикоррупционная политика
      </h1>
      <p className="text-gray-600 text-lg mb-10 text-center">
        Здесь вы найдёте важные документы, касающиеся антикоррупционной политики нашей клиники.
      </p>

      <ul className="space-y-6">
        {documents.map((doc, index) => (
          <li key={index}>
            <a
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#20aa99] text-lg font-medium hover:underline hover:text-black transition"
            >
              <FileText className="w-5 h-5" />
              {doc.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
