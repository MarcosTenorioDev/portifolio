import ProjectPageClient from './ProjectPageClient';

export default function Page() {
  // Lê a variável de ambiente no servidor e passa via props para o componente client
  const deploy = (process.env.NEXT_PUBLIC_DEPLOY || 'dev').toLowerCase() as 'dev' | 'qa';
  
  return <ProjectPageClient deploy={deploy} />;
}
