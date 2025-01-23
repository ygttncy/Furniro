export const products = [
  {
    id: 1,
    name: "Asgaard Sofa",
    price: 29.99,
    originalPrice: 49.99,
    discount: 20,
    description:
      "A bold addition to any living room, the Asgaard Sofa delivers a refined blend of comfort and elegance with sleek lines and durable fabric. Its compact design is perfect for smaller spaces.",
    "short-description": "A modern sofa for a chic home.",
    rating: 4.5,
    SKU: "SS001",
    Category: "Sofas",
    Tags: "Sofa, Chair, Home, Shop",
    extras: {
      detailedDescriptions: [
        "Embodying the spirit of modern minimalism, the Asgaard Sofa combines Scandinavian design with comfort. Its fabric is both soft to the touch and durable, making it ideal for everyday use.",
        "Designed with both aesthetics and function in mind, the Asgaard Sofa is lightweight yet sturdy. Its minimalist profile allows it to seamlessly integrate into any living space, while the cushions provide the right balance of support and softness.",
      ],
      specifications: {
        dimensions: "200cm x 90cm x 75cm",
        material: "100% Cotton Upholstery",
        weight: "35kg",
        color: "Grey",
      },
      extraImages: ["/images/sofa1.jpg", "/images/sofa2.jpg"],
      reviews: [
        {
          name: "Alice",
          date: "2024-09-10",
          message: "Super comfortable and fits perfectly in my living room.",
        },
        {
          name: "John",
          date: "2024-09-12",
          message: "The fabric feels high quality and the color matches well.",
        },
      ],
    },
    images: [
      "src/assets/sofa1.svg",
      "src/assets/sofa2.svg",
      "src/assets/sofa3.svg",
      "src/assets/sofa4.svg",
      "src/assets/sofa5.svg",
    ],
  },
  {
    id: 2,
    name: "Slytherin Chair",
    price: 39.99,
    originalPrice: 59.99,
    discount: 20,
    description:
      "The Slytherin Chair combines vintage charm with modern comfort. Its tufted fabric and sturdy frame make it an ideal choice for a cozy corner or reading nook.",
    "short-description": "Vintage-inspired armchair.",
    rating: 4.0,
    SKU: "SC002",
    Category: "Chairs",
    Tags: "Chair, Home, Shop",
    extras: {
      detailedDescriptions: [
        "The Slytherin Chair offers timeless elegance with its high-quality fabric and beautifully detailed stitching. Its design adds a classic touch to any home decor while providing ultimate relaxation.",
        "This chair is perfect for those who love a mix of modern and classic design. The wide seat and soft cushioning make it the perfect spot for reading, lounging, or simply unwinding after a long day.",
      ],
      specifications: {
        dimensions: "150cm x 200cm",
        material: "Polyester",
        weight: "2kg",
        color: "Beige",
      },
      extraImages: ["/images/chair1.jpg", "/images/chair2.jpg"],
      reviews: [
        {
          name: "Emma",
          date: "2024-09-05",
          message: "Super cozy, perfect for chilly nights.",
        },
        {
          name: "David",
          date: "2024-09-11",
          message: "Soft to the touch and a good size for my living room.",
        },
      ],
    },
    images: [
      "src/assets/chair1.svg",
      "src/assets/chair2.svg",
      "src/assets/chair3.svg",
      "src/assets/chair4.svg",
      "src/assets/chair5.svg",
    ],
  },
  {
    id: 3,
    name: "Valhalla TV Stand",
    price: 59.99,
    originalPrice: 79.99,
    discount: 15,
    description:
      "The Valhalla TV Stand is designed for those who appreciate both style and functionality. With ample storage and a sleek, modern design, it complements any entertainment setup.",
    "short-description": "Sleek TV stand with storage.",
    rating: 3.5,
    SKU: "TVS003",
    Category: "TV Stands",
    Tags: "TV Stand, Home, Shop",
    extras: {
      detailedDescriptions: [
        "With its clean lines and minimalist aesthetic, the Valhalla TV Stand adds a sophisticated touch to your living space. Its sturdy frame is crafted from high-quality materials, ensuring long-lasting use.",
        "This TV stand offers ample storage space for all your entertainment needs. The smooth surfaces and easy-to-clean design make it a practical yet stylish addition to any modern home.",
      ],
      specifications: {
        dimensions: "180cm x 40cm x 55cm",
        material: "Wood and Metal",
        weight: "15kg",
        color: "Black",
      },
      extraImages: ["/images/tvstand1.jpg", "/images/tvstand2.jpg"],
      reviews: [
        {
          name: "Oliver",
          date: "2024-08-28",
          message: "Fits all my consoles and looks sleek in my media room.",
        },
        {
          name: "Sophia",
          date: "2024-08-30",
          message: "Assembly was easy, and it's sturdy.",
        },
      ],
    },
    images: [
      "src/assets/tvstand1.svg",
      "src/assets/tvstand2.svg",
      "src/assets/tvstand3.svg",
      "src/assets/tvstand4.svg",
      "src/assets/tvstand5.svg",
    ],
  },
  {
    id: 4,
    name: "Odin Bookshelf",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    description:
      "The Odin Bookshelf is a modern storage solution that combines form and function. Its multiple tiers offer ample space for books, decor, and more.",
    "short-description": "Sleek multi-tiered bookshelf.",
    rating: 4.5,
    SKU: "BS004",
    Category: "Bookshelves",
    Tags: "Bookshelf, Home, Shop",
    extras: {
      detailedDescriptions: [
        "Crafted from durable wood, the Odin Bookshelf is as stylish as it is functional. Its clean lines and minimalist design make it a perfect addition to any room.",
        "The Odin Bookshelf offers versatility with its multi-tiered design, providing ample storage for books, decorative items, and more. It’s both lightweight and sturdy, making it easy to reposition.",
      ],
      specifications: {
        dimensions: "120cm x 30cm x 180cm",
        material: "Wood",
        weight: "22kg",
        color: "Walnut",
      },
      extraImages: ["/images/bookshelf1.jpg", "/images/bookshelf2.jpg"],
      reviews: [
        {
          name: "Grace",
          date: "2024-08-22",
          message: "Perfect for my collection, and it looks great!",
        },
        {
          name: "Ethan",
          date: "2024-08-25",
          message: "Sturdy and easy to assemble. Definitely recommend!",
        },
      ],
    },
    images: [
      "src/assets/bookshelf1.svg",
      "src/assets/bookshelf2.svg",
      "src/assets/bookshelf3.svg",
      "src/assets/bookshelf4.svg",
      "src/assets/bookshelf5.svg",
    ],
  },
  {
    id: 5,
    name: "Freya Dining Table",
    price: 149.99,
    originalPrice: 199.99,
    discount: 25,
    description:
      "The Freya Dining Table is perfect for those who love to entertain. With its large surface area and solid wood construction, it adds both style and practicality to your dining space.",
    "short-description": "Spacious wooden dining table.",
    rating: 4.0,
    SKU: "DT005",
    Category: "Dining Tables",
    Tags: "Dining Table, Home, Shop",
    extras: {
      detailedDescriptions: [
        "Made from solid oak, the Freya Dining Table brings a rustic charm to your home. Its large surface area comfortably seats six, making it ideal for family meals or gatherings.",
        "Designed with longevity in mind, the Freya Dining Table is crafted from high-quality wood that will stand the test of time. Its sturdy legs and elegant finish add a touch of sophistication to any dining room.",
      ],
      specifications: {
        dimensions: "220cm x 100cm x 75cm",
        material: "Oak",
        weight: "45kg",
        color: "Natural",
      },
      extraImages: ["/images/diningtable1.jpg", "/images/diningtable2.jpg"],
      reviews: [
        {
          name: "Mia",
          date: "2024-07-30",
          message: "A beautiful addition to my home, and it's very sturdy.",
        },
        {
          name: "Liam",
          date: "2024-08-05",
          message: "The perfect size for family dinners.",
        },
      ],
    },
    images: [
      "src/assets/diningtable1.svg",
      "src/assets/diningtable2.svg",
      "src/assets/diningtable3.svg",
      "src/assets/diningtable4.svg",
      "src/assets/diningtable5.svg",
    ],
  },
  {
    id: 6,
    name: "Jotunheim Recliner",
    price: 89.99,
    originalPrice: 129.99,
    discount: 30,
    "short-description": "Comfortable recliner chair.",
    "long-description":
      "With its ergonomic design and plush cushioning, the Jotunheim Recliner offers unmatched comfort for any room. The adjustable reclining function allows for personalized comfort settings.",
    SKU: "SS006",
    category: "Recliners",
    tags: ["Recliner", "Chair", "Home", "Furniture"],
    rating: 4.0,
    extras: {
      detailedDescriptions: [
        "Ergonomically designed with plush padding to support your posture.",
        "Features an adjustable reclining mechanism for optimal comfort.",
      ],
      specifications: {
        dimensions: "100cm x 80cm x 100cm",
        material: "Genuine Leather",
        weight: "20kg",
        color: "Black",
      },
      extraImages: ["/images/recliner1.jpg", "/images/recliner2.jpg"],
      reviews: [
        {
          name: "Oliver",
          date: "2024-08-01",
          message: "Super comfortable and looks great in my home office.",
        },
        {
          name: "Sophia",
          date: "2024-08-10",
          message: "The leather feels premium, and it's very relaxing.",
        },
      ],
    },
    images: [
      "src/assets/recliner1.svg",
      "src/assets/recliner2.svg",
      "src/assets/recliner3.svg",
      "src/assets/recliner4.svg",
      "src/assets/recliner5.svg",
    ],
  },
  {
    id: 7,
    name: "Midgard Dining Set",
    price: 249.99,
    originalPrice: 299.99,
    discount: 17,
    "short-description": "Elegant dining table with chairs.",
    "long-description":
      "A perfect dining set that blends tradition with modern style, the Midgard Dining Set offers ample space for family meals and gatherings with friends.",
    SKU: "SS007",
    category: "Dining Sets",
    tags: ["Dining", "Table", "Chairs", "Home", "Furniture"],
    rating: 4.5,
    extras: {
      detailedDescriptions: [
        "Crafted with high-quality wood for durability and style.",
        "Includes four matching chairs with comfortable seating.",
      ],
      specifications: {
        dimensions: "180cm x 100cm x 75cm",
        material: "Solid Oak Wood",
        weight: "60kg",
        color: "Walnut",
      },
      extraImages: ["/images/diningset1.jpg", "/images/diningset2.jpg"],
      reviews: [
        {
          name: "Noah",
          date: "2024-08-12",
          message:
            "A beautiful and functional set that fits perfectly in my dining room.",
        },
        {
          name: "Emma",
          date: "2024-08-18",
          message: "Solid construction and comfortable seating!",
        },
      ],
    },
    images: [
      "src/assets/diningset1.svg",
      "src/assets/diningset2.svg",
      "src/assets/diningset3.svg",
      "src/assets/diningset4.svg",
      "src/assets/diningset5.svg",
    ],
  },
  {
    id: 8,
    name: "Bifrost Coffee Table",
    price: 59.99,
    originalPrice: 79.99,
    discount: 25,
    "short-description": "Modern coffee table for any living space.",
    "long-description":
      "A minimalist design that complements any modern living room, the Bifrost Coffee Table offers style and functionality in one sleek package.",
    SKU: "SS008",
    category: "Tables",
    tags: ["Table", "Coffee Table", "Home", "Furniture"],
    rating: 4.0,
    extras: {
      detailedDescriptions: [
        "Crafted with a durable tempered glass top and a sleek metal frame.",
        "The table offers a spacious surface area for magazines, drinks, and decor.",
      ],
      specifications: {
        dimensions: "120cm x 60cm x 40cm",
        material: "Glass and Metal",
        weight: "12kg",
        color: "Chrome",
      },
      extraImages: ["/images/coffeetable1.jpg", "/images/coffeetable2.jpg"],
      reviews: [
        {
          name: "Ava",
          date: "2024-08-25",
          message: "Looks great and is the perfect size for my living room.",
        },
        {
          name: "Ethan",
          date: "2024-08-30",
          message: "Stylish and sturdy! Love how it matches my modern decor.",
        },
      ],
    },
    images: [
      "src/assets/coffeetable1.svg",
      "src/assets/coffeetable2.svg",
      "src/assets/coffeetable3.svg",
      "src/assets/coffeetable4.svg",
      "src/assets/coffeetable5.svg",
    ],
  },
  {
    id: 9,
    name: "Valkyrie Bed Frame",
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    "short-description": "Durable and stylish bed frame.",
    "long-description":
      "Combining durability with contemporary style, the Valkyrie Bed Frame ensures a solid foundation for your mattress while adding elegance to your bedroom.",
    SKU: "SS009",
    category: "Beds",
    tags: ["Bed", "Bed Frame", "Home", "Furniture"],
    rating: 3.5,
    extras: {
      detailedDescriptions: [
        "Crafted from durable solid wood with a lacquer finish for added protection.",
        "The sleek design features a low-profile frame with minimalist lines.",
      ],
      specifications: {
        dimensions: "200cm x 160cm x 50cm",
        material: "Solid Wood",
        weight: "45kg",
        color: "Dark Brown",
      },
      extraImages: ["/images/bedframe1.jpg", "/images/bedframe2.jpg"],
      reviews: [
        {
          name: "Lucas",
          date: "2024-08-20",
          message:
            "Sturdy and easy to assemble, the perfect bed frame for my needs.",
        },
        {
          name: "Charlotte",
          date: "2024-08-27",
          message:
            "Looks beautiful and feels solid. Very happy with this purchase.",
        },
      ],
    },
    images: [
      "src/assets/bedframe1.svg",
      "src/assets/bedframe2.svg",
      "src/assets/bedframe3.svg",
      "src/assets/bedframe4.svg",
      "src/assets/bedframe5.svg",
    ],
  },
  {
    id: 10,
    name: "Freya Bookcase",
    price: 99.99,
    originalPrice: 129.99,
    discount: 23,
    "short-description": "Spacious and modern bookcase.",
    "long-description":
      "The Freya Bookcase offers plenty of storage space for books, decor, and more while boasting a contemporary design that fits in any room.",
    SKU: "SS010",
    category: "Storage",
    tags: ["Bookcase", "Storage", "Home", "Furniture"],
    rating: 4.5,
    extras: {
      detailedDescriptions: [
        "Features five spacious shelves for ample storage and display space.",
        "Crafted from high-quality MDF with a wood veneer finish.",
      ],
      specifications: {
        dimensions: "180cm x 80cm x 30cm",
        material: "MDF with Wood Veneer",
        weight: "35kg",
        color: "White",
      },
      extraImages: ["/images/bookcase1.jpg", "/images/bookcase2.jpg"],
      reviews: [
        {
          name: "Isabella",
          date: "2024-08-28",
          message:
            "Perfect for organizing my books and adding style to my living room.",
        },
        {
          name: "Henry",
          date: "2024-09-01",
          message: "Very sturdy and easy to assemble. Great purchase!",
        },
      ],
    },
    images: [
      "src/assets/bookcase1.svg",
      "src/assets/bookcase2.svg",
      "src/assets/bookcase3.svg",
      "src/assets/bookcase4.svg",
      "src/assets/bookcase5.svg",
    ],
  },
  {
    id: 11,
    name: "Fenrir TV Stand",
    price: 149.99,
    originalPrice: 199.99,
    discount: 25,
    "short-description": "Sleek and functional TV stand.",
    "long-description":
      "The Fenrir TV Stand offers both style and functionality, providing ample storage for your media devices while maintaining a clean and modern look.",
    SKU: "SS011",
    category: "Entertainment Units",
    tags: ["TV Stand", "Media", "Home", "Furniture"],
    rating: 4.0,
    extras: {
      detailedDescriptions: [
        "Includes two spacious cabinets and an open shelf for storage and display.",
        "Crafted from engineered wood with a smooth finish.",
      ],
      specifications: {
        dimensions: "150cm x 50cm x 40cm",
        material: "Engineered Wood",
        weight: "30kg",
        color: "Gray",
      },
      extraImages: ["/images/tvstand1.jpg", "/images/tvstand2.jpg"],
      reviews: [
        {
          name: "James",
          date: "2024-09-05",
          message: "Great design, and it fits perfectly in my living room.",
        },
        {
          name: "Lily",
          date: "2024-09-07",
          message:
            "Stylish and functional, holds my TV and media devices well.",
        },
      ],
    },
    images: [
      "src/assets/tvstand1.svg",
      "src/assets/tvstand2.svg",
      "src/assets/tvstand3.svg",
      "src/assets/tvstand4.svg",
      "src/assets/tvstand5.svg",
    ],
  },
  {
    id: 12,
    name: "Yggdrasil Wardrobe",
    price: 299.99,
    originalPrice: 349.99,
    discount: 14,
    "short-description": "Spacious wardrobe with sliding doors.",
    "long-description":
      "The Yggdrasil Wardrobe combines elegance and practicality, offering ample storage space with sliding doors that save room and add a sleek look.",
    SKU: "SS012",
    category: "Wardrobes",
    tags: ["Wardrobe", "Storage", "Home", "Furniture"],
    rating: 4.5,
    extras: {
      detailedDescriptions: [
        "Features spacious compartments and hanging space for organized storage.",
        "Crafted from engineered wood with a smooth matte finish.",
      ],
      specifications: {
        dimensions: "220cm x 120cm x 60cm",
        material: "Engineered Wood",
        weight: "70kg",
        color: "White",
      },
      extraImages: ["/images/wardrobe1.jpg", "/images/wardrobe2.jpg"],
      reviews: [
        {
          name: "Benjamin",
          date: "2024-09-10",
          message:
            "Huge storage space, and the sliding doors are very convenient.",
        },
        {
          name: "Amelia",
          date: "2024-09-12",
          message:
            "Stylish design, and it fits all my clothes and accessories with ease.",
        },
      ],
    },
    images: [
      "src/assets/wardrobe1.svg",
      "src/assets/wardrobe2.svg",
      "src/assets/wardrobe3.svg",
      "src/assets/wardrobe4.svg",
      "src/assets/wardrobe5.svg",
    ],
  },
]
