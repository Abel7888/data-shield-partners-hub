
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, Linkedin } from "lucide-react";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Data Shield Partners
            </div>
            <div className="hidden md:flex space-x-6">
              <Button variant="ghost" onClick={() => scrollToSection('about')}>About</Button>
              <Button variant="ghost" onClick={() => scrollToSection('services')}>Services</Button>
              <Button variant="ghost" onClick={() => scrollToSection('owner')}>Leadership</Button>
              <Button variant="ghost" onClick={() => scrollToSection('contact')}>Contact</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2">
              Boutique Emerging Tech Agency
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Data Shield Partners
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Your trusted partner for emerging technology marketing, sales services, and digital transformation insights across healthcare, finance, real estate, and supply chain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3"
                onClick={() => scrollToSection('services')}
              >
                Explore Our Services
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3"
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto h-8 w-8 text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Data Shield Partners
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">How We Work</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As a boutique agency based in Alexandria, VA, we specialize in providing emerging technology marketing and sales services, along with comprehensive media services for cutting-edge tech companies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our small, agile team allows us to deliver personalized attention and tailored solutions that larger agencies simply cannot match.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">What We Aim To Do</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We provide the latest insights, reports, and case studies to assist companies in their digital transformation journey across healthcare, finance, real estate, and supply chain industries.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to bridge the gap between innovative technology and practical business solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section id="owner" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Leadership
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          </div>

          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-white to-purple-50 border-purple-200 shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                AA
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800">Abel Assefa</CardTitle>
              <CardDescription className="text-xl text-purple-600 font-medium">
                Founder & Principal
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Abel runs Data Shield Partners part-time, bringing over a decade of experience in emerging technologies. His journey began in 2011 with a passion for robotics, evolving into data science and machine learning expertise by 2015.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through numerous personal projects and continuous learning, Abel has expanded his expertise into software engineering, IoT, and PropTech. His passion for emerging technologies drives the agency's innovative approach to helping clients navigate digital transformation.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-purple-200">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Industry Recognition</h4>
                <p className="text-lg text-gray-700 mb-4">
                  Currently running a newsletter that reaches <span className="font-bold text-purple-600">40,000 executives weekly</span> across healthcare, real estate, finance, and supply chain industries.
                </p>
                <Button 
                  variant="outline" 
                  className="border-purple-300 text-purple-600 hover:bg-purple-50"
                  onClick={() => window.open('https://www.linkedin.com/in/abel7888/', '_blank')}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services & Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We work with leading distributors and startups of emerging technology across multiple industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800">For Enterprises</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We analyze thousands of reviews from vendors and startups to provide a one-stop shop for companies to demo and purchase the latest, most effective technologies that deliver high ROI.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Technology Assessment & Selection</li>
                  <li>• Vendor Analysis & Reviews</li>
                  <li>• Digital Transformation Consulting</li>
                  <li>• ROI-focused Solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-800">For Vendors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Comprehensive advertising and content marketing services designed specifically for emerging technology companies.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Strategic Content Marketing</li>
                  <li>• Digital Advertising Campaigns</li>
                  <li>• Thought Leadership Development</li>
                  <li>• Industry-specific Messaging</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Industry Solutions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">Healthcare Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">
                  Cutting-edge healthcare technology products and solutions for small, medium, and enterprise clients.
                </p>
                <Button 
                  variant="link" 
                  className="text-green-600 p-0 mt-2"
                  onClick={() => window.open('https://www.datashieldhealthcare.space/', '_blank')}
                >
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-yellow-800">Finance & Real Estate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">
                  FinTech and PropTech solutions designed to transform financial services and real estate operations.
                </p>
                <Button  variant="link" 
                  className="text-red-600 p-0 mt-2"
                  onClick={() => window.open('https://datashielddigital.xyz/', '_blank')}
                >
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-red-800">Cyber Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">
                  Advanced cybersecurity product solutions to protect your business from evolving digital threats.
                </p>
                <Button 
                  variant="link" 
                  className="text-red-600 p-0 mt-2"
                  onClick={() => window.open('https://datashieldsecurity.xyz/', '_blank')}
                >
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200 text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-indigo-800">Blog & Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">
                  Access our comprehensive blog featuring the latest insights, analytics, and industry reports.
                </p>
                <Button 
                  variant="link" 
                  className="text-indigo-600 p-0 mt-2"
                  onClick={() => window.open('https://www.datashieldpartners.blog/', '_blank')}
                >
                  Visit Blog →
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Partnership Section */}
          <Card className="bg-gradient-to-r from-purple-100 to-blue-100 border-purple-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-800">Our Partnerships</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                We've partnered with leading emerging tech, PropTech, FinTech, and cybersecurity solution providers to offer comprehensive solutions and products through analytics, insights, statistics, and reviews from top vendor review sites.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-blue-500 text-white">Eon Reality</Badge>
                <Badge className="bg-purple-500 text-white">App Direct</Badge>
                <Badge className="bg-green-500 text-white">Zscaler</Badge>
                <Badge className="bg-red-500 text-white">More</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's discuss how Data Shield Partners can help accelerate your digital transformation journey with the latest emerging technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3"
            >
              Start a Conversation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3"
              onClick={() => window.open('https://www.linkedin.com/in/abel7888/', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Data Shield Partners
          </div>
          <p className="text-gray-400 mb-4">
            Boutique Emerging Technology Agency • Alexandria, VA
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Data Shield Partners. Empowering digital transformation through emerging technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
