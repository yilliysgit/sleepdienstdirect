'use client';

import { Phone } from '@phosphor-icons/react';
import { useTranslations } from 'next-intl';

const PhoneAction = () => {
  const t = useTranslations('phone');
  
  return (
    <div className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200">
      <div className="flex-shrink-0 bg-orange-600 p-2 rounded-full shadow-sm">
        <Phone 
          size={20} 
          weight="regular" 
          className="text-white" 
        />
      </div>
      
      <div className="flex flex-col">
        <span className="text-xs text-gray-500 font-medium leading-tight">
          {t('label')}
        </span>
        <a 
          href="tel:0031625375323"
          className="text-sm font-bold text-gray-900 hover:text-orange-600 transition-colors duration-200 leading-tight"
        >
          {t('number')}
        </a>
      </div>
    </div>
  );
};

export default PhoneAction;