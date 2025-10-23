import React from 'react';
import { LinkButton } from './components/LinkButton';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-[#ac1f25] via-[#d46267] to-[#FFA999] animate-gradient font-sans">
      <div className="w-full max-w-md mx-auto bg-black/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8 text-white text-center">
        <div className="flex justify-center mb-2.5">
          <img 
            src="https://files.catbox.moe/9oeacj.png" 
            alt="Feastale Logo" 
            className="h-16 w-auto [filter:brightness(0)_invert(1)]"
          />
        </div>
        <p className="text-md text-white/80 mb-8">
          Delivering innovative, high-quality food solutions blending tradition, taste, and technology for modern consumers.
        </p>
        <div className="flex flex-col space-y-4">
          <LinkButton 
            href="#"
            icon={<FaGithub className="h-6 w-6" />}
            hoverClass="hover-github"
          >
            GitHub
          </LinkButton>
          <LinkButton 
            href="#"
            icon={<FaTwitter className="h-6 w-6" />}
            hoverClass="hover-twitter"
          >
            Twitter
          </LinkButton>
          <LinkButton 
            href="#"
            icon={<FaLinkedin className="h-6 w-6" />}
            hoverClass="hover-linkedin"
          >
            LinkedIn
          </LinkButton>
          <LinkButton 
            href="http://www.feastale.com"
            iconSrc="https://files.catbox.moe/yocjun.png"
            hoverClass="hover-website"
          >
            Visit our Website
          </LinkButton>
          <LinkButton 
            href="https://www.instagram.com/feastale/"
            iconSrc="https://files.catbox.moe/wzlckb.png"
            hoverClass="hover-instagram"
          >
            Follow on Instagram
          </LinkButton>
          <LinkButton 
            href="https://api.whatsapp.com/send/?phone=918590980096&text&type=phone_number&app_absent=0"
            iconSrc="https://i.postimg.cc/BQ6fhhfr/whatsapp-1.png"
            hoverClass="hover-whatsapp"
          >
            Chat on WhatsApp
          </LinkButton>
          <LinkButton 
            href="tel:+918590980096"
            iconSrc="https://files.catbox.moe/vruyns.png"
            hoverClass="hover-call"
          >
            Call Us Now
          </LinkButton>
        </div>
      </div>
    </main>
  );
};

export default App;