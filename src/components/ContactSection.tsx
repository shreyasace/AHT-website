import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Building2, Factory } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="section-corporate bg-primary text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Connect With Us
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Ready to explore investment opportunities? Get in touch with our leadership team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Office Location */}
          <Card className="bg-white/10 border-white/20 backdrop-blur p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-6 w-6 text-aht-orange" />
              <h3 className="text-2xl font-bold">Corporate Office</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-aht-orange mt-1" />
                <div>
                  <div className="font-semibold mb-1">Address</div>
                  <div className="text-sm text-white/80 leading-relaxed">
                    #230, NANASU, 5th Main, 5th Cross<br />
                    JRD Tatanagar, Kodigehalli<br />
                    Bangalore - 560092
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-aht-orange" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-sm text-white/80">+91 98457 70188</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-aht-orange" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-white/80">appliedhypersonic@gmail.com</div>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Factory Location */}
          <Card className="bg-white/10 border-white/20 backdrop-blur p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Factory className="h-6 w-6 text-aht-orange" />
              <h3 className="text-2xl font-bold">Research & Manufacturing</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-aht-orange mt-1" />
                <div>
                  <div className="font-semibold mb-1">Factory Address</div>
                  <div className="text-sm text-white/80 leading-relaxed">
                    New Sy No. 76, Magadi Main Road<br />
                    Chickka Gollarahatti, Kachohalli<br />
                    Dasanapura Hobli, Bangalore - 560091
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-aht-orange" />
                <div>
                  <div className="font-semibold">Secondary Phone</div>
                  <div className="text-sm text-white/80">+91 87622 97682</div>
                </div>
              </div>
              
              <div className="bg-aht-orange/20 p-3 rounded-lg">
                <div className="text-sm font-semibold mb-1">Shock Tube Facility (MST)</div>
                <div className="text-xs text-white/80">Advanced materials research and testing facility</div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Leadership Contact */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/5 border-white/10 backdrop-blur p-6 text-white text-center">
            <h4 className="text-xl font-bold mb-4">Dr. Jayaram V</h4>
            <div className="text-aht-orange font-semibold mb-2">Founder & Managing Partner</div>
            <div className="text-sm text-white/80 mb-4">
              PhD (IISc), FIE, FICCE, LSMIEEE<br />
              Former Chief Research Scientist, IISc
            </div>
            <div className="text-sm">
              <div>📧 drjayaramv@gmail.com</div>
              <div>📱 +91 98457 70188</div>
            </div>
          </Card>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur p-6 text-white text-center">
            <h4 className="text-xl font-bold mb-4">Dr. Kavitha Jayaram</h4>
            <div className="text-aht-orange font-semibold mb-2">Co-Founder & Partner</div>
            <div className="text-sm text-white/80 mb-4">
              PhD in Advanced Materials<br />
              Strategic Partnership Development
            </div>
            <div className="text-sm">
              <div>📧 kavithajram@gmail.com</div>
              <div>📱 +91 97406 00222</div>
            </div>
          </Card>
        </div>
        
        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-aht-orange to-orange-500 p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Invest in the Future?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join us in revolutionizing hypersonic technologies and shaping the future of aerospace innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-aht-orange hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              Request Investor Deck
            </Button>
            
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-aht-orange px-8 py-4 text-lg font-semibold">
              Schedule Meeting
            </Button>
          </div>
          
          <div className="mt-8 text-sm opacity-80">
            GSTIN: 29ACFFA6242H1ZD
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;