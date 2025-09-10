import React, { useState } from 'react';
import { Mail, Github, Linkedin, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    const mailtoLink = `mailto:shravani0217@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(
      `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setIsSending(false);
      setMessage('');
      setName('');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-4 text-center">
            Let's Connect!
          </h2>
          <p className="text-gray-600 mb-12 text-center text-lg">
            I'm always excited to collaborate on AI/ML and software development projects projects and connect with fellow tech enthusiasts.
          </p>
          
          <form onSubmit={handleSubmit} className="mb-12 bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="abc xyz"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="abc@example.com"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="I'd love to hear from you!"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1"
            >
              {isSending ? (
                <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://www.linkedin.com/in/shravani-bhakare-798634285/</div>"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Linkedin className="h-6 w-6 text-blue-500" />
              <span className="text-gray-800 font-medium">Connect on LinkedIn</span>
            </a>
            <a
              href="https://github.com/shravanibhakare"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Github className="h-6 w-6 text-gray-800" />
              <span className="text-gray-800 font-medium">Follow on GitHub</span>
            </a>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl shadow-xl text-white text-center transform hover:-translate-y-1 transition-all duration-300">
            <MessageSquare className="h-10 w-10 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Open to Collaborations!</h3>
            <p className="text-lg opacity-90">Looking for exciting opportunities in AI/ML and Software Development</p>
          </div>
        </div>
      </div>
    </section>
  );
}