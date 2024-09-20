import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const SocialMediaLinks = ({ size }: { size?: number }) => {
  const socialLinks = [
    {
      href: "https://instagram.com",
      icon: (
        <FaInstagram
          size={size ?? 20}
          className="text-black hover:text-primary"
        />
      ),
      label: "Instagram",
    },
    {
      href: "https://facebook.com",
      icon: (
        <FaFacebook
          size={size ?? 20}
          className="text-black hover:text-primary"
        />
      ),
      label: "Facebook",
    },
    {
      href: "https://twitter.com",
      icon: (
        <FaTwitter
          size={size ?? 20}
          className="text-black hover:text-primary"
        />
      ),
      label: "Twitter",
    },
  ];

  return (
    <div className="flex justify-start space-x-4 text-xl">
      {socialLinks.map((social) => (
        <Link
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer"
          key={social.label}
          href={social.href}
          passHref
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
