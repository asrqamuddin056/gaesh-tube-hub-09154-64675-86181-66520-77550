import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { breadcrumbSchema } from "@/lib/structuredData";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "9985215010",
        "8885523572"
      ],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["ajay_gtc@yahoo.com"],
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Shop no-7, Lala Temple Complex,",
        "Ranigunj, Secunderabad-500003,",
        "Telangana"
      ],
      fullWidth: true,
    },
  ];

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://ganeshtubecorporation.github.io/ganesh-tube-corporation/" },
    { name: "Contact", url: "https://ganeshtubecorporation.github.io/ganesh-tube-corporation/#/contact" }
  ]);

  return (
    <>
      <SEO
        title="Contact Us | Ganesh Tube Corporation - Get a Quote Today"
        description="Contact Ganesh Tube Corporation in Secunderabad. Call us at 9985215010 or visit our shop at Lala Temple Complex, Ranigunj for all your industrial piping needs."
        canonical="/#/contact"
        keywords="contact Ganesh Tube, Secunderabad pipes supplier, industrial pipes quote, Ranigunj contact"
        structuredData={breadcrumbs}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[200px] flex items-center justify-center bg-gradient-to-r from-primary to-primary/80">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Get in touch with our team
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <Card key={info.title} className={`hover:shadow-lg transition-shadow ${info.fullWidth ? 'md:col-span-2' : ''}`}>
                  <CardContent className="p-8">
                    <div className={`flex items-start gap-4 ${info.fullWidth ? 'flex-col items-center text-center' : ''}`}>
                      <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-3">{info.title}</h3>
                        <div className="space-y-2">
                          {info.details.map((detail, index) => (
                            <p key={index} className="text-sm text-muted-foreground leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;
