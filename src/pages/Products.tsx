import { Card, CardContent } from "@/components/ui/card";
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
  { id: 1, name: "G.I Pipes", image: giPipesImg },
  { id: 2, name: "MS Pipes", image: msPipesImg },
  { id: 3, name: "Square Pipes", image: squarePipesImg },
  { id: 4, name: "Rectangular Pipes", image: rectangularPipesImg },
  { id: 5, name: "MS Sheet", image: msSheetImg },
  { id: 6, name: "GI Sheet", image: giSheetImg },
  { id: 7, name: "Pipe Fittings", image: pipeFittingsImg },
  { id: 8, name: "Angle", image: angleImg },
  { id: 9, name: "Channels", image: channelsImg },
  { id: 10, name: "MS Bar", image: msBarImg },
  { id: 11, name: "CPVC Pipe and Fittings", image: cpvcImg },
];

const Products = () => {
  return (
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
                    alt={product.name}
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
  );
};

export default Products;
