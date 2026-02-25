import { Header } from '@/components/header';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';
import  DucViet from '@/public/ducviet.png';
export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-10">
        {/* Hero Section */}
        <section className="mb-10 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2 text-balance">
                Trần Đức Việt
              </h1>
              <p className="text-2xl text-accent font-semibold mb-6">Front-End Developer</p>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
                Specializing in building scalable web and mobile applications with JavaScript, React.js, React Native, and Node.js. Passionate about creating impactful user experiences through clean, modern code.
              </p>
            </div>
            <div className="flex justify-center md:justify-end animate-fade-in">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-accent shadow-2xl">
                <Image
                  src={DucViet}
                  alt="Profile picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-10 animate-fade-in-delayed">
          <h2 className="text-3xl font-bold text-foreground mb-8">About Me</h2>
          <div className="max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Front-end developer with strong proficiency in JavaScript, TypeScript, React.js, and Next.js. I have hands-on experience building responsive web pages and collaborative solutions. Currently working as a Full-Stack Developer at Dat Vang Group, where I design engaging interfaces and collaborate with graphic designers, back-end developers, and marketing teams.
            </p>
            <p>
              I'm a proactive learner passionate about web development and mobile applications. I specialize in RESTful APIs, Firebase, and third-party library integration. My goal is to contribute to high-quality products and deliver impactful user experiences in professional development environments.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-10 animate-fade-in-delayed-2">
          <h2 className="text-3xl font-bold text-foreground mb-8">Education</h2>
          <div className="max-w-3xl">
            {[
              {
                degree: 'Software Engineering',
                school: 'Duy Tan University',
                period: '2021 - 2025',
                gpa: 'GPA: 3.3/4.0',
              },
            ].map((edu, idx) => (
              <div
                key={idx}
                className="border-l-2 border-accent pl-6 py-4"
              >
                <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                <p className="text-accent font-medium">{edu.school}</p>
                <p className="text-sm text-muted-foreground mb-1">{edu.period}</p>
                <p className="text-sm text-muted-foreground">{edu.gpa}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-10 animate-fade-in-delayed-2">
          <h2 className="text-3xl font-bold text-foreground mb-8">Experience</h2>
          <div className="space-y-8 max-w-3xl">
            {[
              {
                role: 'Full Stack Developer',
                company: 'Dat Vang Group',
                period: '7/2025 - 2/2026',
                description: 'Managed multiple projects simultaneously, designing engaging and responsive web pages. Collaborated daily with graphic designers, back-end developers, and marketing teams to ensure cohesive project execution.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border-l-2 border-accent pl-6 py-4 hover:border-accent/60 transition-smooth"
              >
                <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                <p className="text-accent font-medium">{item.company}</p>
                <p className="text-sm text-muted-foreground mb-2">{item.period}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-10 animate-fade-in-delayed-3">
          <h2 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h2>
          <div className="max-w-3xl">
            <p className="text-muted-foreground mb-8 text-balance leading-relaxed">
              I'm always interested in hearing about new opportunities and projects. Feel free to reach out!
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:tranducvietdtu@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-smooth font-medium"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a
                href="https://github.com/tducviet86"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent hover:text-accent rounded-lg transition-smooth font-medium"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.facebook.com/ducviet.863"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent hover:text-accent rounded-lg transition-smooth font-medium"
              >
                <Linkedin className="w-5 h-5" />
                Facebook
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 Trần Đức Việt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
