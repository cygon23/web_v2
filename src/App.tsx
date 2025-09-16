import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Index from "./pages/Index";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";
import LoadingScreen from "@/components/Loading";
import ProjectsPage from "./pages/ProjectsPage";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // simulate load
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Cookie consent shown on all pages */}
          <CookieConsent />
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/about' element={<About />} />
            <Route path='/activities' element={<Activities />} />
            <Route path='/events' element={<Events />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/team' element={<Team />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />

            {/* 👇 NEW projects route */}
            <Route path='/projects' element={<ProjectsPage />} />

            {/* Catch-all 404 route */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
