
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Bell, BellOff, Check, X, Calendar, DollarSign, AlertCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import MakaoHeader from "@/components/MakaoHeader";

// Extracted helper
function NotificationIcon({ type }: { type: string }) {
  switch (type) {
    case 'payment_reminder':
      return <DollarSign className="h-5 w-5 text-orange-600" />;
    case 'maintenance':
      return <AlertCircle className="h-5 w-5 text-blue-600" />;
    case 'payment_confirmation':
      return <Check className="h-5 w-5 text-green-600" />;
    case 'lease_renewal':
      return <Calendar className="h-5 w-5 text-purple-600" />;
    default:
      return <Bell className="h-5 w-5 text-gray-600" />;
  }
}

function PriorityBadge({ priority }: { priority: string }) {
  switch (priority) {
    case 'high':
      return <Badge className="bg-red-100 text-red-800">{priority}</Badge>;
    case 'medium':
      return <Badge className="bg-yellow-100 text-yellow-800">{priority}</Badge>;
    case 'low':
      return <Badge className="bg-green-100 text-green-800">{priority}</Badge>;
    default:
      return <Badge className="bg-gray-100 text-gray-800">{priority}</Badge>;
  }
}

function formatTimestamp(timestamp: string) {
  const date = new Date(timestamp);
  return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'payment_reminder',
      title: 'Rent Payment Due Soon',
      message: 'Your rent payment of KSh 25,000 is due on June 1st, 2024. Set up auto-pay to never miss a payment.',
      timestamp: '2024-05-28T10:00:00Z',
      isRead: false,
      priority: 'high',
      actionRequired: true,
      landlord: 'John Smith',
      property: 'Modern Downtown Apartment'
    },
    {
      id: 2,
      type: 'maintenance',
      title: 'Maintenance Scheduled',
      message: 'HVAC maintenance has been scheduled for June 5th, 2024 between 9:00 AM - 12:00 PM. Please ensure someone is available.',
      timestamp: '2024-05-27T14:30:00Z',
      isRead: false,
      priority: 'medium',
      actionRequired: false,
      landlord: 'John Smith',
      property: 'Modern Downtown Apartment'
    },
    {
      id: 3,
      type: 'payment_confirmation',
      title: 'Payment Received',
      message: 'Your rent payment of KSh 25,000 for May 2024 has been successfully processed.',
      timestamp: '2024-05-01T09:15:00Z',
      isRead: true,
      priority: 'low',
      actionRequired: false,
      landlord: 'John Smith',
      property: 'Modern Downtown Apartment'
    },
    {
      id: 4,
      type: 'lease_renewal',
      title: 'Lease Renewal Available',
      message: 'Your lease is expiring in 3 months. Would you like to renew for another year?',
      timestamp: '2024-05-25T16:45:00Z',
      isRead: false,
      priority: 'medium',
      actionRequired: true,
      landlord: 'John Smith',
      property: 'Modern Downtown Apartment'
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notif => ({ ...notif, isRead: true }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <MakaoHeader />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20 md:pb-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-3">
            <Bell className="h-8 w-8 text-green-700" />
            <div>
              <h1 className="text-2xl font-bold text-black">Notifications</h1>
              <p className="text-gray-600">Stay updated with important messages for you</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {unreadCount > 0 && (
              <Badge className="bg-red-100 text-red-800">
                {unreadCount} unread
              </Badge>
            )}
            <Button variant="outline" onClick={markAllAsRead} disabled={unreadCount === 0} className="border-green-700 text-green-700">
              <Check className="h-4 w-4 mr-2" />
              Mark All Read
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Next Payment Due</p>
                  <p className="text-lg font-semibold">June 1st</p>
                </div>
                <Link to="/rent-payment">
                  <Button size="sm" className="bg-green-700 text-white hover:bg-red-700">Pay Now</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Auto-Pay Status</p>
                  <p className="text-lg font-semibold text-red-600">Disabled</p>
                </div>
                <Link to="/rent-payment">
                  <Button variant="outline" size="sm" className="border-green-700 text-green-700">Setup</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Unread Messages</p>
                  <p className="text-lg font-semibold">{unreadCount}</p>
                </div>
                <Bell className="h-6 w-6 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notifications List */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            {notifications.length === 0 ? (
              <div className="text-center py-8">
                <BellOff className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No notifications yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border rounded-lg ${
                      notification.isRead ? 'bg-gray-50' : 'bg-white border-green-200'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <NotificationIcon type={notification.type} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className={`font-medium ${!notification.isRead ? 'text-black' : 'text-gray-700'}`}>
                                {notification.title}
                              </h3>
                              <PriorityBadge priority={notification.priority} />
                              {notification.actionRequired && (
                                <Badge className="bg-orange-100 text-orange-800">
                                  Action Required
                                </Badge>
                              )}
                            </div>
                            <p className="text-gray-600 mb-2">{notification.message}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {formatTimestamp(notification.timestamp)}
                              </span>
                              <span>From: {notification.landlord}</span>
                              <span>Property: {notification.property}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 ml-4">
                            {!notification.isRead && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => markAsRead(notification.id)}
                              >
                                <Check className="h-4 w-4" />
                              </Button>
                            )}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => deleteNotification(notification.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        {notification.actionRequired && (
                          <div className="mt-3 flex space-x-2">
                            {notification.type === 'payment_reminder' && (
                              <>
                                <Link to="/rent-payment">
                                  <Button size="sm" className="bg-green-700 text-white hover:bg-red-700">Pay Now</Button>
                                </Link>
                                <Link to="/rent-payment">
                                  <Button variant="outline" size="sm" className="border-green-700 text-green-700">Setup Auto-Pay</Button>
                                </Link>
                              </>
                            )}
                            {notification.type === 'lease_renewal' && (
                              <>
                                <Button size="sm" className="bg-green-700 text-white hover:bg-red-700">Renew Lease</Button>
                                <Button variant="outline" size="sm" className="border-green-700 text-green-700">Contact Landlord</Button>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Notifications;

