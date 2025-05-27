
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const Blog = () => {
  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: '10 Tips for First-Time Home Renters',
      excerpt: 'Renting your first apartment or house can be exciting and intimidating. Here are ten essential tips to help you navigate the process smoothly.',
      author: 'Sarah Johnson',
      date: '2024-05-10',
      category: 'Renting Tips',
      image: '/placeholder.svg',
      featured: true
    },
    {
      id: 2,
      title: 'How to Maximize Your Property's Rental Value',
      excerpt: 'As a landlord, getting the best return on your investment is crucial. Learn about improvements and strategies that can increase your property's rental value.',
      author: 'John Smith',
      date: '2024-05-05',
      category: 'For Landlords',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 3,
      title: 'Understanding Rental Agreements: What to Look For',
      excerpt: 'Before signing a lease, make sure you understand all the terms. This guide helps you identify important clauses and potential red flags in rental agreements.',
      author: 'Emily Chen',
      date: '2024-04-28',
      category: 'Legal',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 4,
      title: '5 Emerging Real Estate Markets to Watch in 2024',
      excerpt: 'Looking to invest in real estate? These five markets are showing promising growth and could offer excellent returns for property investors.',
      author: 'Michael Brown',
      date: '2024-04-20',
      category: 'Market Trends',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 5,
      title: 'Creating a Pet-Friendly Rental Property',
      excerpt: 'Allowing pets in your rental property can expand your tenant pool. Learn how to make your property pet-friendly while protecting your investment.',
      author: 'Jessica Williams',
      date: '2024-04-15',
      category: 'For Landlords',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 6,
      title: 'The Impact of Remote Work on Rental Markets',
      excerpt: 'As remote work becomes more common, rental markets are shifting. Discover how these changes could affect property values and tenant preferences.',
      author: 'Robert Kim',
      date: '2024-04-08',
      category: 'Market Trends',
      image: '/placeholder.svg',
      featured: false
    }
  ];

  // Categories for sidebar
  const categories = [
    { name: 'Renting Tips', count: 12 },
    { name: 'For Landlords', count: 15 },
    { name: 'Market Trends', count: 8 },
    { name: 'Legal', count: 6 },
    { name: 'Interior Design', count: 9 },
    { name: 'Neighborhood Guides', count: 5 }
  ];

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">PropertyHub</h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/properties" className="text-gray-700 hover:text-blue-600">Properties</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
              <Link to="/blog" className="text-blue-600 font-medium">Blog</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              PropertyHub Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tips, and expert advice on property rental,
              management, and real estate trends.
            </p>
          </div>
          
          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map(featuredPost => (
            <div key={featuredPost.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-1/2">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-1">
                    {featuredPost.category} • Featured Post
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="h-4 w-4 mr-1" />
                    {featuredPost.author}
                    <span className="mx-2">•</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(featuredPost.date)}
                  </div>
                  <Link to={`/blog/${featuredPost.id}`}>
                    <Button>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content - Blog Posts */}
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h3>
              <div className="grid grid-cols-1 gap-8">
                {/* Filter out featured post */}
                {blogPosts.filter(post => !post.featured).map(post => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="uppercase tracking-wide text-xs text-blue-600 font-semibold mb-1">
                          {post.category}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {post.title}
                        </h4>
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                          <span className="mx-2">•</span>
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(post.date)}
                        </div>
                        <Link to={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-10">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" disabled>Previous</Button>
                  <Button variant="outline" className="bg-blue-600 text-white">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/3">
              {/* Search */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h4 className="text-lg font-semibold mb-4">Search Blog</h4>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search articles..." className="pl-10" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h4 className="text-lg font-semibold mb-4">Categories</h4>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link to={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`} className="flex justify-between items-center text-gray-700 hover:text-blue-600">
                        <span>{category.name}</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">{category.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h4 className="text-lg font-semibold mb-4">Popular Posts</h4>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map(post => (
                    <div key={post.id} className="flex items-start space-x-3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <Link to={`/blog/${post.id}`} className="font-medium text-gray-900 hover:text-blue-600 block">
                          {post.title}
                        </Link>
                        <div className="text-xs text-gray-500 mt-1">
                          {formatDate(post.date)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest property insights and tips delivered to your inbox.
                </p>
                <div className="space-y-2">
                  <Input placeholder="Your email address" />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Home className="h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-bold">PropertyHub</h3>
              </div>
              <p className="text-gray-400">
                Your trusted partner in finding the perfect home.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/properties" className="text-gray-400 hover:text-white">Properties</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Users</h4>
              <ul className="space-y-2">
                <li><Link to="/login" className="text-gray-400 hover:text-white">Login</Link></li>
                <li><Link to="/register" className="text-gray-400 hover:text-white">Register</Link></li>
                <li><Link to="/wishlist" className="text-gray-400 hover:text-white">Wishlist</Link></li>
                <li><Link to="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>123 Real Estate St.</p>
                <p>City, State 12345</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@propertyhub.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PropertyHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
