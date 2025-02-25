// data/blogs.js

// Available blog categories
export const categories = ['All', 'Nutrition', 'Health', 'App Features', 'Lifestyle'];

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Understanding Food Labels: What to Look For',
    excerpt: 'Learn how to decode nutrition labels and identify ingredients that may affect your health goals...',
    coverImage: 'https://picsum.photos/seed/picsum/300/200',
    category: 'Nutrition',
    date: 'Feb 15, 2025',
    readTime: '5 min read',
    slug: 'understanding-food-labels'
  },
  {
    id: 2,
    title: 'Common Food Additives to Avoid',
    excerpt: 'Discover which common food additives might be problematic for your specific health conditions...',
    coverImage: 'https://picsum.photos/seed/picsum/300/200',
    category: 'Health',
    date: 'Feb 10, 2025',
    readTime: '4 min read',
    slug: 'common-food-additives-to-avoid'
  },
  {
    id: 3,
    title: 'Personalized Nutrition: The Future of Healthy Eating',
    excerpt: 'Why one-size-fits-all nutrition advice is becoming outdated, and how personalized approaches can help...',
    coverImage: 'https://picsum.photos/seed/picsum/300/200',
    category: 'Nutrition',
    date: 'Feb 5, 2025',
    readTime: '7 min read',
    slug: 'personalized-nutrition'
  },
  {
    id: 4,
    title: 'How Our Ingredient Scanner Helps With Food Allergies',
    excerpt: 'See how our app makes grocery shopping easier and safer for people with food allergies and sensitivities...',
    coverImage: 'https://picsum.photos/seed/picsum/300/200',
    category: 'App Features',
    date: 'Jan 28, 2025',
    readTime: '3 min read',
    slug: 'ingredient-scanner-food-allergies'
  },
  {
    id: 5,
    title: 'Building a Healthier Pantry: Staples for Every Diet',
    excerpt: 'Essential ingredients to keep on hand that work for various dietary preferences and restrictions...',
    coverImage: 'https://picsum.photos/seed/picsum/300/200',
    category: 'Lifestyle',
    date: 'Jan 20, 2025',
    readTime: '6 min read',
    slug: 'healthier-pantry-staples'
  },
];

export const sample_blog = [
  {
    id: 1,
    title: "Understanding Food Labels: What to Look For",
    excerpt: "Learn how to decode nutrition labels and identify ingredients that may affect your health goals...",
    coverImage: "https://picsum.photos/id/237/300/200",
    category: "Nutrition",
    date: "Feb 15, 2025",
    readTime: "5 min read",
    slug: "understanding-food-labels",
    author: {
      name: "Dr. Emily Chen",
      role: "Nutrition Specialist",
      avatar: "",
    },
    content: `
Food labels can be **confusing** and overwhelming. With numerous nutritional claims, ingredient lists, and percentages, it's hard to know what to focus on.

## What to Look for First

When examining a food label, start with the ingredient list. Ingredients are listed in descending order by weight:

- Refined grains
- Added sugars
- Unhealthy oils

🚫 Be wary of products with long ingredient lists, especially those containing items you don't recognize.

## Understanding Serving Sizes

> Always check the serving size when reviewing nutritional information. Manufacturers sometimes use small serving sizes to make the product appear healthier.

## How Our App Helps

Our ingredient scanning app simplifies this process by:

- 🔍 Highlighting conflicting ingredients
- 📖 Explaining complex ingredients in simple terms
- 🥗 Offering healthier alternatives
- 📊 Tracking your consumption patterns

By understanding what's in your food, you can make more informed choices aligned with your health goals.  
`,
  },
];
