'use client';

import { FileText } from 'lucide-react'; 

const documents = [
  { title: 'Устав', file: '/docs/price-list.pdf' },
  { title: 'Реквезиты', file: '/docs/rekvz.pdf' },
  { title: 'План развития', file: '/docs/rules.pdf' },
  { title: 'Государственная регистрация', file: '/docs/gosReg.pdf' },
];

export default function DocsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-black mb-6 text-center">
        Корпоративные документы
      </h1>
      <p className="text-gray-600 text-lg mb-10 text-center">
        Здесь вы найдёте важные документы нашей клиники.
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
