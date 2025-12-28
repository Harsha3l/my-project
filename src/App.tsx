import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
// import WebHosting from "./pages/WebHosting";
// import WordPressHosting from "./pages/WordPressHosting";
// import N8nHosting from "./pages/N8nHosting";
// import EcommerceHosting from "./pages/EcommerceHosting";
// import VpsHosting from "./pages/VpsHosting";
// import DomainRegister from "./pages/DomainRegister";
// import DomainTransfer from "./pages/DomainTransfer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Templates from "./pages/Templates";
import N8nTemplates from "./pages/N8nTemplates";
// import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<Pricing />} />
            {/* <Route path="/web-hosting" element={<WebHosting />} />
            <Route path="/wordpress-hosting" element={<WordPressHosting />} />
            <Route path="/n8n-hosting" element={<N8nHosting />} />
            <Route path="/ecommerce-hosting" element={<EcommerceHosting />} />
            <Route path="/vps-hosting" element={<VpsHosting />} />
            <Route path="/domains/register" element={<DomainRegister />} />
            <Route path="/domains/transfer" element={<DomainTransfer />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/templates/n8n" element={<N8nTemplates />} />
            <Route path="/templates/wordpress" element={<Templates />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
