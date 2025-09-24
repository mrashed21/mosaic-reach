import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Mail,
  Search,
  Tag,
  TrendingUp,
  User
} from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Blog: React.FC = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Transformation in 2024",
      excerpt: "Explore the latest trends and technologies shaping digital transformation strategies for businesses worldwide.",
      content: "Digital transformation continues to evolve rapidly, with AI and machine learning leading the charge...",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Technology",
      tags: ["Digital Transformation", "AI", "Business Strategy"],
      featured: true
    },
    {
      id: 2,
      title: "Cloud Security Best Practices for Enterprises",
      excerpt: "Essential security measures every enterprise should implement when moving to the cloud.",
      content: "As more businesses migrate to cloud platforms, security becomes a paramount concern...",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Security",
      tags: ["Cloud Security", "Enterprise", "Best Practices"],
      featured: true
    },
    {
      id: 3,
      title: "Building Scalable APIs: A Developer's Guide",
      excerpt: "Learn how to design and build APIs that can handle millions of requests efficiently.",
      content: "Scalable API design is crucial for modern applications that need to serve millions of users...",
      author: "David Rodriguez",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Development",
      tags: ["API Design", "Scalability", "Backend"],
      featured: false
    },
    {
      id: 4,
      title: "UX Design Trends That Will Dominate 2024",
      excerpt: "Discover the latest UX design trends that are reshaping user experiences across industries.",
      content: "User experience design continues to evolve with new technologies and changing user expectations...",
      author: "Emily Davis",
      date: "March 8, 2024",
      readTime: "5 min read",
      category: "Design",
      tags: ["UX Design", "Trends", "User Experience"],
      featured: false
    },
    {
      id: 5,
      title: "Machine Learning in Business: Real-World Applications",
      excerpt: "How companies are leveraging machine learning to solve complex business problems.",
      content: "Machine learning has moved from the realm of research into practical business applications...",
      author: "Dr. Amanda White",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "AI & ML",
      tags: ["Machine Learning", "Business Intelligence", "Innovation"],
      featured: false
    },
    {
      id: 6,
      title: "DevOps Culture: Building High-Performance Teams",
      excerpt: "Creating a DevOps culture that drives collaboration and accelerates software delivery.",
      content: "DevOps is more than just tools and processes—it's about building a culture of collaboration...",
      author: "James Wilson",
      date: "March 3, 2024",
      readTime: "7 min read",
      category: "DevOps",
      tags: ["DevOps", "Team Culture", "Collaboration"],
      featured: false
    }
  ];

  const categories = ["All", "Technology", "Security", "Development", "Design", "AI & ML", "DevOps"];
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 4);
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  const authors = [
    {
      name: "Sarah Johnson",
      role: "CTO & Tech Strategist",
      bio: "15+ years of experience in digital transformation and emerging technologies.",
      posts: 12,
      image: "👩‍💻"
    },
    {
      name: "Michael Chen",
      role: "Cybersecurity Expert",
      bio: "Former security consultant with expertise in enterprise security solutions.",
      posts: 8,
      image: "👨‍💼"
    },
    {
      name: "Emily Davis",
      role: "UX Design Lead",
      bio: "Award-winning designer focused on creating exceptional user experiences.",
      posts: 15,
      image: "👩‍🎨"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 1. Blog List Section */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="heading-xl text-foreground mb-6">
              {t('blogList')}
            </h1>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Stay informed with the latest insights, trends, and best practices in technology and business.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.slice(0, 4).map((category) => (
                  <Button key={category} variant="outline" size="sm">
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="professional-card group hover:shadow-professional-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{post.category}</Badge>
                    {post.featured && <Badge className="bg-primary">Featured</Badge>}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-professional mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    {t('readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Categories Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('categories')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Explore our content organized by topics that matter to your business.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(1).map((category) => (
              <Card key={category} className="professional-card text-center p-6 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group">
                <BookOpen className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold">{category}</h3>
                <p className="text-sm text-professional group-hover:text-white/80 mt-1">
                  {blogPosts.filter(post => post.category === category).length} articles
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Posts Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('featuredPosts')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Don't miss these carefully selected articles that provide deep insights into current industry topics.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="professional-card flex flex-col md:flex-row overflow-hidden">
                <div className="md:w-1/3 bg-gradient-primary p-8 flex items-center justify-center">
                  <div className="text-white text-center">
                    <BookOpen className="h-12 w-12 mx-auto mb-4" />
                    <Badge className="bg-white text-primary">Featured</Badge>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <Badge variant="outline" className="mb-3">{post.category}</Badge>
                  <CardTitle className="mb-3 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                  <div className="flex items-center justify-between text-sm text-professional mb-4">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <Button className="btn-hero">
                    {t('readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Recent Posts Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('recentPosts')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Stay up-to-date with our latest articles and insights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.id} className="professional-card flex gap-4">
                <div className="w-20 h-20 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <Badge variant="outline" className="mb-2">{post.category}</Badge>
                  <CardTitle className="text-lg mb-2 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-professional mb-2">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <p className="text-professional text-sm">{post.excerpt.slice(0, 100)}...</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Newsletter Subscription Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <Mail className="h-12 w-12 text-white mx-auto mb-6" />
            <h2 className="heading-lg text-white mb-4">
              {t('newsletter')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest articles and insights delivered directly to your inbox. No spam, just valuable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              Join 5,000+ professionals who trust our insights
            </p>
          </div>
        </div>
      </section>

      {/* 6. Tags Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('tags')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Discover content by exploring our most popular tags and topics.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant="outline"
                  className="hover:bg-primary hover:text-white transition-colors"
                >
                  <Tag className="h-4 w-4 mr-2" />
                  {tag}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Popular Tags Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="professional-card p-6 text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">50+</h3>
              <p className="text-professional">Topics Covered</p>
            </div>
            <div className="professional-card p-6 text-center">
              <BookOpen className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">100+</h3>
              <p className="text-professional">Articles Published</p>
            </div>
            <div className="professional-card p-6 text-center">
              <User className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">10+</h3>
              <p className="text-professional">Expert Authors</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Author Highlight Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              {t('authorHighlight')}
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Meet the experts behind our insightful content and industry analysis.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {authors.map((author, index) => (
              <Card key={index} className="professional-card text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{author.image}</div>
                  <CardTitle>{author.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {author.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-professional mb-4">{author.bio}</p>
                  <div className="professional-card p-4 bg-secondary/50">
                    <div className="text-2xl font-bold text-foreground">{author.posts}</div>
                    <div className="text-sm text-professional">Articles Published</div>
                  </div>
                  <Button variant="outline" className="mt-4 w-full">
                    View Articles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="section-padding bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg text-foreground mb-6">
              Have a Topic You'd Like Us to Cover?
            </h2>
            <p className="text-xl text-professional mb-8">
              We're always looking for new topics and insights to share with our community. 
              Let us know what you'd like to read about next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero">
                Suggest a Topic
              </Button>
              <Button size="lg" variant="outline">
                Become a Contributor
              </Button>
            </div>
            <div className="mt-8 professional-card p-6 bg-primary/5 border border-primary/20">
              <p className="text-professional">
                <strong>Guest Writers Welcome!</strong> We're always interested in hearing from industry experts 
                who want to share their knowledge with our community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};