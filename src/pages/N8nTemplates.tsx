import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Workflow, ArrowRight, Search, Download, LayoutGrid, Layers } from "lucide-react";

const categories = [
  { name: "All Category", count: null },
  { name: "Content Creation", count: 72 },
  { name: "CRM & Sales", count: 8 },
  { name: "Customer Support", count: 3 },
  { name: "Data Processing & Analysis", count: 79 },
  { name: "Developer tools", count: 10 },
  { name: "E-commerce & Retail", count: 1 },
  { name: "Financial & Accounting", count: 2 },
  { name: "Jobs", count: 3 },
  { name: "Lead Generation", count: 14 },
  { name: "Marketing & Advertising Automation", count: 23 },
  { name: "Messaging", count: 29 },
  { name: "News", count: 2 },
  { name: "Project Management", count: 5 },
  { name: "SEO tools", count: 4 },
  { name: "Social Media Management", count: 16 },
  { name: "Travel", count: 1 },
  { name: "Videos", count: 26 },
  { name: "Web Scraping", count: 39 },
];

const allWorkflows = [
  {
    title: "Automated Social Media Content Creator and Publisher",
    description: "Creates social media posts from topics or articles, generates custom images, and publishes to Facebook, Instagram, and LinkedIn...",
    downloads: 198,
    category: "Social Media Management",
  },
  {
    title: "AI Generated Faceless YouTube Shorts Creator",
    description: "Creates viral short-form videos by generating script ideas, researching content, and automatically producing faceless videos with AI-generated...",
    downloads: 191,
    category: "Videos",
  },
  {
    title: "Google Maps Business Lead Scraper with Emails",
    description: "Scrapes business information from Google Maps based on search keywords and location, then extracts contact emails from business...",
    downloads: 134,
    category: "Web Scraping",
  },
  {
    title: "Telegram Bot for Stock Technical Analysis",
    description: "A Telegram bot that analyzes stock charts and provides technical analysis reports. Users can send text or voice...",
    downloads: 128,
    category: "Financial & Accounting",
  },
  {
    title: "AI Social Media Content Generator and Publisher",
    description: "Automatically creates social media posts from topics or articles, generates custom images for each platform, and publishes content...",
    downloads: 126,
    category: "Content Creation",
  },
  {
    title: "Automated AI Phone Calls from Form Submissions",
    description: "Creates an AI-powered phone call to users when they submit a contact form. The workflow passes form data...",
    downloads: 126,
    category: "Lead Generation",
  },
  {
    title: "HubSpot CRM Lead Sync Automation",
    description: "Automatically syncs new leads from web forms to HubSpot CRM, creates contacts, and assigns them to sales reps...",
    downloads: 89,
    category: "CRM & Sales",
  },
  {
    title: "Customer Support Ticket Router",
    description: "Routes incoming support tickets to the appropriate team based on keywords and priority levels...",
    downloads: 76,
    category: "Customer Support",
  },
  {
    title: "Sales Pipeline Data Analyzer",
    description: "Analyzes sales pipeline data and generates weekly reports with insights on conversion rates and bottlenecks...",
    downloads: 112,
    category: "CRM & Sales",
  },
  {
    title: "CSV Data Processor and Cleaner",
    description: "Processes large CSV files, cleans data, removes duplicates, and exports to multiple formats...",
    downloads: 145,
    category: "Data Processing & Analysis",
  },
  {
    title: "GitHub Issue Tracker Integration",
    description: "Automatically creates Slack notifications for new GitHub issues and syncs with project management tools...",
    downloads: 98,
    category: "Developer tools",
  },
  {
    title: "Shopify Order Fulfillment Automation",
    description: "Automates order processing, inventory updates, and shipping label generation for Shopify stores...",
    downloads: 67,
    category: "E-commerce & Retail",
  },
  {
    title: "Invoice Generator and Sender",
    description: "Generates professional invoices from form data and sends them via email with payment links...",
    downloads: 54,
    category: "Financial & Accounting",
  },
  {
    title: "Job Application Tracker",
    description: "Tracks job applications, sends follow-up reminders, and organizes candidate information...",
    downloads: 43,
    category: "Jobs",
  },
  {
    title: "LinkedIn Lead Scraper",
    description: "Extracts lead information from LinkedIn profiles and saves them to your CRM...",
    downloads: 156,
    category: "Lead Generation",
  },
  {
    title: "Facebook Ads Campaign Manager",
    description: "Automates Facebook ad campaign creation, budget management, and performance reporting...",
    downloads: 87,
    category: "Marketing & Advertising Automation",
  },
  {
    title: "WhatsApp Business Auto-Responder",
    description: "Sends automated responses to WhatsApp messages based on keywords and business hours...",
    downloads: 134,
    category: "Messaging",
  },
  {
    title: "RSS News Aggregator",
    description: "Aggregates news from multiple RSS feeds and sends daily digests via email or Slack...",
    downloads: 45,
    category: "News",
  },
  {
    title: "Asana Task Automation",
    description: "Creates tasks in Asana from emails, forms, or other triggers with automatic assignments...",
    downloads: 78,
    category: "Project Management",
  },
  {
    title: "SEO Keyword Rank Tracker",
    description: "Tracks keyword rankings across search engines and generates weekly performance reports...",
    downloads: 92,
    category: "SEO tools",
  },
  {
    title: "Instagram Post Scheduler",
    description: "Schedules and publishes Instagram posts with automatic hashtag suggestions and optimal timing...",
    downloads: 167,
    category: "Social Media Management",
  },
  {
    title: "Travel Booking Confirmation Parser",
    description: "Extracts booking details from confirmation emails and adds them to your calendar...",
    downloads: 34,
    category: "Travel",
  },
  {
    title: "YouTube Video Analytics Reporter",
    description: "Collects YouTube channel analytics and generates detailed performance reports...",
    downloads: 89,
    category: "Videos",
  },
  {
    title: "Website Content Scraper",
    description: "Scrapes website content, extracts structured data, and saves to spreadsheets or databases...",
    downloads: 178,
    category: "Web Scraping",
  },
  {
    title: "Blog Content Writer Assistant",
    description: "Generates blog post drafts from topics using AI, with SEO optimization suggestions...",
    downloads: 203,
    category: "Content Creation",
  },
  {
    title: "Zendesk Support Ticket Analyzer",
    description: "Analyzes support ticket patterns and generates insights on common issues and response times...",
    downloads: 56,
    category: "Customer Support",
  },
  {
    title: "JSON Data Transformer",
    description: "Transforms JSON data between different formats and validates against schemas...",
    downloads: 123,
    category: "Data Processing & Analysis",
  },
];

const ITEMS_PER_PAGE = 6;

const N8nTemplates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredWorkflows = useMemo(() => {
    if (selectedCategory === "All Category") {
      return allWorkflows;
    }
    return allWorkflows.filter((workflow) => workflow.category === selectedCategory);
  }, [selectedCategory]);

  const visibleWorkflows = filteredWorkflows.slice(0, visibleCount);
  const hasMoreWorkflows = visibleCount < filteredWorkflows.length;

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <>
      <Helmet>
        <title>n8n Workflow Templates - benriii</title>
        <meta
          name="description"
          content="Browse our collection of n8n workflow templates. Instantly automate your work with pre-built automation templates."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          {/* Hero */}
          <section className="py-16 bg-gradient-to-b from-accent/5 to-background">
            <div className="container mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 text-accent text-sm mb-6">
                <Workflow className="h-4 w-4" />
                n8n Templates
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Build Faster with Pre-Built N8n<br />Workflow Templates
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Instantly automate your work with our n8n workflow templates. Stop wasting time building
                from scratch. Find a template, configure it in minutes.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Workflows by name..."
                    className="w-full px-6 py-4 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-accent rounded-full text-accent-foreground hover:bg-accent/90 transition-colors">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 max-w-xl mx-auto gap-4">
                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex justify-center mb-2">
                    <Download className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="text-2xl font-bold text-green-500">6,379+</p>
                  <p className="text-sm text-muted-foreground">Downloads</p>
                </div>
                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex justify-center mb-2">
                    <LayoutGrid className="h-6 w-6 text-blue-500" />
                  </div>
                  <p className="text-2xl font-bold text-blue-500">91+</p>
                  <p className="text-sm text-muted-foreground">Templates</p>
                </div>
                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex justify-center mb-2">
                    <Layers className="h-6 w-6 text-amber-500" />
                  </div>
                  <p className="text-2xl font-bold text-amber-500">18+</p>
                  <p className="text-sm text-muted-foreground">Categories</p>
                </div>
              </div>
            </div>
          </section>

          {/* Categories & Templates */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
                Explore n8n Workflow Templates<br />for Every Need
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-10">
                Our n8n templates cover a wide range of categories to help you automate any
                aspect of your work, from marketing to project management.
              </p>

              {/* Category Pills */}
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => handleCategoryChange(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.name
                        ? "bg-accent text-accent-foreground"
                        : "bg-card border border-border text-foreground hover:border-accent/50"
                    }`}
                  >
                    {category.name}
                    {category.count !== null && (
                      <span className="ml-2 text-xs opacity-70">{category.count}</span>
                    )}
                  </button>
                ))}
              </div>

              {/* Workflow Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleWorkflows.map((workflow) => (
                  <div
                    key={workflow.title}
                    className="bg-card rounded-2xl border border-border p-6 hover:border-accent/30 hover:shadow-lg transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Workflow className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Download className="h-4 w-4" />
                        {workflow.downloads}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {workflow.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {workflow.description}
                    </p>
                    <div className="inline-block px-3 py-1 text-xs rounded-full border border-border text-muted-foreground mb-4">
                      {workflow.category}
                    </div>
                    <Button variant="accent" className="w-full">
                      View workflow
                    </Button>
                  </div>
                ))}
              </div>

              {hasMoreWorkflows && (
                <div className="flex justify-center mt-10">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-accent text-accent hover:bg-accent/10"
                    onClick={handleLoadMore}
                  >
                    Load More Workflows <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default N8nTemplates;
