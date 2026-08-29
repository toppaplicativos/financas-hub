import HubMount from './HubMount';

const CSS =
  'https://cdn.jsdelivr.net/gh/toppaplicativos/financas-hub@0e0ed02743224694b12916b4b96f0f3ef8a09d45/app/globals.css';

export const metadata = {
  title: 'FINANÇAS | Toppapps',
  description:
    'Guias e ferramentas digitais para reunir informações, escolher prioridades e construir uma rotina financeira possível.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href={CSS} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <HubMount />
        {children}
      </body>
    </html>
  );
}
