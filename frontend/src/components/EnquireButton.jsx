/* Version: 1.0.0 */
import './EnquireButton.css'

export default function EnquireButton() {
  const whatsappNumber = '+919579453554'
  const whatsappMessage = 'Hi MB Associates! I would like to inquire about your properties.'

  const handleWhatsAppClick = () => {
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '')
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, '_blank')
  }

  return (
    <button
      className="chat-btn"
      onClick={handleWhatsAppClick}
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <span className="whatsapp-icon">💬</span>
      <span className="btn-label">Chat</span>
    </button>
  )
}
