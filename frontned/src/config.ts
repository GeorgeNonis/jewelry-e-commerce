import { TfiEmail } from "react-icons/tfi";
import { BsTelephoneOutbound } from "react-icons/bs";
import { GenericObj } from "./pages/contactUsPage/options/interfaces";

export const LOCATION_API = import.meta.env.GOOGLE_API;
export const STRIPE_KEY = import.meta.env.STRIPE_KEY;
// export const STRIPE_KEY =
//   "sk_test_51NBLn1BXiUmf4FHN6EaJadEmhiPpIklUqMaMZiWj7XV1hlbkBn2ntOv7GvPBWWV57HvL9WS2eyypJttqQIA17Tgz000I4oKXgf";
export const coordinations = { lat: 56.162937, lng: 10.203921 };

export const footerLinks = [
  { name: "About Us", link: "/about" },
  { name: "Store Location", link: "/location" },
  { name: "FAQs", link: "/faqs" },
  { name: "News", link: "/news" },
  { name: "Contact Us", link: "/contact" },
];

export const categories = [
  {
    name: "Summer",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107437607169835008/Neilyo77_I_would_like_an_image_of_jewelry_with_a_summery_feel.__e08616e3-b4de-4f05-8411-b1da6059cba8.png",
    gridArea: "one",
  },
  {
    name: "Stones",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1108053390367408168/Neilyo77_Design_Brief_for_Image_Featuring_Three_Types_of_Jewelr_dac5fa88-479e-459f-b590-22df325cfc6a.png",
    gridArea: "two",
  },
  {
    name: "Polymer Clay",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1108049524716470323/Neilyo77_Please_generate_an_image_of_polymer_clay_jewelry_that__6e44c8e7-86d7-48e0-abd0-8c1078ab41bb.png",
    gridArea: "four",
  },
  {
    name: "Offers",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1108053374781374494/Neilyo77_Design_Brief_for_Image_Featuring_Three_Types_of_Jewelr_8a76e558-f026-4f12-b16e-fa1b73e08267.png",
    gridArea: "four-low",
  },
];

export const stones = [
  {
    name: "Stellar Gem Pendant",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107451386817429554/Neilyo77_I_would_like_an_image_of_jewelry_with_a_luxurious_feel_2773782f-245d-4f15-a947-8412e56d200d.png",
    id: 123123,
    price: 210,
    texture: "Smooth",
    weight: "10g",
    dimensions: "2.5cm x 1.5cm",
    description:
      "A beautiful pendant featuring a stellar gem that shines with elegance.",
  },
  {
    name: "Azure Elegance Necklace",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107451371604672592/Neilyo77_I_would_like_an_image_of_jewelry_with_a_luxurious_feel_e9ff2971-5fa9-4ee4-a2a7-dc8668bf9c95.png",
    id: 456456,
    price: 130,
    texture: "Polished",
    weight: "15g",
    dimensions: "4cm x 2cm",
    description:
      "Adorn yourself with this elegant necklace, showcasing the beauty of azure.",
  },
  {
    name: "Radiant Amethyst Ring",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107451383315177572/Neilyo77_I_would_like_an_image_of_jewelry_with_a_luxurious_feel_b26498ba-1486-410c-88a3-408009bab3ca.png",
    id: 789789,
    price: 75,
    texture: "Faceted",
    weight: "7g",
    dimensions: "2cm x 2cm",
    description:
      "This radiant amethyst ring is a symbol of beauty and sophistication.",
  },
  {
    name: "Sapphire Cascade Earrings",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107450356025278475/Neilyo77_I_would_like_an_image_of_jewelry_with_a_luxurious_feel_bfdd0326-2158-426b-810d-01b33c771bfa.png",
    id: 10123010,
    price: 125,
    texture: "Smooth",
    weight: "5g",
    dimensions: "3cm x 1.5cm",
    description:
      "Capture attention with these elegant sapphire cascade earrings.",
  },
  {
    name: "Emerald Enchantment Bracelet",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107452192102809710/Neilyo77_I_would_like_an_image_of_jewelry_with_a_luxurious_feel_ba80572d-09ec-4192-a763-c67c8938c746.png",
    id: 111222,
    price: 199,
    texture: "Textured",
    weight: "12g",
    dimensions: "3.5cm x 1.8cm",
    description:
      "Wear this enchanting emerald bracelet and embrace a touch of magic.",
  },
  {
    name: "Opal Dreamcatcher Anklet",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107452225929891950/Neilyo77_I_would_like_an_image_of_jewelry_with_a_luxurious_feel_e4a7018a-4f80-4878-8d38-cf2d3c3dac14.png",
    id: 333444,
    price: 320,
    texture: "Smooth",
    weight: "9g",
    dimensions: "4.2cm x 2.2cm",
    description:
      "This opal dreamcatcher anklet evokes a sense of wonder and tranquility.",
  },
  {
    name: "Ruby Twilight Brooch",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107450339331932301/Neilyo77_I_would_like_an_image_of_jewelry_with_a_luxurious_feel_b9346a92-c6ba-44c6-8f25-ce27a44e02a1.png",
    id: 555666,
    price: 400,
    texture: "Polished",
    weight: "8g",
    dimensions: "2.8cm x 2.8cm",
    description:
      "Adorn yourself with this exquisite brooch, featuring a ruby that glows like twilight.",
  },
  {
    name: "Tanzanite Tranquility Cufflinks",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107450372840235059/Neilyo77_I_would_like_an_image_of_jewelry_with_a_luxurious_feel_f3074e92-4901-432e-9b69-ae2086e8a021.png",
    id: 777888,
    price: 300,
    texture: "Faceted",
    weight: "6g",
    dimensions: "2.2cm x 2.2cm",
    description:
      "These tanzanite cufflinks exude tranquility and add a touch of sophistication to your attire.",
  },
  {
    name: "Citrine Sunburst Hairpin",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107450332021276692/Neilyo77_I_would_like_an_image_of_jewelry_with_a_luxurious_feel_839343b8-99bf-4049-b296-ba0308c15570.png",
    id: 999000,
    price: 280,
    texture: "Smooth",
    weight: "4g",
    dimensions: "3.5cmx 1.5cm",
    description:
      "Brighten up your hairstyle with this citrine sunburst hairpin, radiating warmth and positivity.",
  },
];

export const summer = [
  {
    name: "Santorini Sunrise Necklace",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107438122712698962/Neilyo77_I_would_like_an_image_of_jewelry_with_a_summery_feel.__7d19afe8-8d49-4205-a8e5-ac1db0e81ca9.png",
    id: 1234567890,
    price: 20,
    texture: "Textured",
    weight: "3g",
    dimensions: "3cm x 2cm",
    description:
      "Capture the breathtaking beauty of a Santorini sunrise with this exquisite necklace.",
  },
  {
    name: "Mykonos Breeze Bracelet",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107439923109306368/Neilyo77_I_would_like_an_image_of_jewelry_with_a_summery_feel_b_5ac42957-6c20-4f43-80eb-99c6887b4846.png",
    id: 2345678901,
    price: 50,
    texture: "Smooth",
    weight: "4g",
    dimensions: "2.5cm x 2.5cm",
    description:
      "Feel the refreshing Mykonos breeze on your wrist with this stylish bracelet.",
  },
  {
    name: "Crete Coastal Earrings",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107439924917043200/Neilyo77_I_would_like_an_image_of_jewelry_with_a_summery_feel_b_ea74b84a-aa73-4299-ab8c-891444ba2655.png",
    id: 3456789012,
    price: 35,
    texture: "Textured",
    weight: "2g",
    dimensions: "2cm x 1.5cm",
    description:
      "Embrace the coastal beauty of Crete with these elegant earrings inspired by the sea.",
  },
  {
    name: "Rhodes Sun Hat",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107439934383595551/Neilyo77_I_would_like_an_image_of_jewelry_with_a_summery_feel_b_5bb55994-0073-4b8b-b338-4d0936a1b5f4.png",
    id: 4567890123,
    price: 80,
    texture: "Smooth",
    weight: "50g",
    dimensions: "30cm x 30cm",
    description:
      "Shield yourself from the sun in style with this fashionable Rhodes sun hat.",
  },
  {
    name: "Paros Seashell Anklet",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107440636606558288/Neilyo77_I_would_like_an_image_of_jewelry_with_a_summery_feel_b_fa06cea8-2b39-4349-89da-687d2cab6b06.png",
    id: 5678901234,
    price: 67,
    texture: "Textured",
    weight: "6g",
    dimensions: "4cm x 1.5cm",
    description:
      "Add a touch of beachside charm to your ankle with this beautiful Paros seashell anklet.",
  },
  {
    name: "Naxos Beach Ring",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107440644831592468/Neilyo77_I_would_like_an_image_of_jewelry_with_a_summery_feel_b_edec3860-ed82-431d-b213-02af446f7a4f.png",
    id: 6789012345,
    price: 43,
    texture: "Polished",
    weight: "5g",
    dimensions: "2.8cm x 2.8cm",
    description:
      "Carry the essence of Naxos beach with you wherever you go with this stunning ring.",
  },
  {
    name: "Corfu Island Bracelet",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107441124223746078/Neilyo77_I_would_like_an_image_of_jewelry_with_a_summery_feel_b_84cb375b-dc2a-41b5-903b-c7312b106d62.png",
    id: 7890123456,
    price: 90,
    texture: "Smooth",
    weight: "7g",
    dimensions: "3.5cm x 1.8cm",
    description:
      "Experience the beauty of Corfu Island with this captivating bracelet.",
  },
  {
    name: "Zakynthos Sunset Pendant",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107441132142596178/Neilyo77_I_would_like_an_image_of_jewelry_with_a_summery_feel_b_070f7aef-fcbc-41df-9ed6-214630613114.png",
    id: 8901234567,
    price: 53,
    texture: "Textured",
    weight: "3g",
    dimensions: "2.2cm x 2.2cm",
    description:
      "Wear the vibrant colors of a Zakynthos sunset with this mesmerizing pendant.",
  },
  {
    name: "Milos Starfish Earrings",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107442133784338493/Neilyo77_I_would_like_an_image_of_jewelry_with_a_summery_feel_b_37b098ed-531b-4ca8-bae6-a2f999ff07de.png",
    id: 9012345678,
    price: 40,
    texture: "Polished",
    weight: "4g",
    dimensions: "2.5cm x 2.5cm",
    description:
      "Channel the playful spirit of the sea with these adorable Milos starfish earrings.",
  },
];
export const polymer = [
  {
    name: "Ethereal Lace Earrings",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107595659072258068/Neilyo77_Please_generate_an_image_of_polymer_clay_jewelry_that__f7339084-ef66-4c3d-ac16-ffb419df9aad.png",
    id: 987654321,
    price: 80,
    texture: "Textured",
    weight: "5g",
    dimensions: "4cm x 3cm",
    description:
      "Adorn your ears with these ethereal lace earrings, exuding elegance and grace.",
  },
  {
    name: "Whimsical Garden Pendant",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107595825699364934/Neilyo77_Please_generate_an_image_of_polymer_clay_jewelry_that__956c786b-ce3d-47b3-ad33-cff20c7465fd.png",
    id: 876543210,
    price: 66,
    texture: "Smooth",
    weight: "3g",
    dimensions: "2.5cm x 2.5cm",
    description:
      "Wear this whimsical garden pendant and let its beauty blossom around your neck.",
  },
  {
    name: "Enchanting Blossom Bracelet",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107595643469434930/Neilyo77_Please_generate_an_image_of_polymer_clay_jewelry_that__23fcc22f-d15c-4384-812a-d19ce818e947.png",
    id: 765432109,
    price: 69,
    texture: "Textured",
    weight: "7g",
    dimensions: "3.8cm x 1.5cm",
    description:
      "Wrap your wrist with this enchanting blossom bracelet, a symbol of beauty and grace.",
  },
  {
    name: "Dainty Flutter Necklace",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107595694946140190/Neilyo77_Please_generate_an_image_of_polymer_clay_jewelry_that__02e6fd3a-509b-4880-8743-d255abe3c19a.png",
    id: 654321098,
    price: 99,
    texture: "Polished",
    weight: "6g",
    dimensions: "3.2cm x 2cm",
    description:
      "Delicate and charming, this dainty flutter necklace adds a touch of whimsy to any outfit.",
  },
  {
    name: "Serene Ocean Cufflinks",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107595683797663754/Neilyo77_Please_generate_an_image_of_polymer_clay_jewelry_that__a091b9ca-e3b8-4c6d-98b9-7875db91b965.png",
    id: 543210987,
    price: 130,
    texture: "Smooth",
    weight: "8g",
    dimensions: "2.8cm x 2.8cm",
    description:
      "Embrace the calming vibes of the ocean with these serene ocean cufflinks.",
  },
  {
    name: "Harmony Beaded Anklet",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107595611911495720/Neilyo77_Please_generate_an_image_of_polymer_clay_jewelry_that__5fe91e6b-c26d-4121-9d73-dc4f4ebd61c8.png",
    id: 432109876,
    price: 105,
    texture: "Textured",
    weight: "4g",
    dimensions: "3.5cm x 2cm",
    description:
      "Wrap your ankle in harmony with this beaded anklet, a symbol of balance and tranquility.",
  },
  {
    name: "Glowing Moonstone Ring",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107595671164436520/Neilyo77_Please_generate_an_image_of_polymer_clay_jewelry_that__0bda788c-0b9a-489c-8c8a-62d67e7e7971.png",
    id: 321098765,
    price: 92,
    texture: "Polished",
    weight: "7g",
    dimensions: "2.5cm x 2.5cm",
    description:
      "Illuminate your style with this glowing moonstone ring, radiating celestial beauty.",
  },
  {
    name: "Spiral Dreamcatcher Pendant",
    img: "https://cdn.discordapp.com/attachments/1056419450473152533/1107595801011703808/Neilyo77_Please_generate_an_image_of_polymer_clay_jewelry_that__085087a7-be5e-4fad-ae00-2475f28177b8.png",
    id: 210987654,
    price: 45,
    texture: "Smooth",
    weight: "3g",
    dimensions: "2cm x 2cm",
    description:
      "Capture your dreams and positive energy with this enchanting spiral dreamcatcher pendant.",
  },
];

export const offers = [
  ...stones.slice(0, 2), // Taking first 2 objects from the stones array
  ...polymer.slice(2, 4), // Taking objects 3 and 4 from the polymer array
  ...summer.slice(4, 6), // Taking objects 5 and 6 from the summer array
  stones[3], // Taking the fourth object from the stones array
  summer[6], // Taking the seventh object from the summer array
];

const formarter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

export const formatPriceToEuro = (n: number) => {
  return formarter.format(n);
};

export const allCategories = [
  { name: "Stones", items: stones },
  { name: "Polymer Clay", items: polymer },
  { name: "Summer", items: summer },
  { name: "Offers", items: offers },
  { name: "All", items: [...offers, ...summer, ...polymer, ...stones] },
];

export const faq = [
  {
    q: "How do I determine my ring size?",
    a: "We provide a ring size guide on our website to help you measure your ring size accurately. You can find it under the 'Ring Size Guide' section.",
  },
  {
    q: "Are your gemstones natural or synthetic?",
    a: "We offer a variety of gemstones, including both natural and lab-grown options. The product description for each item specifies whether it is natural or synthetic.",
  },
  {
    q: "What materials are used in your jewelry?",
    a: "Our jewelry is crafted using high-quality materials such as sterling silver, 14k gold, and genuine gemstones. The product description provides detailed information about the materials used for each item.",
  },
  {
    q: "Can I customize or personalize a piece of jewelry?",
    a: "Yes, we offer customization options for certain items. Please contact our customer support team to discuss your specific requirements and availability.",
  },
  {
    q: "How do I care for and clean my jewelry?",
    a: "We recommend using a soft cloth to clean your jewelry regularly. Avoid exposing it to harsh chemicals or extreme temperatures. For detailed care instructions, refer to our 'Jewelry Care' guide on the website.",
  },
  {
    q: "Do you offer international shipping?",
    a: "Yes, we offer international shipping to many countries. Shipping options and rates can be found during the checkout process, once you provide your shipping address.",
  },
  {
    q: "What is your return policy?",
    a: "We have a hassle-free return policy. If you are not satisfied with your purchase, you can return it within 30 days of delivery. Please review our 'Return Policy' page for more information and instructions.",
  },
  {
    q: "Can I track my order?",
    a: "Yes, once your order is shipped, you will receive a tracking number via email. You can use this number to track the progress of your shipment on our website or the courier's website.",
  },
  {
    q: "Do you offer gift wrapping services?",
    a: "Yes, we provide complimentary gift wrapping for all orders. You can select the gift wrap option during the checkout process and add a personalized message to your gift.",
  },
  {
    q: "How can I contact your customer support team?",
    a: "You can reach our customer support team by sending an email to [support email] or by calling our toll-free number [phone number]. Our team is available [working hours] to assist you with any queries or concerns.",
  },
];

/**
 * SECTIONS CONTENT
 */
export const contactFormTopics = [
  {
    topic: "Product Inquiries",
    description: "Availability, Sizing, Customization",
  },
  { topic: "Order Assistance", description: "Existing Orders, Tracking" },
  {
    topic: "Repairs and Maintenance",
    description: "Repairs, Cleaning, Maintenance",
  },
  { topic: "Custom Design Requests", description: "Unique, Customized Pieces" },
  { topic: "Return and Exchange", description: "Returns, Exchanges, Policies" },
  {
    topic: "Shipping and Delivery",
    description: "Shipping, Delivery, Timelines",
  },
  {
    topic: "General Inquiries",
    description: "Non-specific Inquiries, Information",
  },
];

export const topicToSubjectMapping: GenericObj = {
  "Product Inquiries": ["Availability", "Sizing", "Customization", "Materials"],
  "Order Assistance": [
    "Existing Orders",
    "Tracking",
    "Payment",
    "Cancellations",
  ],
  "Repairs and Maintenance": [
    "Repairs",
    "Cleaning",
    "Polishing",
    "Stone Replacement",
  ],
  "Custom Design Requests": [
    "Design Consultation",
    "Bespoke Creations",
    "Personalized Engravings",
  ],
  "Return and Exchange": ["Returns", "Exchanges", "Refunds", "Return Policies"],
  "Shipping and Delivery": [
    "Shipping Options",
    "Delivery Times",
    "Shipping Status",
    "International Shipping",
  ],
  "General Inquiries": [
    "Company Information",
    "Partnerships",
    "Press Inquiries",
    "Website Feedback",
  ],
};

export const contactOptions = {
  locationCustomer: ["Nonis International Distribution AG,Aarhus 159495"],
  hours: "Opening hours: Mon - Fri: 09:00 - 18:00",
  phone: "+45 71 41 77 42",
  email: {
    icon: TfiEmail,
    btn: "Send an email",
    action: "Email",
    time: "1- 3 business days",
  },
  telephone: {
    icon: BsTelephoneOutbound,
    btn: "Call us",
    action: "Phone",
    time: "2-5 minutes",
  },
};
