import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Globe,
  HeadphonesIcon,
  Star,
  CheckCircle
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email for detailed inquiries",
      contact: "info@globalcorp.com",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      action: "Call Now"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant support through live chat",
      contact: "Available 24/7",
      action: "Start Chat"
    }
  ];

  const offices = [
    {
      city: "New York",
      address: "123 Business Avenue, Suite 100",
      postal: "New York, NY 10001",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri: 9AM-6PM EST"
    },
    {
      city: "London",
      address: "45 Tech Street, Floor 5",
      postal: "London, UK EC1A 1BB",
      phone: "+44 20 1234 5678",
      hours: "Mon-Fri: 9AM-6PM GMT"
    },
    {
      city: "Singapore",
      address: "88 Innovation Drive, Level 10",
      postal: "Singapore 123456",
      phone: "+65 6123 4567",
      hours: "Mon-Fri: 9AM-6PM SGT"
    }
  ];

  const supportTypes = [
    {
      title: "Technical Support",
      description: "Help with technical issues and troubleshooting",
      email: "support@globalcorp.com",
      hours: "24/7 Available",
      response: "< 2 hours"
    },
    {
      title: "Sales Inquiries",
      description: "Information about our services and pricing",
      email: "sales@globalcorp.com",
      hours: "Mon-Fri: 9AM-6PM",
      response: "< 4 hours"
    },
    {
      title: "Partnership",
      description: "Explore partnership and collaboration opportunities",
      email: "partners@globalcorp.com",
      hours: "Mon-Fri: 9AM-5PM",
      response: "< 1 day"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Tech Innovations Inc.",
      message: "Outstanding support team! They resolved our issue within hours.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      company: "Digital Solutions Ltd",
      message: "Professional, knowledgeable, and always available when we need them.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      company: "Global Enterprises",
      message: "The best customer service experience we've had with any vendor.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 1. Contact Form Section */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="heading-xl text-foreground mb-6">
              {t('contactForm')}
            </h1>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Ready to get started? Send us a message and we'll respond within 24 hours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="professional-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-5 w-5 text-primary" />
                  <span>Send us a Message</span>
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="john.doe@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Company</label>
                  <Input placeholder="Your Company Name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                  <Input placeholder="How can we help you?" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your project or inquiry..."
                    rows={5}
                  />
                </div>
                <Button className="w-full btn-hero">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Quick Contact Methods */}
            <div className="space-y-6">
              <h2 className="heading-md text-foreground mb-6">Other Ways to Reach Us</h2>
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="professional-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2">{method.title}</h3>
                          <p className="text-professional mb-2">{method.description}</p>
                          <p className="text-primary font-medium mb-3">{method.contact}</p>
                          <Button variant="outline" size="sm">
                            {method.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Location Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('location')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Visit us at any of our global offices or connect with us remotely from anywhere in the world.
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="mb-12">
            <div className="professional-card p-8 bg-gradient-secondary text-center rounded-lg h-80 flex items-center justify-center">
              <div>
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">Interactive Map</h3>
                <p className="text-professional">
                  Our global offices are strategically located to serve clients worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="professional-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{office.city}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-foreground font-medium">{office.address}</p>
                    <p className="text-professional">{office.postal}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-professional">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-professional">{office.hours}</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Phone & Email Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('phoneEmail')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Connect with us directly through phone or email for immediate assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Phone Contact */}
            <Card className="professional-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Call Us Directly</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-professional">Main Office</p>
                    <p className="text-xl font-semibold text-primary">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="text-professional">Sales Department</p>
                    <p className="text-xl font-semibold text-primary">+1 (555) 123-4568</p>
                  </div>
                  <div>
                    <p className="text-professional">Technical Support</p>
                    <p className="text-xl font-semibold text-primary">+1 (555) 123-4569</p>
                  </div>
                </div>
                <Button className="btn-hero">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            {/* Email Contact */}
            <Card className="professional-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Email Us</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-professional">General Inquiries</p>
                    <p className="text-lg font-semibold text-primary">info@globalcorp.com</p>
                  </div>
                  <div>
                    <p className="text-professional">Sales Questions</p>
                    <p className="text-lg font-semibold text-primary">sales@globalcorp.com</p>
                  </div>
                  <div>
                    <p className="text-professional">Technical Support</p>
                    <p className="text-lg font-semibold text-primary">support@globalcorp.com</p>
                  </div>
                </div>
                <Button className="btn-hero">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Social Media Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('socialMedia')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Follow us on social media for the latest updates, insights, and behind-the-scenes content.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="professional-card text-center group hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors">
              <CardContent className="p-6">
                <Facebook className="h-10 w-10 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">Facebook</h3>
                <p className="text-professional text-sm mb-4">Follow for company updates</p>
                <Button variant="outline" size="sm" className="w-full">
                  Follow Us
                </Button>
              </CardContent>
            </Card>

            <Card className="professional-card text-center group hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors">
              <CardContent className="p-6">
                <Twitter className="h-10 w-10 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">Twitter</h3>
                <p className="text-professional text-sm mb-4">Latest news and insights</p>
                <Button variant="outline" size="sm" className="w-full">
                  Follow Us
                </Button>
              </CardContent>
            </Card>

            <Card className="professional-card text-center group hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors">
              <CardContent className="p-6">
                <Linkedin className="h-10 w-10 text-blue-700 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
                <p className="text-professional text-sm mb-4">Professional networking</p>
                <Button variant="outline" size="sm" className="w-full">
                  Connect
                </Button>
              </CardContent>
            </Card>

            <Card className="professional-card text-center group hover:bg-pink-50 dark:hover:bg-pink-950 transition-colors">
              <CardContent className="p-6">
                <Instagram className="h-10 w-10 text-pink-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">Instagram</h3>
                <p className="text-professional text-sm mb-4">Behind the scenes</p>
                <Button variant="outline" size="sm" className="w-full">
                  Follow Us
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Social Media Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <p className="text-professional">Social Media Followers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-professional">Posts Shared</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <p className="text-professional">Engagement Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Office Hours Section */}
      <section className="section-padding bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('officeHours')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              We're here when you need us. Check our availability across different time zones.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="professional-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Americas (EST)</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-professional">Monday - Friday</span>
                  <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-professional">Saturday</span>  
                  <span className="text-foreground font-medium">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-professional">Sunday</span>
                  <span className="text-foreground font-medium">Closed</span>
                </div>
                <Badge className="bg-success text-white">Available Now</Badge>
              </CardContent>
            </Card>

            <Card className="professional-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Europe (GMT)</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-professional">Monday - Friday</span>
                  <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-professional">Saturday</span>
                  <span className="text-foreground font-medium">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-professional">Sunday</span>
                  <span className="text-foreground font-medium">Closed</span>
                </div>
                <Badge className="bg-success text-white">Available Now</Badge>
              </CardContent>
            </Card>

            <Card className="professional-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Asia Pacific (SGT)</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-professional">Monday - Friday</span>
                  <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-professional">Saturday</span>
                  <span className="text-foreground font-medium">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-professional">Sunday</span>
                  <span className="text-foreground font-medium">Closed</span>
                </div>
                <Badge variant="outline">After Hours</Badge>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Contact */}
          <div className="mt-12 text-center professional-card p-6 bg-primary/5 border border-primary/20">
            <HeadphonesIcon className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Emergency Support</h3>
            <p className="text-professional mb-4">
              For critical issues outside business hours, our emergency support team is available 24/7.
            </p>
            <Button variant="outline">
              Emergency Contact: +1 (555) 999-8888
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Support Information Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('supportInfo')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Get the right type of support for your specific needs with our specialized teams.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTypes.map((support, index) => (
              <Card key={index} className="professional-card">
                <CardHeader>
                  <CardTitle className="text-xl">{support.title}</CardTitle>
                  <CardDescription>{support.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-primary font-medium">{support.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-professional">{support.hours}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-professional">Response time: {support.response}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Contact {support.title.split(' ')[0]}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Feedback Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('feedback')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              We value your feedback and continuously strive to improve our services based on your input.
            </p>
          </div>
          
          {/* Customer Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="professional-card">
                <CardHeader>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-lg italic">
                    "{testimonial.message}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-professional text-sm">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feedback Form */}
          <Card className="professional-card max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Share Your Feedback</CardTitle>
              <CardDescription className="text-center">
                Help us improve by sharing your experience with our services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Overall Rating</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Star
                      key={rating}
                      className="h-8 w-8 text-yellow-400 cursor-pointer hover:fill-current transition-colors"
                    />
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Your Feedback</label>
                <Textarea 
                  placeholder="Tell us about your experience..."
                  rows={4}
                />
              </div>
              <Button className="w-full btn-hero">
                Submit Feedback
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Globe className="h-12 w-12 text-white mx-auto mb-6" />
            <h2 className="heading-lg text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help transform your business with our innovative solutions. 
              Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule a Call
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Get a Quote
              </Button>
            </div>
            <div className="mt-8 text-white/70">
              <p>🚀 Average project start time: 1-2 weeks</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};