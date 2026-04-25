import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert("Message sent successfully ✨");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "qathrunnadachlis@gmail.com",
      href: "mailto:qathrunnadachlis@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 82386168650",
      href: "https://wa.me/6282386168650",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Banda Aceh, Indonesia",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 overflow-hidden
      bg-gradient-to-br from-[#071a12] via-[#0b2a1e] to-[#123d2b]"
    >
      {/* SOFT GREEN GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-[450px] h-[450px] bg-emerald-500/20 blur-[140px] top-[-150px] left-[-150px]" />
        <div className="absolute w-[400px] h-[400px] bg-lime-400/10 blur-[140px] bottom-[-150px] right-[-150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-lime-300 font-medium mb-2 block">
            Contact
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Get In Touch ✨
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-lime-300 to-emerald-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* LEFT */}
          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                className="flex items-center gap-4 p-4
                bg-white/10 border border-white/10
                rounded-xl backdrop-blur-md
                hover:bg-white/15 transition-all group"
              >
                <div
                  className="p-3 bg-emerald-400/10 rounded-lg
                  group-hover:bg-emerald-400/20 transition"
                >
                  <info.icon className="text-lime-300 w-6 h-6" />
                </div>

                <div>
                  <p className="text-green-200/70 text-sm">
                    {info.label}
                  </p>
                  <p className="text-white font-medium">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 p-6
            bg-white/10 border border-white/10
            rounded-2xl backdrop-blur-xl"
          >
            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg
              bg-white/10 text-white placeholder:text-green-200/50
              border border-white/10 outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg
              bg-white/10 text-white placeholder:text-green-200/50
              border border-white/10 outline-none"
            />

            <input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-lg
              bg-white/10 text-white placeholder:text-green-200/50
              border border-white/10 outline-none"
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg min-h-[150px]
              bg-white/10 text-white placeholder:text-green-200/50
              border border-white/10 outline-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl
              bg-gradient-to-r from-lime-300 to-emerald-400
              text-black font-bold transition hover:scale-[1.02]"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}