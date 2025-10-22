import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import { breadcrumbSchema } from "@/lib/structuredData";
import aboutImage from "@/assets/about-facility.jpg";

const About = () => {
  const brands = [
    {
      name: "Jindal Hissar",
      type: "Authorized Distributor",
      description: "Premium steel pipes and tubes from Hissar",
    },
    {
      name: "TATA PIPES",
      type: "Authorized Dealer",
      description: "India's most trusted steel brand",
    },
    {
      name: "JINDAL STAR",
      type: "Authorized Dealer",
      description: "Quality pipes for diverse applications",
    },
    {
      name: "APOLLO",
      type: "Authorized Dealer",
      description: "Renowned for durability and performance",
    },
    {
      name: "OSWAL",
      type: "Authorized Dealer",
      description: "Superior quality piping solutions",
    },
    {
      name: "MPL",
      type: "Authorized Dealer",
      description: "Trusted name in industrial pipes",
    },
    {
      name: "SURYA PIPES",
      type: "Authorized Dealer",
      description: "High-performance piping products",
    },
    {
      name: "HARI OM",
      type: "Authorized Dealer",
      description: "Quality pipes and fittings",
    },
  ];

  const milestones = [
    { year: "1993", event: "Company Founded by Mr. Ajay Jain" },
    { year: "2000", event: "Expanded Product Range" },
    { year: "2009", event: "Star Performance Award from Tata Steels Ltd" },
    { year: "2015", event: "Became Authorized Distributor for Jindal Hissar" },
    { year: "2019", event: "Excellent Dealer Award at Dealers Meet" },
    { year: "2024", event: "Serving Telangana Region with Excellence" },
  ];

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://ganeshtubecorporation.github.io/ganesh-tube-corporation/" },
    { name: "About", url: "https://ganeshtubecorporation.github.io/ganesh-tube-corporation/#/about" }
  ]);

  return (
    <>
      <SEO
        title="About Us | Ganesh Tube Corporation - 30+ Years of Excellence"
        description="Learn about Ganesh Tube Corporation, established in 1993 by Mr. Ajay Jain. Authorized distributor for Jindal Hissar and dealer for Tata Pipes, Apollo, and other premium brands in Secunderabad."
        canonical="/#/about"
        keywords="Ganesh Tube Corporation, Ajay Jain, Jindal distributor, Tata pipes dealer, Secunderabad pipes, industrial supplier"
        structuredData={breadcrumbs}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-r from-primary to-primary/80">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About Ganesh Tube Corporation
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Over three decades of excellence in industrial pipe and tube distribution
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1993 by Mr. Ajay Jain, Ganesh Tube Corporation has established itself as a 
                  trusted distributor of high-quality industrial pipes and related products in Secunderabad 
                  and surrounding areas. Our journey has been driven by an unwavering commitment to quality 
                  products, reliable service, and customer satisfaction.
                </p>
                <p>
                  With our office located at Lala Temple Complex, Ranigunj, and a well-equipped warehouse 
                  at Bansilalpet, we maintain extensive inventory to serve our customers promptly. As authorized 
                  distributors for Jindal Hissar Pvt Ltd and dealers for leading brands like TATA PIPES, JINDAL 
                  STAR, APOLLO, and others, we ensure our customers receive only the finest products.
                </p>
                <p>
                  Our comprehensive product range includes G.I Pipes, square pipes, rectangular pipes, MS sheets, 
                  GI sheets, pipe fittings, angles, channels, MS bars, and CPVC pipes with fittings. We serve 
                  major industrial areas in Bansilalpet, Ranigunj, and Dulapally with a dedicated team of 10 
                  professionals committed to excellence.
                </p>
              </div>
            </div>
            <div
              className="h-[400px] rounded-lg bg-cover bg-center shadow-xl"
              style={{ backgroundImage: `url(${aboutImage})` }}
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Authorized Brands</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are proud distributors and dealers for India's most trusted industrial pipe manufacturers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <Card key={brand.name} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{brand.name}</h3>
                  <Badge variant="secondary" className="mb-3">{brand.type}</Badge>
                  <p className="text-sm text-muted-foreground">{brand.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our commitment to excellence
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="font-semibold text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-primary-foreground/90">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-primary-foreground/90">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">7+</div>
              <div className="text-primary-foreground/90">Premium Brands</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-primary-foreground/90">Dedicated Team Members</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
