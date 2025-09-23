import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  Shield, 
  Zap, 
  Users, 
  Star,
  Calendar,
  TrendingUp,
  Award
} from 'lucide-react';

export const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl text-foreground mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-xl text-professional mb-8 max-w-2xl mx-auto">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                {t('getStarted')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="btn-secondary">
                {t('learnMore')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg text-foreground mb-6">
                {t('aboutTitle')}
              </h2>
              <p className="text-professional mb-6 text-lg">
                {t('aboutDescription')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success" />
                  <span className="text-foreground">Global reach and expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success" />
                  <span className="text-foreground">Industry-leading solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success" />
                  <span className="text-foreground">24/7 dedicated support</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="professional-card p-6 text-center">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">500+</h3>
                <p className="text-professional">Projects Completed</p>
              </div>
              <div className="professional-card p-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">200+</h3>
                <p className="text-professional">Happy Clients</p>
              </div>
              <div className="professional-card p-6 text-center">
                <Globe className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">50+</h3>
                <p className="text-professional">Countries Served</p>
              </div>
              <div className="professional-card p-6 text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">15+</h3>
                <p className="text-professional">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('featuresTitle')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Discover what makes our solutions stand out in the global market
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="professional-card">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ultra-fast performance and lightning-quick response times for all your business needs.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="professional-card">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Secure & Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Bank-level security with 99.9% uptime guarantee. Your data is always protected.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="professional-card">
              <CardHeader>
                <Globe className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Global Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Scalable solutions that grow with your business across multiple continents.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section className="section-padding bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('servicesTitle')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Digital Transformation', desc: 'Modernize your business with cutting-edge digital solutions.' },
              { title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure for enterprise-grade applications.' },
              { title: 'Consulting Services', desc: 'Expert guidance for strategic business and technology decisions.' },
              { title: 'Custom Development', desc: 'Bespoke software solutions tailored to your unique needs.' },
              { title: 'Data Analytics', desc: 'Turn your data into actionable insights and competitive advantages.' },
              { title: 'Support & Maintenance', desc: '24/7 technical support and proactive system maintenance.' },
            ].map((service, index) => (
              <div key={index} className="professional-card p-6">
                <h3 className="heading-md mb-4 text-foreground">{service.title}</h3>
                <p className="text-professional mb-4">{service.desc}</p>
                <Link to="/services" className="text-primary hover:text-primary-hover transition-colors font-medium">
                  {t('learnMore')} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('testimonialsTitle')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Hear from businesses that trust us with their success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                content: "GlobalCorp transformed our business operations completely. Their expertise and dedication are unmatched.",
                rating: 5
              },
              {
                name: "Ahmed Al-Rashid",
                role: "Director, Middle East Operations",
                content: "Exceptional service quality and professional approach. They delivered exactly what they promised.",
                rating: 5
              },
              {
                name: "Maria Santos",
                role: "CTO, Innovation Labs",
                content: "The team's technical expertise and customer service exceeded our expectations in every way.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="professional-card">
                <CardHeader>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-lg">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-professional text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Blog Preview Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('blogTitle')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Stay updated with the latest industry trends and insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of Digital Transformation",
                excerpt: "Exploring emerging technologies and their impact on business operations...",
                date: "March 15, 2024",
                category: "Technology"
              },
              {
                title: "Global Market Trends 2024",
                excerpt: "Key insights into market dynamics and opportunities for growth...",
                date: "March 12, 2024",
                category: "Business"
              },
              {
                title: "Security Best Practices",
                excerpt: "Essential security measures every business should implement...",
                date: "March 10, 2024",
                category: "Security"
              }
            ].map((post, index) => (
              <Card key={index} className="professional-card">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm text-professional">{post.date}</span>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <Link to="/blog" className="text-primary hover:text-primary-hover transition-colors font-medium">
                    {t('readMore')} →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Contact CTA Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get in touch with our experts and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">{t('contactUs')}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Footer is handled by the main layout */}
    </div>
  );
};