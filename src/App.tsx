import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import MobileNavigation from "./components/MobileNavigation";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";
import RentPayment from "./pages/RentPayment";
import Receipt from "./pages/Receipt";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import SubscriptionPayment from "./pages/SubscriptionPayment";
import Wishlist from "./pages/Wishlist";
import Notifications from "./pages/Notifications";
import DashboardNotifications from "./pages/DashboardNotifications";
import DashboardTenants from "./pages/DashboardTenants";
import DashboardProperties from "./pages/DashboardProperties";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <div className="min-h-screen flex flex-col pb-16 md:pb-0">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard/*" element={<Dashboard />}>
              <Route path="notifications" element={<DashboardNotifications />} />
              <Route path="tenants" element={<DashboardTenants />} />
              <Route path="properties" element={<DashboardProperties />} />
            </Route>
            <Route path="/payment" element={<Payment />} />
            <Route path="/rent-payment" element={<RentPayment />} />
            <Route path="/subscription-payment" element={<SubscriptionPayment />} />
            <Route path="/receipt" element={<Receipt />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <MobileNavigation />
        </div>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
