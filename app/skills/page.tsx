import { Header } from '@/components/header';

export default function SkillsPage() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
      ],
    },
    {
      category: 'Frontend Frameworks',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Next.js', level: 75 },
        { name: 'React Native', level: 80 },
      ],
    },
    {
      category: 'Backend & Tools',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'MongoDB', level: 70 },
        { name: 'REST APIs', level: 80 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-10">
        {/* Hero Section */}
        <section className="mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Technical Skills
          </h1>
        </section>

        {/* Skills Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="animate-fade-in"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-8 pb-4 border-b border-accent/30">
                  {category.category}
                </h2>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full transition-smooth"
                          style={{
                            width: `${skill.level}%`,
                            animation: `fillWidth 1s ease-out forwards`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>


      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 Trần Đức Việt. All rights reserved.</p>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes fillWidth {
          from {
            width: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-delayed {
          animation: fadeIn 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-delayed-2 {
          animation: fadeIn 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in-delayed-3 {
          animation: fadeIn 0.6s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
