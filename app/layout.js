export default function Layout({ children }) {
  return (
    <html lang="tr">
      <head>
        <title>AlpDroid</title>
        <meta name="description" content="AlpDroid AI Chatbot" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
