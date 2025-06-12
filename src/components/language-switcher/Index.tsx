import { useTranslation } from 'react-i18next';
import brasil from '@/assets/img/commom/bandeira-brasil.webp';
import US from '@/assets/img/commom/bandeira-estados-unidos.webp'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-10">
      <button className="bg-yellow-600 font-bold text-gray-950 p-2 rounded-md flex items-center justify-center" onClick={() => i18n.changeLanguage('pt')}>
        <img className='w-6 mr-2' src={brasil} alt="PT-BR" />
        PT-BR
      </button>
      <button className="bg-yellow-600 font-bold text-gray-950 p-2 rounded-md flex items-center justify-center" onClick={() => i18n.changeLanguage('en')}>
        <img className='w-6 mr-2' src={US} alt="EN-US" />
        EN-US
      </button>
    </div>
  );
}
