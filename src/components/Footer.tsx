import Link from "next/link";
import { Instagram, Mail, ArrowUpRight, MessageCircle } from "lucide-react";
import {
  IconArrowUpRight,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconMail,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandThreads,
} from "@tabler/icons-react";

export function Footer() {
  const socials = [
    {
      name: "Instagram",
      icon: <IconBrandInstagram className="w-6 h-6" />,
      href: "https://www.instagram.com/tjarts_jadhav/?hl=en",
      bgColor: "hover:bg-pink-50",
    },
    {
      name: "WhatsApp",
      icon: <IconBrandWhatsapp className="w-6 h-6" />,
      href: "https://wa.me/918806097336",
      bgColor: "hover:bg-green-50",
    },
    {
      name: "Email",
      icon: <IconMail className="w-6 h-6" />,
      href: "mailto:tusharjtush@gmail.com",
      bgColor: "hover:bg-blue-50",
    },
    {
      name: "LinkedIn",
      icon: <IconBrandLinkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/tushar-jadhav-tj-art-s-8b035724a/",
      bgColor: "hover:bg-blue-50",
    },
    {
      name: "Facebook",
      icon: <IconBrandFacebook className="w-6 h-6" />,
      href: "https://www.facebook.com/alex.chung.909",
      bgColor: "hover:bg-blue-50",
    },
    {
      name: "Threads",
      icon: <IconBrandThreads className="w-6 h-6" />,
      href: "https://www.threads.net/@tjarts_jadhav",
      bgColor: "hover:bg-gray-50",
    },
  ];

  return (
    <footer id="contact" className="border-t py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="hidden md:grid grid-cols-3 gap-4">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${social.bgColor}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-4">
                {social.icon}
                <span className="text-lg font-semibold">{social.name}</span>
              </div>
              <IconArrowUpRight className="w-5 h-5" />
            </Link>
          ))}
        </div>

        <div className="flex md:hidden flex-col space-y-4">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${social.bgColor}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-4">
                {social.icon}
                <span className="text-lg font-semibold">{social.name}</span>
              </div>
              <IconArrowUpRight className="w-5 h-5" />
            </Link>
          ))}
        </div>

        <div className="text-center text-gray-600">
          <p>© {new Date().getFullYear()} TJ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
