import HomePageClient from './HomePageClient';

export default function Page() {
  // Lê a variável de ambiente no servidor e passa via props para o componente client
  const deploy = (process.env.NEXT_PUBLIC_DEPLOY || 'dev').toLowerCase() as 'dev' | 'qa';
  
  return <HomePageClient deploy={deploy} />;
}
