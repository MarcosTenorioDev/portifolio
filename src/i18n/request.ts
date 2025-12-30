import {getRequestConfig} from 'next-intl/server';
import {Locale, routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
 
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  // Lê a variável de ambiente para determinar qual deploy usar
  const deploy = (process.env.NEXT_PUBLIC_DEPLOY || 'dev').toLowerCase() as 'dev' | 'qa';
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}-${deploy}.json`)).default
  };
});