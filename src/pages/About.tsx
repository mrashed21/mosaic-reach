import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Target, 
  Eye, 
  Award, 
  Heart, 
  Briefcase,
  Globe,
  TrendingUp
} from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useTranslation();

  const teamMembers = [
    { name: "John Anderson", role: "CEO & Founder", experience: "15+ years" },
    { name: "Sarah Chen", role: "CTO", experience: "12+ years" },
    { name: "Michael Rodriguez", role: "VP Operations", experience: "10+ years" },
    { name: "Emily Johnson", role: "Head of Design", experience: "8+ years" },
    { name: "David Kim", role: "Lead Developer", experience: "9+ years" },
    { name: "Lisa Thompson", role: "Marketing Director", experience: "11+ years" },
  ];

  const achievements = [
    { metric: "500+", label: "Projects Delivered", icon: Briefcase },
    { metric: "200+", label: "Global Clients", icon: Globe },
    { metric: "15+", label: "Years Experience", icon: Award },
    { metric: "50+", label: "Countries Served", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen">
      {/* 1. Company Story Section */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-foreground mb-6">
              {t('companyStory')}
            </h1>
            <p className="text-xl text-professional mb-8">
              Founded in 2009, GlobalCorp began as a small consulting firm with a big vision: 
              to help businesses worldwide achieve their full potential through innovative technology solutions.
            </p>
            <p className="text-lg text-professional">
              Today, we're proud to be a leading global provider of digital transformation services, 
              trusted by Fortune 500 companies and growing startups alike.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Mission Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Target className="h-12 w-12 text-primary mb-6" />
              <h2 className="heading-lg text-foreground mb-6">
                {t('mission')}
              </h2>
              <p className="text-professional text-lg leading-relaxed">
                Our mission is to empower businesses of all sizes to thrive in the digital age. 
                We believe that every organization deserves access to world-class technology solutions 
                that drive growth, efficiency, and innovation. Through our expertise and dedication, 
                we help our clients navigate complex challenges and seize new opportunities in an 
                ever-evolving marketplace.
              </p>
            </div>
            <div className="professional-card p-8 bg-gradient-secondary">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Excellence in every project</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Integrity and transparency</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Innovation and creativity</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Client success first</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="professional-card p-8 bg-gradient-primary text-white">
                <h3 className="text-2xl font-semibold mb-4">Vision 2030</h3>
                <p className="text-white/90 leading-relaxed">
                  By 2030, we envision GlobalCorp as the world's most trusted partner for 
                  digital transformation, helping 10,000+ businesses across 100+ countries 
                  achieve sustainable growth through innovative technology solutions.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Eye className="h-12 w-12 text-primary mb-6" />
              <h2 className="heading-lg text-foreground mb-6">
                {t('vision')}
              </h2>
              <p className="text-professional text-lg leading-relaxed">
                We envision a world where technology barriers don't limit business potential. 
                Our vision is to be the global leader in making advanced technology accessible, 
                affordable, and actionable for organizations worldwide. We strive to create a 
                future where every business, regardless of size or location, can leverage 
                cutting-edge solutions to compete and succeed in the global marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Team Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('team')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Meet the exceptional professionals who drive our success and deliver outstanding results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="professional-card text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-professional">
                    {member.experience} of industry experience
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Culture Section */}
      <section className="section-padding bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('culture')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Our culture is built on collaboration, innovation, and a shared commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Passion</h3>
              <p className="text-professional">
                We're passionate about technology and its power to transform businesses.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Collaboration</h3>
              <p className="text-professional">
                We believe in the power of teamwork and collective intelligence.
              </p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Excellence</h3>
              <p className="text-professional">
                We strive for excellence in everything we do, from code to client service.
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Global Mindset</h3>
              <p className="text-professional">
                We embrace diversity and think globally while acting locally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Achievements Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('achievements')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Our track record speaks for itself. Here are some key milestones in our journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="professional-card p-6 text-center">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {achievement.metric}
                  </h3>
                  <p className="text-professional">{achievement.label}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 professional-card p-8 bg-gradient-primary text-white text-center">
            <Award className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Industry Recognition</h3>
            <p className="text-white/90 mb-6">
              Winner of "Best Digital Transformation Partner 2023" and "Global Innovation Award 2022"
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 px-4 py-2 rounded">ISO 27001 Certified</span>
              <span className="bg-white/20 px-4 py-2 rounded">SOC 2 Compliant</span>
              <span className="bg-white/20 px-4 py-2 rounded">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Careers Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('careers')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Join our team of innovators and help shape the future of business technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="professional-card">
              <CardHeader>
                <CardTitle>Why Work With Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-professional">
                  <li>• Competitive salaries and benefits</li>
                  <li>• Remote-first work culture</li>
                  <li>• Professional development opportunities</li>
                  <li>• Work on cutting-edge projects</li>
                  <li>• Collaborative team environment</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="professional-card">
              <CardHeader>
                <CardTitle>Open Positions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-professional">
                  <li>• Senior Full Stack Developer</li>
                  <li>• Cloud Solutions Architect</li>
                  <li>• UX/UI Designer</li>
                  <li>• DevOps Engineer</li>
                  <li>• Business Analyst</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="professional-card">
              <CardHeader>
                <CardTitle>Ready to Apply?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-professional mb-4">
                  Send your resume and cover letter to careers@globalcorp.com
                </p>
                <Button className="w-full">
                  View All Positions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our expertise can help your business achieve its goals.
            </p>
            <Button size="lg" variant="secondary">
              {t('contactUs')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};