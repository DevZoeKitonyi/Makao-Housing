
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Home, Calendar, User, ArrowRight, Search, ArrowLeft, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const blogPostId = parseInt(id || '1');

  // Mock blog post data
  const blogPost = {
    id: blogPostId,
    title: '10 Tips for First-Time Home Renters',
    content: `
      <p>Renting your first apartment or house can be both exciting and intimidating. As you embark on this journey towards independence, it's important to be prepared. Here are ten essential tips to help first-time renters navigate the process smoothly and find the perfect home.</p>
      
      <h3>1. Establish Your Budget</h3>
      <p>Before you start your search, determine how much you can afford to spend on rent. Financial experts recommend spending no more than 30% of your gross monthly income on housing. Remember to factor in additional costs like utilities, internet, parking fees, and renter's insurance.</p>
      
      <h3>2. Identify Your Needs vs. Wants</h3>
      <p>Make a list of features you absolutely need (e.g., proximity to work, number of bedrooms) versus those you'd like but could live without (e.g., swimming pool, hardwood floors). Being clear about your priorities will help you make better decisions when comparing properties.</p>
      
      <h3>3. Research Neighborhoods Thoroughly</h3>
      <p>Explore different neighborhoods to find one that matches your lifestyle and budget. Consider factors such as safety, public transportation access, proximity to amenities, and the overall vibe. Visit potential neighborhoods at different times of day to get a complete picture.</p>
      
      <h3>4. Start Your Search Early</h3>
      <p>Begin looking for rentals at least 60 days before your desired move-in date. This gives you enough time to explore options without feeling rushed into a decision. The best properties tend to rent quickly, so being prepared to act fast is important.</p>
      
      <h3>5. Prepare Your Application Documents</h3>
      <p>Have your documents ready before you start viewing properties. Landlords typically require proof of income (pay stubs or offer letter), identification, rental history, and references. Having these prepared will help you apply quickly when you find a place you love.</p>
      
      <h3>6. Inspect Properties Carefully</h3>
      <p>When viewing a property, check for issues such as water damage, mold, pest problems, and the functionality of appliances, plumbing, and electrical systems. Take photos and notes during your visit to compare properties later.</p>
      
      <h3>7. Understand the Lease Terms</h3>
      <p>Read your lease thoroughly before signing. Pay attention to terms regarding rent increases, maintenance responsibilities, pet policies, guest policies, and breaking the lease early. Don't hesitate to ask questions about anything unclear.</p>
      
      <h3>8. Consider Renter's Insurance</h3>
      <p>While not always required, renter's insurance is a smart investment that protects your belongings against theft, fire, and other disasters. It's usually affordable, typically costing between $15-30 per month.</p>
      
      <h3>9. Document the Property's Condition</h3>
      <p>Before moving in, conduct a detailed walk-through with your landlord and document any existing damage with photos and notes. This helps ensure you're not charged for pre-existing issues when moving out.</p>
      
      <h3>10. Establish Good Communication with Your Landlord</h3>
      <p>Building a positive relationship with your landlord from the beginning can make your rental experience much smoother. Be respectful, report issues promptly, and always pay rent on time.</p>
      
      <p>By following these tips, first-time renters can navigate the rental process with confidence and find a place that truly feels like home. Remember that patience is key – finding the right rental property is worth taking your time.</p>
    `,
    author: 'Sarah Johnson',
    authorRole: 'Rental Market Specialist',
    date: '2024-05-10',
    category: 'Renting Tips',
    image: '/placeholder.svg',
    tags: ['First-Time Renters', 'Rental Tips', 'Apartment Hunting', 'Lease Advice'],
    comments: [
      {
        id: 1,
        author: 'Michael Lee',
        date: '2024-05-15',
        content: 'This was incredibly helpful as I start my apartment search! The tip about documenting existing damage before moving in saved me a lot of hassle with my last landlord.'
      },
      {
        id: 2,
        author: 'Jessica Chen',
        date: '2024-05-14',
        content: 'I wish I had read this before signing my first lease. Great advice about understanding lease terms - I learned that lesson the hard way.'
      }
    ]
  };

  // Related posts
  const relatedPosts = [
    {
      id: 2,
      title: 'Understanding Rental Agreements: What to Look For',
      image: '/placeholder.svg',
      date: '2024-04-28'
    },
    {
      id: 3,
      title: '5 Questions to Ask During an Apartment Viewing',
      image: '/placeholder.svg',
      date: '2024-04-15'
    },
    {
      id: 4,
      title: 'How to Budget for Your First Apartment',
      image: '/placeholder.svg',
      date: '2024-04-02'
    }
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

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-2/3">
              {/* Breadcrumbs */}
              <div className="mb-6 text-sm text-gray-600">
                <Link to="/" className="hover:text-blue-600">Home</Link>
                <span className="mx-2">{'>'}</span>
                <Link to="/blog" className="hover:text-blue-600">Blog</Link>
                <span className="mx-2">{'>'}</span>
                <span>{blogPost.title}</span>
              </div>

              {/* Back to Blog */}
              <div className="mb-6">
                <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to all articles
                </Link>
              </div>

              <Card className="overflow-hidden mb-8">
                {/* Post Image */}
                <div className="h-72 overflow-hidden">
                  <img 
                    src={blogPost.image} 
                    alt={blogPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardContent className="p-8">
                  {/* Category & Meta */}
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {blogPost.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {blogPost.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(blogPost.date)}
                    </div>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {blogPost.title}
                  </h1>

                  {/* Post Content */}
                  <div 
                    className="prose max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-600 mb-8"
                    dangerouslySetInnerHTML={{ __html: blogPost.content }}
                  />

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPost.tags.map((tag, i) => (
                      <Link 
                        key={i} 
                        to={`/blog/tag/${tag.toLowerCase().replace(' ', '-')}`}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>

                  {/* Share & Like */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Share:</span>
                      <Button variant="outline" size="sm" className="rounded-full h-8 w-8 p-0">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-full h-8 w-8 p-0">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                        </svg>
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-full h-8 w-8 p-0">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </Button>
                    </div>
                    <Button variant="ghost" className="gap-1">
                      <Heart className="h-4 w-4" />
                      <span>Like</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Author Box */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="h-8 w-8 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{blogPost.author}</h3>
                      <p className="text-sm text-gray-600">{blogPost.authorRole}</p>
                      <p className="text-sm text-gray-600 mt-2">
                        Sarah is a real estate specialist with over 10 years of experience in the rental market. She specializes in helping first-time renters find their perfect homes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comments Section */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Comments ({blogPost.comments.length})</h3>
                  <div className="space-y-4">
                    {blogPost.comments.map(comment => (
                      <div key={comment.id} className="border-b pb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <User className="h-4 w-4 text-gray-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                            <p className="text-xs text-gray-500">{formatDate(comment.date)}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 ml-10">{comment.content}</p>
                      </div>
                    ))}
                  </div>

                  {/* Add Comment Form */}
                  <div className="mt-8">
                    <h4 className="font-semibold mb-4">Leave a Comment</h4>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                          </label>
                          <Input id="name" placeholder="Your name" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <Input id="email" type="email" placeholder="Your email" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                          Comment
                        </label>
                        <Textarea id="comment" placeholder="Write your comment here..." rows={4} />
                      </div>
                      <Button type="submit">
                        Post Comment
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {relatedPosts.map(post => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="text-xs text-gray-500 mb-1">
                          {formatDate(post.date)}
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h4>
                        <Link to={`/blog/${post.id}`} className="text-sm text-blue-600 hover:text-blue-700 flex items-center">
                          Read Article <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/3 space-y-6">
              {/* Search */}
              <Card>
                <CardContent className="p-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search articles..." className="pl-10" />
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/blog/category/renting-tips" className="flex justify-between items-center text-gray-700 hover:text-blue-600">
                        <span>Renting Tips</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">12</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog/category/for-landlords" className="flex justify-between items-center text-gray-700 hover:text-blue-600">
                        <span>For Landlords</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">15</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog/category/market-trends" className="flex justify-between items-center text-gray-700 hover:text-blue-600">
                        <span>Market Trends</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">8</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog/category/legal" className="flex justify-between items-center text-gray-700 hover:text-blue-600">
                        <span>Legal</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">6</span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {relatedPosts.map(post => (
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
                </CardContent>
              </Card>

              {/* Tags Cloud */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Rental Tips', 'Apartment', 'Lease', 'First Time Renters', 'Budget', 'Legal',
                      'Inspection', 'Landlord', 'Moving', 'Roommates', 'Utilities'].map((tag, i) => (
                      <Link 
                        key={i} 
                        to={`/blog/tag/${tag.toLowerCase().replace(' ', '-')}`}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card>
                <CardContent className="p-6 bg-blue-50">
                  <h3 className="font-semibold mb-2">Subscribe to Our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest property insights and tips delivered to your inbox.
                  </p>
                  <div className="space-y-2">
                    <Input placeholder="Your email address" />
                    <Button className="w-full">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

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

export default BlogDetail;
