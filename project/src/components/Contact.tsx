import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Github, Linkedin, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_f2962v9", // Service ID
        "template_9yh8kk2", // Template ID
        form.current,
        "bQ1XrX1XEQyMVgjRY" // Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setIsSending(false);
          form.current?.reset();
        },
        (error) => {
          alert("Failed to send message: " + error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
          Let&apos;s Connect!
        </h2>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl mb-12"
        >
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full px-4 py-3 border rounded-lg"
              placeholder="abc xyz"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              name="from_email"
              required
              className="w-full px-4 py-3 border rounded-lg"
              placeholder="abc@example.com"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full px-4 py-3 border rounded-lg"
              placeholder="I'd love to hear from you!"
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-lg flex items-center justify-center gap-2"
          >
            {isSending ? (
              "Sending..."
            ) : (
              <>
                <Send className="h-5 w-5" /> Send Message
              </>
            )}
          </button>
        </form>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://www.linkedin.com/in/shravani-bhakare-798634285/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Linkedin className="h-6 w-6 text-blue-500" />
            <span className="text-gray-800 font-medium">
              Connect on LinkedIn
            </span>
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

        {/* Collaboration Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl shadow-xl text-white text-center transform hover:-translate-y-1 transition-all duration-300">
          <MessageSquare className="h-10 w-10 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-3">
            Open to Collaborations!
          </h3>
          <p className="text-lg opacity-90">
            Looking for exciting opportunities in AI/ML and Software Development
          </p>
        </div>
      </div>
    </section>
  );
}
