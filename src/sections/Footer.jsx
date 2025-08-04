const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#work' },
    { name: 'Contact', href: '#contact' }
  ];

  const skills = [
    'React', 'Node.js', 'JavaScript', 'MongoDB', 'Express.js', 'Next.js'
  ];

  return (
    <footer className="c-space py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Santayo Kundu</h3>
              <p className="subtext">
                Full Stack Developer passionate about creating innovative web solutions 
                and bringing ideas to life through code.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-mint rounded-full animate-pulse"></div>
              <span className="subtext text-sm">Available for freelance work</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="subtext hover:text-white transition-colors text-sm hover-animation inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-white/10 text-neutral-300 text-xs rounded font-medium border border-white/10 hover:bg-white/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-aqua/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-aqua" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="subtext text-sm">Kolkata, India</p>
              </div>
              
              <a 
                href="mailto:santayokundu4@gmail.com"
                className="flex items-center gap-3 hover:text-aqua transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-mint/20 flex items-center justify-center flex-shrink-0 group-hover:bg-mint/30 transition-colors">
                  <svg className="w-4 h-4 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="subtext text-sm group-hover:text-mint">santayokundu4@gmail.com</p>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">

          {/* Made with love */}
          <div className="mt-4 text-center">
            <p className="subtext text-xs flex items-center justify-center gap-1">
              Made with 
              <span className="text-coral animate-pulse">❤️</span> 
              by Santayo Kundu &copy; {currentYear}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-aqua/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;