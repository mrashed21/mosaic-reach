import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Cloud, 
  Code, 
  Database, 
  Shield, 
  Smartphone, 
  BarChart3,
  CheckCircle,
  Star,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export const Services: React.FC = () => {
  const { t } = useTranslation();

  const serviceCategories = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["AWS/Azure Migration", "Cloud Architecture", "DevOps & CI/CD", "Auto-scaling"]
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Bespoke software solutions tailored to your unique business requirements.",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"]
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Transform your data into actionable insights with advanced analytics solutions.",
      features: ["Business Intelligence", "Data Warehousing", "Machine Learning", "Reporting"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Monitoring"]
    },
    {
      icon: Smartphone,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your operations.",
      features: ["Process Automation", "Digital Strategy", "Change Management", "Training"]
    },
    {
      icon: BarChart3,
      title: "Consulting Services",
      description: "Strategic consulting to help you make informed technology decisions.",
      features: ["Technology Strategy", "Architecture Review", "Performance Optimization", "Roadmapping"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic cloud setup",
        "Simple web application",
        "Email support",
        "Monthly reporting",
        "Basic security"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$7,500",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced cloud architecture",
        "Custom applications",
        "24/7 phone support",
        "Weekly reporting",
        "Enhanced security",
        "Performance monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations with complex needs",
      features: [
        "Full digital transformation",
        "Enterprise applications",
        "Dedicated support team",
        "Real-time analytics",
        "Advanced security suite",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const caseStudies = [
    {
      client: "TechStart Inc.",
      industry: "Technology",
      challenge: "Legacy system modernization",
      solution: "Cloud migration and microservices architecture",
      result: "300% performance improvement, 60% cost reduction"
    },
    {
      client: "Global Retail Co.",
      industry: "Retail",
      challenge: "Omnichannel customer experience",
      solution: "Custom e-commerce platform with mobile app",
      result: "150% increase in online sales, 40% higher customer satisfaction"
    },
    {
      client: "FinanceFirst Bank",
      industry: "Financial Services",
      challenge: "Regulatory compliance and security",
      solution: "Comprehensive cybersecurity and compliance framework",
      result: "100% compliance achievement, zero security incidents"
    }
  ];

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity. Simple projects take 4-8 weeks, while complex enterprise solutions may take 6-12 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive support packages including maintenance, updates, monitoring, and technical assistance. Our support plans range from basic email support to 24/7 dedicated teams."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely. We specialize in system integration and can work with your existing infrastructure, databases, and applications. We'll assess your current setup and recommend the best integration approach."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve clients across various industries including healthcare, finance, retail, manufacturing, education, and technology. Our solutions are customized to meet industry-specific requirements and regulations."
    },
    {
      question: "How do you ensure project success?",
      answer: "We follow agile methodologies, maintain regular communication, provide transparent reporting, and involve clients throughout the development process. Our experienced project managers ensure deliveries meet your expectations."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 1. Service Categories Section */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="heading-xl text-foreground mb-6">
              {t('serviceCategories')}
            </h1>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="professional-card group hover:shadow-professional-lg transition-all duration-300">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-professional">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm text-professional">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Service Details Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('serviceDetails')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Our comprehensive approach ensures every aspect of your project is handled with expertise and precision.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="professional-card p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Discovery & Planning</h3>
                <p className="text-professional mb-4">
                  We start every project with a thorough analysis of your business requirements, 
                  current infrastructure, and strategic objectives.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-professional">Requirements gathering</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-professional">Technical assessment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-professional">Project roadmap creation</span>
                  </li>
                </ul>
              </div>
              <div className="professional-card p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Implementation</h3>
                <p className="text-professional mb-4">
                  Our experienced team implements solutions using industry best practices 
                  and cutting-edge technologies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-professional">Agile development methodology</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-professional">Regular progress updates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-professional">Quality assurance testing</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-8">
              <div className="professional-card p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Deployment & Launch</h3>
                <p className="text-professional mb-4">
                  We ensure smooth deployment with minimal disruption to your business operations 
                  and provide comprehensive launch support.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-professional">Production deployment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-professional">Performance monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-professional">User training and documentation</span>
                  </li>
                </ul>
              </div>
              <div className="professional-card p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Ongoing Support</h3>
                <p className="text-professional mb-4">
                  Our relationship doesn't end at launch. We provide ongoing support, 
                  maintenance, and optimization services.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-professional">24/7 technical support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-professional">Regular updates and maintenance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-professional">Performance optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefits Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('benefits')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Partner with us and experience the advantages of working with industry experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Proven Expertise</h3>
              <p className="text-professional">15+ years of experience delivering successful projects across industries.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Security First</h3>
              <p className="text-professional">Enterprise-grade security measures integrated into every solution we build.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Scalable Solutions</h3>
              <p className="text-professional">Future-proof architectures that grow with your business needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Quality Assured</h3>
              <p className="text-professional">Rigorous testing and quality assurance processes ensure reliable delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pricing Plans Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('pricing')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Flexible pricing options designed to fit businesses of all sizes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`professional-card relative ${plan.popular ? 'border-primary shadow-professional-lg' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="py-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-professional">/{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-professional">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary-hover' : ''}`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Case Studies Section */}
      <section className="section-padding bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('caseStudies')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Real success stories from clients who transformed their businesses with our solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="professional-card">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{study.client}</CardTitle>
                    <Badge variant="outline">{study.industry}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                    <p className="text-professional text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                    <p className="text-professional text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Result:</h4>
                    <p className="text-success text-sm font-medium">{study.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQs Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('faqs')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Find answers to common questions about our services and processes.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="professional-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <span>{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-professional leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Request Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact Info Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="heading-md text-foreground mb-6">
              Have Questions About Our Services?
            </h2>
            <p className="text-professional mb-8">
              Our team of experts is ready to help you find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="text-center">
                <p className="text-professional">Email us at</p>
                <p className="text-primary font-semibold">services@globalcorp.com</p>
              </div>
              <div className="text-center">
                <p className="text-professional">Call us at</p>
                <p className="text-primary font-semibold">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <p className="text-professional">Available</p>
                <p className="text-foreground font-semibold">Monday - Friday, 9AM - 6PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};