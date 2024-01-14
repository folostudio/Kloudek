import duotone from "components/icons/duotone";

export const navigations = [
  { type: "label", label: "Admin" },

  { name: "Rent For Home", 
    icon: duotone.Dashboard, 
    children: [
      { name: "Living Room",
        children: [
          { name: "Sofas & Sectionals", path: "/admin/products" },
          { name: "Chairs", path: "/admin/products" },
          { name: "Tables", path: "/admin/products" },
          { name: "TVs", path: "/admin/products" },
          { name: "TV Stands", path: "/admin/products" },
          { name: "Decor", path: "/admin/products" },
        ]
      },
      { name: "Kitchen & Dining",
        children: [
          { name: "Dining Room Tables", path: "/admin/products" },
          { name: "Seating", path: "/admin/products" },
          { name: "Kitchenware Packages", path: "/admin/products" },
          { name: "Appliances", path: "/admin/products" },
          { name: "Decor", path: "/admin/products" },
        ]
      },
      { name: "Bed & Bath",
        children: [
          { name: "Bedroom Furniture", path: "/admin/products" },
          { name: "Mattresses", path: "/admin/products" },
          { name: "Linens", path: "/admin/products" },
          { name: "TVs", path: "/admin/products" },
          { name: "Decor", path: "/admin/products" },
          { name: "Bathroom Packages", path: "/admin/products" },
        ]
      },
      { name: "Accent Furniture",
        children: [
          { name: "Accent Chairs", path: "/admin/products" },
          { name: "Occasional Tables", path: "/admin/products" },
          { name: "Accent Tables", path: "/admin/products" },
          { name: "Accent Chests & Cabinets", path: "/admin/products" },
          { name: "Ottomans & Benches", path: "/admin/products" },
        ]
      },
      { name: "Home Office",
        children: [
          { name: "Desks", path: "/admin/products" },
          { name: "Office Chairs", path: "/admin/products" },
          { name: "Storage", path: "/admin/products" },
          { name: "Lamps", path: "/admin/products" },
          { name: "Office Decor", path: "/admin/products" },
        ]
      },
      { name: "Decor",
        children: [
          { name: "Lamps", path: "/admin/products" },
          { name: "Rugs", path: "/admin/products" },
          { name: "Mirrors", path: "/admin/products" },
          { name: "Pillows & Throws", path: "/admin/products" },
          { name: "Wall Art", path: "/admin/products" },
          { name: "Plants & Flowers", path: "/admin/products" },
        ]
      },
      { name: "Housewares",
        children: [
          { name: "Bedroom", path: "/admin/products" },
          { name: "Bathroom", path: "/admin/products" },
          { name: "Kitchen", path: "/admin/products" },
          { name: "Cleaning & Laundry", path: "/admin/products" },
        ]
      },
      { name: "More Items",
        children: [
          { name: "Electronics", path: "/admin/products" },
          { name: "Outdoor", path: "/admin/products" },
          { name: "Cleaning & Laundry", path: "/admin/products" },
          { name: "Style Guide", path: "/admin/products" },
          { name: "Kloudek Collections", path: "/admin/products" },
        ]
      },
    ]
  },

  {
    name: "Rent For Office",
    icon: duotone.Products,
    children: [
      { name: "Workspaces",
        children: [
          { name: "Private Office", path: "/admin/products" },
          { name: "Open Work Area", path: "/admin/products" },
          { name: "Flexible Office", path: "/admin/products" },
          { name: "Home Office", path: "/admin/products" },
          { name: "Conference Rooms", path: "/admin/products" },
          { name: "Training Rooms", path: "/admin/products" },
          { name: "Lobby", path: "/admin/products" },
          { name: "Lounge Areas", path: "/admin/products" },
          { name: "Café", path: "/admin/products" },
          { name: "Outdoor", path: "/admin/products" },
        ]
      },
      { name: "Office Catalog",
        children: [
          { name: "Workplace Physical Distancing Solutions", path: "/admin/products" },
          { name: "Office Seating", path: "/admin/products" },
          { name: "Office Desks", path: "/admin/products" },
          { name: "Panel Systems", path: "/admin/products" },
          { name: "Office Tables", path: "/admin/products" },
          { name: "Office Collections", path: "/admin/products" },
          { name: "Accessories", path: "/admin/products" },
          { name: "Shelves & Storage", path: "/admin/products" },
          { name: "Lounge Seating", path: "/admin/products" },
          { name: "Decor", path: "/admin/products" },
          { name: "Outdoor", path: "/admin/products" },
          { name: "Cafe", path: "/admin/products" },
        ]
      },
    ],
  },

  {
    name: "Orders",
    icon: duotone.Products,
    path: "/admin/orders"
  },
];
