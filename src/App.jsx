import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import Development from "./pages/Development";
import Index from "./pages/Index";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Clients from "./pages/Clients";
import Portfolio from "./pages/Portfolio";
import GetStarted from "./pages/GetStarted";
import CursorRings from "./components/ui/Rings";

// Development pages
import WebDevelopment from "./pages/development/WebDevelopment";
import SocialMediaMarketing from "./pages/development/SocialMediaMarketing";
import ContentWriting from "./pages/development/ContentWriting";
import GraphicsDesigner from "./pages/development/GraphicsDesigner";
import SoftwareDevelopment from "./pages/development/SoftwareDevelopment";
import AppDevelopment from "./pages/development/AppDevelopment";

// Services pages
import BulkSms from "./pages/services/BulkSms";
import VoiceSms from "./pages/services/VoiceSms";
import WhatsappPanel from "./pages/services/WhatsappPanel";
import WhatsappMarketing from "./pages/services/WhatsappMarketing";
import DigitalElectionCampaign from "./pages/services/DigitalElectionCampaign";




const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <CursorRings/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/development" element={<Development />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/career" element={<Career />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/get-started" element={<GetStarted />} />
              
              {/* Development routes */}
              <Route path="/development/web-development" element={<WebDevelopment/>} />
              <Route path="/development/social-media-marketing" element={<SocialMediaMarketing />} />
              <Route path="/development/content-writing" element={<ContentWriting />} />
              <Route path="/development/graphics-designer" element={<GraphicsDesigner />} />
              <Route path="/development/software-development" element={<SoftwareDevelopment />} />
              <Route path="/development/app-development" element={<AppDevelopment />} />
              
              {/* Services routes */}
              <Route path="/services/bulk-sms" element={<BulkSms />} />
              <Route path="/services/voice-sms" element={<VoiceSms />} />
              <Route path="/services/whatsapp-panel" element={<WhatsappPanel />} />
              <Route path="/services/whatsapp-marketing" element={<WhatsappMarketing />} />
              <Route path="/services/digital-election-campaign" element={<DigitalElectionCampaign />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
