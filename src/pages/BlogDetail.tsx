
import React from "react";
import { useParams, Link } from "react-router-dom";
import MakaoHeader from "@/components/MakaoHeader";
import MakaoSectionHeader from "@/components/MakaoSectionHeader";
import { Button } from "@/components/ui/button";

const posts = [
  {
    id: "1",
    title: "How to Find Affordable Apartments in Nairobi",
    date: "2024-05-31",
    author: "Jane Mwangi",
    image: "/placeholder.svg",
    content: [
      "Nairobi is a lively city with great options at every budget. To find affordable options, start your search early, filter by location, and use platforms like Makao.",
      "Set a realistic budget and always visit the property in person before committing. Look out for amenities, security, and proximity to public services.",
      "Makao helps you compare properties, chat with verified landlords, and manage your shortlist easily."
    ]
  },
  {
    id: "2",
    title: "Landlord Rights & Tenant Responsibilities in Kenya",
    date: "2024-06-02",
    author: "Makao Editorial Team",
    image: "/placeholder.svg",
    content: [
      "Both landlords and tenants have rights and responsibilities under Kenyan law. Tenants should pay rent on time, keep the property clean, and report issues early.",
      "Landlords must maintain the property, respect privacy, and handle deposits transparently.",
      "Makao aims to make these relationships smoother for everyone with fair, clear resources and easy-to-use features."
    ]
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = posts.find((item) => item.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <MakaoHeader />
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Blog article not found.</h2>
          <Link to="/blog">
            <Button className="bg-red-700 hover:bg-green-700 text-white">Go Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MakaoHeader />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <MakaoSectionHeader title={post.title} subtitle={`By ${post.author} · ${new Date(post.date).toLocaleDateString()}`} />
        <img src={post.image} alt={post.title} className="w-full h-56 object-cover rounded mb-8" />
        <div className="space-y-6 text-lg text-gray-700 bg-white p-6 rounded shadow">
          {post.content.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/blog">
            <Button variant="outline" className="border-green-700 text-green-700">Back to Blog</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
