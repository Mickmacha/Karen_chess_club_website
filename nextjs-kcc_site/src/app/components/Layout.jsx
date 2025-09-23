// components/Layout.jsx
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
       <WhatsAppButton 
        phoneNumber="1234567890" 
        message="Hello, I would like to know more about your services." 
      />
      <Footer />
    </div>
  )
}