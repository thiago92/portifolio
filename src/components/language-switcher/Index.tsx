import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation(); // Acessa o objeto i18n

  return (
    <div className="flex gap-10">
      <button className="bg-yellow-600 font-bold text-gray-950 p-2 rounded-md" onClick={() => i18n.changeLanguage('pt')}>Português</button>
      <button className="bg-yellow-600 font-bold text-gray-950 p-2 rounded-md" onClick={() => i18n.changeLanguage('en')}>English</button>
    </div>
  );
}
