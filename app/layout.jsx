import HubMount from './HubMount';
import './globals.css';

export const metadata = {
  title: 'FINANÇAS | Toppapps',
  description:
    'Guias e ferramentas digitais para reunir informações, escolher prioridades e construir uma rotina financeira possível.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
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
