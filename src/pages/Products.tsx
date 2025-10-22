import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { productListSchema, breadcrumbSchema } from "@/lib/structuredData";
import giPipesImg from "@/assets/products/gi-pipes-new.jpg";
import msPipesImg from "@/assets/products/ms-pipes.jpg";
import squarePipesImg from "@/assets/products/square-pipes.png";
import rectangularPipesImg from "@/assets/products/rectangular-pipes.png";
import msSheetImg from "@/assets/products/ms-sheet.jpg";
import giSheetImg from "@/assets/products/gi-sheet.jpg";
import pipeFittingsImg from "@/assets/products/pipe-fittings.jpg";
import angleImg from "@/assets/products/angle.jpg";
import channelsImg from "@/assets/products/channels.png";
import msBarImg from "@/assets/products/ms-bar.jpg";
import cpvcImg from "@/assets/products/cpvc.jpg";

const products = [
  { id: 1, name: "G.I Pipes", image: giPipesImg, alt: "Galvanized iron GI pipes for water supply and construction applications" },
  { id: 2, name: "MS Pipes", image: msPipesImg, alt: "Mild steel MS pipes for industrial and structural applications" },
  { id: 3, name: "Square Pipes", image: squarePipesImg, alt: "Square hollow section pipes for structural framework and construction" },
  { id: 4, name: "Rectangular Pipes", image: rectangularPipesImg, alt: "Rectangular hollow section pipes for industrial fabrication" },
  { id: 5, name: "MS Sheet", image: msSheetImg, alt: "Mild steel MS sheets for industrial fabrication and manufacturing" },
  { id: 6, name: "GI Sheet", image: giSheetImg, alt: "Galvanized iron GI sheets for roofing and cladding applications" },
  { id: 7, name: "Pipe Fittings", image: pipeFittingsImg, alt: "Industrial pipe fittings including elbows, tees, and couplings" },
  { id: 8, name: "Angle", image: angleImg, alt: "Steel angle sections for structural support and construction" },
  { id: 9, name: "Channels", image: channelsImg, alt: "Steel channel sections for structural applications" },
  { id: 10, name: "MS Bar", image: msBarImg, alt: "Mild steel MS bars for construction and manufacturing" },
  { id: 11, name: "CPVC Pipe and Fittings", image: cpvcImg, alt: "CPVC pipes and fittings for hot and cold water plumbing systems" },
];

const Products = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://ganeshtubecorporation.github.io/ganesh-tube-corporation/" },
    { name: "Products", url: "https://ganeshtubecorporation.github.io/ganesh-tube-corporation/#/products" }
  ]);

  return (
    <>
      <SEO
        title="Our Products | MS Pipes, GI Pipes, Steel Tubes | Ganesh Tube Corporation"
        description="Browse our complete range of industrial pipes and tubes: MS pipes, GI pipes, square pipes, rectangular pipes, MS sheets, GI sheets, pipe fittings, angles, channels, and CPVC pipes."
        canonical="/#/products"
        keywords="MS pipes price, GI pipes sizes, square pipes, rectangular pipes, steel sheets, pipe fittings, industrial pipes, construction materials"
        structuredData={[productListSchema, breadcrumbs]}
      />
      <div className="min-h-[calc(100vh-4rem)] py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
          Our Products
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground text-center">
                    {product.name}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Products;
