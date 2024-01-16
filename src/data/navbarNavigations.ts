import categoriesMegaMenu from "./categoriesMegaMenu";

// MEGAMENU DATA
const megaMenus = [
  [
    {
      title: "OUR APPROACH",
      child: [
        { title: "Why Rent Funriture", url: "#" },
        { title: "Why Choose Kloudek", url: "#" },
        { title: "How Furniture Rental Works", url: "#" },
        { title: "Furniture as a Service", url: "#" },
        { title: "Permanently Flexible", url: "#" },
        { title: "Workplace pricing", url: "#" },
      
      ],
    },
  ],

  [
    {
      title: "WORKSPACE",
      child: [
        { title: "Private Office", url: "#" },
        {
          title: "Open Work Area",
          url: "#",
        },
        { title: "Flexible Office", url: "#" },
        {
          title: "Home Office",
          url: "#",
        },
        { title: "Conference Rooms", url: "#" },
        {
          title: "Training Rooms",
          url: "#",
        },
        { title: "Lobby", url: "#" },
        {
          title: "Lounge Areas",
          url: "#",
        },
        { title: "Cafe", url: "#" },
        { title: "Outdoor", url: "#" },
      ],
    },
  ],

  [
    {
      title: "OFFICE CATALOG",
      child: [
        { title: "Workplace Physical Distancing Solutions", url: "#" },
        { title: "Office Seating", url: "#" },
        { title: "Office Desks", url: "#" },
        { title: "Panel Systems", url: "#" },
        { title: "Office Tabels", url: "#" },
        { title: "Office Collections", url: "#" },
        { title: "Accessories", url: "#" },
        { title: "Shelves & Storage", url: "#" },
        { title: "Lounge Seating", url: "#" },
        { title: "Decor", url: "#" },
        { title: "Outdoor", url: "#" },
        { title: "Cafe", url: "#" },
      ],
    },
  ],

  [
    {
      title: "RESOURCES",
      child: [
        { title: "4SITE Sensor Technology", url: "#" },
        { title: "Workplace Trends", url: "#" },
        { title: "Cafe Studies", url: "#" },
        { title: "Downloads", url: "#" },
        { title: "Surveys", url: "#" },
        { title: "Sustainability", url: "#" },
        { title: "Workplace Guides", url: "#" },
        { title: "Should You Rent or Buy Furniture", url: "#" },
        { title: "Furniture as a Service Calculator", url: "#" },
      ],
    },
  ],
  [
    {
      title: "INDUSTRIES",
      child: [
        { title: "Commercial Real Estate", url: "#" },
        { title: "Construction", url: "#" },
        { title: "Entertainment", url: "#" },
        { title: "Government", url: "#" },
        { title: "Healthcare", url: "#" },
        { title: "Legal", url: "#" },
        { title: "Technology", url: "#" },
        { title: "Banking Finance", url: "#" },
        { title: "Bio Tech", url: "#" },
        { title: "Alternative Energy", url: "#" },
        { title: "Energy Oil Gas", url: "#" },
        { title: "Non Profit", url: "#" },
        { title: "Modular", url: "#" },
        { title: "Company Direct", url: "#" },
      ],
    },
  ],
];
const megaMenus1 = [
  [
    {
      title: "Living Room", 
      url : "/furniture-rental/living-room",
      child: [
        { title: "Sofas & Sectionals", url: "/furniture-rental/living-room/sofas-sectionals" },
        { title: "Chairs", url: "/furniture-rental/living-room/chairs" },
        { title: "Tables", url: "/furniture-rental/living-room/tables" },
        { title: "TVs", url: "/furniture-rental/living-room/tvs" },
        { title: "TV Stands", url: "/furniture-rental/living-room/tv-stands" },
        { title: "Decor", url: "/furniture-rental/living-room/decor" },
      
      ],
    },
    {
      title: "Home Office",
      child: [
        { title: "Desks", url: "#" },
        { title: "Office Chairs", url: "#" },
        { title: "Storage", url: "#" },
        { title: "Lamps", url: "#" },
        { title: "Office Decor", url: "#" },
      ],
    },
  ],
  [
    {
      title: "Kitchen & Dining",
      child: [
        { title: "Dining Room", url: "/furniture-rental/kitchen-dining/dining-room" },
        { title: "Tables", url: "/furniture-rental/kitchen-dining/tables" },
        { title: "Seating", url: "/furniture-rental/kitchen-dining/seating" },
        { title: "Kitchenware Packages", url: "/furniture-rental/kitchen-dining/kitchenware-packages" },
        { title: "Appliances", url: "/furniture-rental/kitchen-dining/appliances" },
        { title: "Decor", url: "/furniture-rental/kitchen-dining/decor" },
      ],
    },
    {
      title: "Decor",
      child: [
        { title: "Lamps", url: "#" },
        { title: "Rugs", url: "#" },
        { title: "Mirrors", url: "#" },
        { title: "Pillows & Throws", url: "#" },
        { title: "Wall Art", url: "#" },
        { title: "Plants & Flowers", url: "#" },
       
      ],
    },
  ],
  [
    {
      title: "Accent Furniture",
      child: [
        { title: "Accent Chairs", url: "/furniture-rental/accent-furniture/accent-chairs" },
        { title: "Occasional Tables", url: "/furniture-rental/accent-furniture/occasional-tables" },
        { title: "Accent Tables", url: "/furniture-rental/accent-furniture/accent-tables" },
        { title: "Accent Chests & Cabinets", url: "/furniture-rental/accent-furniture/accentchests-cabinets" },
        { title: "Ottomans Benches", url: "/furniture-rental/accent-furniture/ottomans-benches" },
      ],
    },
    {
      title: "More Items",
      child: [
        { title: "Electionics", url: "#" },
        { title: "Outdoor", url: "#" },
        { title: "Cleaning & Laundry", url: "#" },
        { title: "Style Guide", url: "#" },
        { title: "Collection", url: "#" },
       
      ],
    },
  ],
  [
    {
      title: "Bed & Bath",
      child: [
        { title: "Bedrooms Furniture", url: "/furniture-rental/bed-bath/bedroom-furniture" },
        { title: "Mattresses", url: "/furniture-rental/bed-bath/mattresses" },
        { title: "Linens", url: "/furniture-rental/bed-bath/linens" },
        { title: "TVs", url: "/furniture-rental/bed-bath/tvs" },
        { title: "Decor", url: "/furniture-rental/bed-bath/decor" },
        { title: "Bathroom", url: "bathroom" },
        { title: "Packeges", url: "/furniture-rental/bed-bath/packages" },
      ],
    },
    {
      title: "HouseWares",
      child: [
        { title: "Bedrooms", url: "#" },
        { title: "Bathroom", url: "#" },
        { title: "Kitchen", url: "#" },
        { title: "Cleaning & Laundry", url: "#" },
      ],
    },
  ],

  [
    {
      title: "More-In Ready Packages",
      child: [
        { title: "Funiture Collections, configured to most any budget", url: "#" },
      ],
    },
    {
      title: "For Your Home",
      child: [
        { title: "Furnish your entire  home with a few easy clicks", url: "#" },
      ],
    },
    {
      title: "Student Package Specials",
      child: [
        { title: "Starting at $129", url: "#" },
      ],
    },
    {
      title: "Military Package Specials",
      child: [
        { title: "Starting at $129", url: "#" },
      ],
    },
  ],

  [
    {
      title: "Ideas & Inspiration",
      child: [
        { title: "How to", url: "#" },
        { title: "Design Guides", url: "#" },
        { title: "Lookbooks", url: "#" },
        { title: "Lifestyle", url: "#" },
      ],
    },
    {
      title: "Explore Kloudek",
      child: [
        { title: "How Furniture  Rental Works", url: "#" },
        { title: "Why Rent Furniture", url: "/admin/products/create" },
        { title: "Furniture On Your Terms", url: "#" },
        { title: "Customer Stories", url: "#" },
      ],
    },
    {
      title: "Business Services",
      child: [
        { title: "Home Staging", url: "#" },
        { title: "Higher Education", url: "#" },
        { title: "Multi-Family Housing", url: "#" },
        { title: "Disaster Relief", url: "#" },
  
      ],
    },
  ],

 
];

// MAIN NAVIGATION DATA
const navbarNavigations = [
  {
    title: "RENT FOR HOME",
    megaMenu: true,
    megaMenuWithSub: true,
    child: megaMenus1
      // { title: "Market 1", url: "/market-1" },
      // { title: "Market 2", url: "/market-2" },
      // { title: "Furniture", url: "/furniture-shop" },
      // { title: "Grocery 1", url: "/grocery1" },
      // { title: "Grocery 2", url: "/grocery2" },
      // { title: "Grocery 3", url: "/grocery3" },
      // { title: "Health and Beauty", url: "/healthbeauty-shop" },
      // { title: "Fashion 1", url: "/fashion-shop-1" },
      // { title: "Fashion 2", url: "/fashion-shop-2" },
      // { title: "Fashion 3", url: "/fashion-shop-3" },
      // { title: "Gift Store", url: "/gift-shop" },
      // { title: "Gadget", url: "/gadget-shop" },
    
  },

  {
    megaMenu: true,
    megaMenuWithSub: false,
    title: "RENT FOR OFFICE",
    child: megaMenus,
  },
  // {
  //   megaMenu: false,
  //   megaMenuWithSub: true,
  //   title: "Full Screen Menu",
  //   // child: categoriesMegaMenu,
  // },

  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "FURNITURE OUTLET",
    child: [
      // {
      //   title: "Sale Page",
      //   child: [
      //     { title: "Version 1", url: "/sale-page-1" },
      //     { title: "Version 2", url: "/sale-page-2" },
      //   ],
      // },
      // {
      //   title: "Vendor",
      //   child: [
      //     { title: "All vendors", url: "/shops" },
      //     { title: "Vendor store", url: "/shops/scarlett-beauty" },
      //   ],
      // },
      // {
      //   title: "Shop",
      //   child: [
      //     { title: "Search product", url: "/product/search/mobile phone" },
      //     { title: "Single product", url: "/product/lord-2019" },
      //     { title: "Cart", url: "/cart" },
      //     { title: "Checkout", url: "/checkout" },
      //     { title: "Alternative Checkout", url: "/checkout-alternative" },
      //     { title: "Order confirmation", url: "/order-confirmation" },
      //   ],
      // },
    ],
  },

  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "EVENTS",
    child: [
      // {
      //   title: "Orders",
      //   child: [
      //     { title: "Order List", url: "/orders" },
      //     {
      //       title: "Order Details",
      //       url: "/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
      //     },
      //   ],
      // },
      // {
      //   title: "Profile",
      //   child: [
      //     { title: "View Profile", url: "/profile" },
      //     {
      //       title: "Edit Profile",
      //       url: "/profile/e42e28ea-528f-4bc8-81fb-97f658d67d75",
      //     },
      //   ],
      // },
      // {
      //   title: "Address",
      //   child: [
      //     { title: "Address List", url: "/address" },
      //     {
      //       title: "Add Address",
      //       url: "/address/d27d0e28-c35e-4085-af1e-f9f1b1bd9c34",
      //     },
      //   ],
      // },
      // {
      //   title: "Support tickets",
      //   child: [
      //     { title: "All tickets", url: "/support-tickets" },
      //     {
      //       title: "Ticket details",
      //       url: "/support-tickets/when-will-my-product-arrive",
      //     },
      //   ],
      // },
      // { title: "Wishlist", url: "/wish-list" },
    ],
  },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "RELOCATE",
    child: [
      // { title: "Dashboard", url: "/vendor/dashboard" },
      // {
      //   title: "Products",
      //   child: [
      //     { title: "All products", url: "/admin/products" },
      //     { title: "Add/Edit product", url: "/admin/products/lord-2019" },
      //   ],
      // },
      // {
      //   title: "Orders",
      //   child: [
      //     { title: "All orders", url: "/admin/orders" },
      //     {
      //       title: "Order details",
      //       url: "/admin/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
      //     },
      //   ],
      // },   
      // { title: "Profile", url: "/vendor/account-setting" },
    ],
  },
];

export default navbarNavigations;
