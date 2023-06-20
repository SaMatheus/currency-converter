export const metadata = {
  title: 'Converte',
  description: 'Converta moedas estrangeiras levando em conta os impostos do brasil',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
