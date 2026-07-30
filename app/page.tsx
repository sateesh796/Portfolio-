export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Navigation Bar */}
      <nav className="border-b border-red-800 bg-black/70 backdrop-blur sticky top-0 z-50 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            Avula Sateesh
          </span>
          <div className="flex gap-6 text-sm text-white">
            <a href="#about" className="hover:text-red-400 transition">About</a>
            <a href="#projects" className="hover:text-red-400 transition">Projects</a>
            <a href="#skills" className="hover:text-red-400 transition">Skills</a>
            <a href="#certificates" className="hover:text-red-400 transition">Certificates</a>
            <a href="#contact" className="hover:text-red-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20 text-center md:text-left bg-red-950 text-white rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(220,38,38,0.75)]">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-red-200 uppercase rounded-full bg-red-900/80 border border-red-800">
          Aspiring Software Developer
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Avula Sateesh</span>
        </h1>
          <p className="mt-6 text-lg sm:text-xl text-white max-w-3xl leading-relaxed">
          Motivated B.Tech student with a strong interest in Software Development and Web Technologies. Passionate about building real-world applications using modern technologies and eager to gain practical experience through an internship where I can contribute while continuously learning.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="https://github.com/sateesh796"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-red-950/80 border border-red-800 px-5 py-3 font-medium text-white hover:bg-red-800 transition"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sateesh-yadav-91a89541a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-medium text-white hover:bg-red-500 transition shadow-lg shadow-red-500/20"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </section>

      {/* Intro Video Section */}
      <section id="intro-video" className="max-w-5xl mx-auto px-6 py-16">
        <div className="rounded-[2rem] bg-red-950/90 border border-red-800 p-6 shadow-[0_30px_60px_-30px_rgba(220,38,38,0.75)]">
          <div className="mb-6 flex items-center gap-3">
            <svg className="w-6 h-6 text-red-400 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <h2 className="text-2xl font-bold text-white">Introduction Video</h2>
          </div>
          <p className="text-white/80 mb-6 max-w-3xl">
            Watch my introduction video to learn more about my goals, skills, and the projects I'm excited to build.
          </p>
          <div className="overflow-hidden rounded-3xl border border-red-800 bg-black">
            <video
              className="w-full h-auto"
              controls
              autoPlay
              muted
              playsInline
              poster="/intro-video-poster.jpg"
            >
              <source src="/intro-video-4x3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-t border-red-800 bg-black/70 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-6 h-6 text-red-400 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
              <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
            </svg>
            <h2 className="text-2xl font-bold">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="p-6 rounded-xl bg-black/90 border border-red-800 hover:border-red-700 transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">GMS Global Mobile Store</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-red-950 text-red-400 border border-red-700">
                    HTML, CSS, JS
                  </span>
                </div>
                <ul className="text-whitext-sm space-y-2 list-disc list-inside mt-4">
                  <li>Developed a responsive e-commerce web application for browsing mobile phones with a modern interface.</li>
                  <li>Built reusable UI components and optimized the website for desktop, tablet, and mobile devices.</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-red-800/80">
                <a
                  href="https://gms-global-mobile-tore.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 hover:text-red-300 transition"
                >
                  <span>Live Demo</span>
                  <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-xl bg-black/90 border border-red-800 hover:border-red-700 transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">Fashion Switch</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-red-950 text-red-400 border border-red-700">
                    HTML, CSS, JS
                  </span>
                </div>
                <ul className="text-white text-sm space-y-2 list-disc list-inside mt-4">
                  <li>Developed a fashion/clothing web application that lets users browse and switch between different styles and outfit options through an interactive interface.</li>
                  <li>Focused on a clean, responsive layout for a smooth browsing experience across devices.</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-red-800/80">
                <a
                  href="https://fashion-switch.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 hover:text-red-300 transition"
                >
                  <span>Live Demo</span>
                  <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-6 rounded-xl bg-black/90 border border-red-800 hover:border-red-700 transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">Product Find</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-red-950 text-red-400 border border-red-700">
                    HTML, CSS, JS
                  </span>
                </div>
                <ul className="text-white text-sm space-y-2 list-disc list-inside mt-4">
                  <li>Built a product discovery web application that helps users search and filter products based on their preferences.</li>
                  <li>Designed an intuitive interface to make finding relevant products quick and easy.</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-red-800/80">
                <a
                  href="https://product-find-henna.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 hover:text-red-300 transition"
                >
                  <span>Live Demo</span>
                  <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="p-6 rounded-xl bg-black/90 border border-red-800 hover:border-red-700 transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">Smart Lender</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-red-950 text-red-400 border border-red-700">
                    Group Project – Team Lead
                  </span>
                </div>
                <ul className="text-white text-sm space-y-2 list-disc list-inside mt-4">
                  <li>Led a team in developing Smart Lender, an application aimed at helping users with loan-related eligibility and decision-making.</li>
                  <li>Coordinated task distribution among team members and oversaw the project from planning through implementation.</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-red-800/80">
                <a
                  href="https://github.com/sateesh796/smart-lender"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 hover:text-red-300 transition"
                >
                  <span>GitHub Repo</span>
                  <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Education Grid */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-red-400 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <h2 className="text-2xl font-bold">Technical Skills</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-black/90 border border-red-800">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Programming Languages</h3>
                <p className="text-white font-medium">Python, SQL</p>
              </div>
              <div className="p-4 rounded-xl bg-black/90 border border-red-800">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Tools & Environments</h3>
                <p className="text-white font-medium">Git, GitHub, VS Code</p>
              </div>
              <div className="p-4 rounded-xl bg-black/90 border border-red-800">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Concepts</h3>
                <p className="text-white font-medium">Problem Solving, Basic Database Management</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-red-400 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                <path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              </svg>
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <div className="p-6 rounded-xl bg-black/90 border border-red-800">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-white">B.Tech</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-red-950 text-red-300 border border-red-800">
                  2023 – Present
                </span>
              </div>
              <p className="text-white mt-2">Kallam Haranadhareddy Institute of Technology</p>
              <p className="text-white text-sm mt-1">Andhra Pradesh, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates & Hobbies */}
      <section id="certificates" className="border-t border-red-800 bg-black/70 py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Certificates */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-red-400 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                <path d="M12 15l-2 5 3-1.5L16 20l-2-5M12 15a7 7 0 100-14 7 7 0 000 14z" />
              </svg>
              <h2 className="text-2xl font-bold">Certificates</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-black/90 border border-red-800 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-white">C Language</h3>
              <p className="text-sm text-white">Offline Certification</p>
                </div>
                <span className="text-xs text-white font-medium bg-red-950/60 px-3 py-1 rounded">July 2023</span>
              </div>
              <div className="p-4 rounded-xl bg-black/90 border border-red-800 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-white">Introduction to Data Science</h3>
              <p className="text-sm text-white">Infosys Springboard</p>
                </div>
                <span className="text-xs text-white font-medium bg-red-950/60 px-3 py-1 rounded">May 2026</span>
              </div>
            </div>
          </div>

          {/* Hobbies */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-red-400 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                <path d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 8v4l3 3" />
              </svg>
              <h2 className="text-2xl font-bold">Hobbies & Interests</h2>
            </div>
            <ul className="space-y-3 text-white">
              <li className="flex items-center gap-3 p-3 rounded-lg bg-black/90 border border-red-800">
                <span className="text-red-400">🚀</span> Creating innovative technology projects.
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg bg-black/90 border border-red-800">
                <span className="text-red-400">🛠️</span> Learning new software development tools.
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg bg-black/90 border border-red-800">
                <span className="text-red-400">🤖</span> Exploring emerging technologies and AI applications.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-16 border-t border-red-800">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-white mb-8">
            Feel free to reach out to me for web development projects, internships, or collaboration opportunities!
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-white">
            <a
              href="mailto:avsatish389@gmail.com"
              className="flex items-center gap-2 hover:text-red-400 transition"
            >
              <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" />
              </svg>
              avsatish389@gmail.com
            </a>
            <span className="hidden sm:inline text-white/40">•</span>
            <a href="tel:+917780595183" className="flex items-center gap-2 hover:text-red-400 transition">
              <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              +91 7780595183
            </a>
          </div>
          <p className="text-white text-sm mt-4">📍 Guntur, Andhra Pradesh</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-800 py-6 text-center text-white text-sm">
        © {new Date().getFullYear()} Avula Sateesh. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}
