'use client';

import { useTranslations } from 'next-intl';
import { ROUTES } from "@/lib/routes/routes";
import type { NavItem, NavigationProps } from "@/types/header.types";
import NavLinkItem from "./NavLinkItem";

const Navigation = ({ 
  className = '', 
  variant = 'desktop',
  onItemClick 
}: Omit<NavigationProps, 'items'>) => {
  const t = useTranslations('nav');
  
  const navigation: NavItem[] = [
    { label: t('home'), href: ROUTES.HOME },
    { label: t('diensten'), href: ROUTES.DIENSTEN },
    { label: t('tarieven'), href: ROUTES.TARIEVEN },
    { label: t('nieuws'), href: ROUTES.NIEUWS },
    { label: t('overOns'), href: ROUTES.OVER_ONS },
    { label: t('contact'), href: ROUTES.CONTACT },
  ];

  return (
    <nav className={className}>
      {navigation.map((item) => (
        <NavLinkItem 
          key={item.href} 
          item={item} 
          variant={variant}
          onClick={onItemClick}
        />
      ))}
    </nav>
  );
};

export default Navigation;