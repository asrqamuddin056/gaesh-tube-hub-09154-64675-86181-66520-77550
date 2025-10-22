export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ganesh Tube Corporation",
  "url": "https://ganeshtubecorporation.github.io/ganesh-tube-corporation",
  "logo": "https://ganeshtubecorporation.github.io/ganesh-tube-corporation/assets/logo.png",
  "description": "Leading manufacturer of high-quality MS pipes, GI pipes, steel tubes, and industrial piping solutions",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9876543210",
    "contactType": "Customer Service",
    "email": "info@ganeshtube.com"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Industrial Area, Phase 2",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400001",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://twitter.com/ganesh_tube"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ganesh Tube Corporation",
  "image": "https://ganeshtubecorporation.github.io/ganesh-tube-corporation/assets/logo.png",
  "description": "Authorized distributor and dealer of MS pipes, GI pipes, steel tubes, and industrial piping solutions",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Industrial Area, Phase 2",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400001",
    "addressCountry": "IN"
  },
  "telephone": "+91-9876543210",
  "email": "info@ganeshtube.com",
  "url": "https://ganeshtubecorporation.github.io/ganesh-tube-corporation",
  "priceRange": "$$",
  "openingHours": "Mo-Sa 09:00-18:00"
};

export const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Industrial Tubes and Pipes",
  "description": "Comprehensive range of MS pipes, GI pipes, steel tubes, and industrial piping solutions",
  "itemListElement": [
    {
      "@type": "Product",
      "name": "MS Pipes",
      "description": "High-quality mild steel pipes for industrial applications"
    },
    {
      "@type": "Product",
      "name": "GI Pipes",
      "description": "Galvanized iron pipes for water supply and construction"
    },
    {
      "@type": "Product",
      "name": "Square Pipes",
      "description": "Square hollow section pipes for structural applications"
    },
    {
      "@type": "Product",
      "name": "Rectangular Pipes",
      "description": "Rectangular hollow section pipes for construction"
    },
    {
      "@type": "Product",
      "name": "MS Sheets",
      "description": "Mild steel sheets for industrial fabrication"
    },
    {
      "@type": "Product",
      "name": "GI Sheets",
      "description": "Galvanized iron sheets for roofing and cladding"
    }
  ]
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
