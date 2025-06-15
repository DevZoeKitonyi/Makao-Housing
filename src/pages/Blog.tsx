
import React from "react";
import { Link } from "react-router-dom";
import MakaoHeader from "@/components/MakaoHeader";
import MakaoSectionHeader from "@/components/MakaoSectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const posts = [
  {
    id: 1,
    title: "How to Find Affordable Apartments in Nairobi",
    date: "2024-05-31",
    preview: "Tips and tricks for finding a great place to stay in the city while keeping your budget low...",
    author: "Jane Mwangi",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Landlord Rights & Tenant Responsibilities in Kenya",
    date: "2024-06-02",
    preview: "Understand your rights and responsibilities as you rent or lease property in the Kenyan market...",
    author: "Makao Editorial Team",
    image: "/placeholder.svg",
  },
];

const Blog = () => (
  <div className="min-h-screen bg-gray-50 pb-16">
    <MakaoHeader />
    <div className="max-w-4xl mx-auto px-4 py-10">
      <MakaoSectionHeader
        title="Makao Blog"
        subtitle="Guides and insights for renters and landlords in Kenya."
      />
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {posts.map((post) => (
          <Card key={post.id} className="border-green-700 hover:shadow-xl transition-shadow">
            <CardContent className="p-6 space-y-4">
              <img src={post.image} alt={post.title} className="w-full h-36 object-cover rounded" />
              <h3 className="text-lg font-bold text-black">{post.title}</h3>
              <div className="text-xs text-gray-500 mb-2">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</div>
              <p className="text-gray-700">{post.preview}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-green-700">{post.author}</span>
                <Link to={`/blog/${post.id}`}>
                  <Button variant="outline" size="sm" className="border-green-700 text-green-700">Read More</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Link to="/properties">
          <Button className="bg-red-700 hover:bg-green-700 text-white">Start Your Search</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default Blog;
