# E-Commerce Platform - Next.js 16

A modern, responsive e-commerce platform built with Next.js 16, featuring a complete shopping cart system with Zustand state management.

## ✨ Features

- 🛍️ **Shopping Cart System** - Full-featured cart with Zustand state management
- 🎨 **Responsive Design** - Mobile-first design that works on all devices
- 🎯 **Product Management** - Browse products by categories
- 🛒 **Cart Drawer** - Slide-in cart drawer for quick access
- 💾 **Persistent Cart** - Cart data saved in localStorage
- 🎠 **Category Carousel** - Interactive category navigation
- 🔍 **Product Search** - Search functionality
- 📱 **Sticky Header** - Always accessible navigation
- 🎭 **Social Integration** - Social media icons using React Icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Yarn or npm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd test
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Run the development server:
```bash
yarn dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build

Create a production build:

```bash
yarn build
# or
npm run build
```

Run the production build:

```bash
yarn start
# or
npm start
```

## 📁 Project Structure

```

├── src/
|   ── app/                          # Next.js App Router
│   ├── cart/
|   |     └── page.tsx                          # Cart page
│   └── product/ 
|   |        └── [id].tsx                 # Product pages
|    page.tsx
|    layout.tsx
│   ├── components/
│   │   ├── Cart/                 # Cart components
│   │   │   ├── CartDrawer.tsx   # Slide-in cart drawer
│   │   │   ├── CartPage.tsx     # Full cart page
│   │   │   └── index.ts
│   │   ├── Carousel/            # Carousel components
│   │   └── ui/                  # Shadcn UI components
│   ├── screens/
│   │   └── HomePage/
│   │       └── sections/        # Homepage sections
│   │           ├── Header/      # Sticky header with cart
│   │           ├── FeaturedProductsSection/
│   │           ├── CategoryHighlightSection/
│   │           └── FooterSection/
│   ├── store/
│   │   └── useCartStore.ts      # Zustand cart store
│   ├── hook/
│   │   └── useAddToCart.ts      # Cart utility hook
│   └── lib/
│       ├── fetchApi.ts          # API utilities
│       └── utils.ts
└── public/                       # Static assets
```

## 🛠️ Technologies

### Core
- **Next.js 16** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework

### State Management
- **Zustand** - Lightweight state management for cart

### UI Components
- **Shadcn UI** - UI component library (Radix UI primitives)
- **React Icons** - Icon library (Font Awesome icons)

### Fonts
- **Google Fonts** - Roboto (300, 400, 500, 700 weights)

## 🛒 Shopping Cart Features

The cart system includes:

- **Add to Cart** - Add products with custom quantities
- **Update Quantity** - Increase/decrease item quantities
- **Remove Items** - Delete items from cart
- **Clear Cart** - Remove all items at once
- **Persistent Storage** - Cart saved to localStorage
- **Real-time Updates** - Cart count updates instantly
- **Cart Drawer** - Quick access side drawer
- **Full Cart Page** - Detailed cart view at `/cart`
- **Order Summary** - Total price calculation

### Using the Cart

```typescript
import { useCartStore } from '@/store/useCartStore';

const MyComponent = () => {
  const { 
    cart,              // Current cart items
    addToCart,         // Add product
    removeFromCart,    // Remove product
    updateQuantity,    // Update quantity
    getTotalItems,     // Get item count
    getTotalPrice      // Get total price
  } = useCartStore();

  // Add product to cart
  const handleAdd = () => {
    addToCart(product, quantity);
  };

  return <button onClick={handleAdd}>Add to Cart</button>;
};
```

For detailed cart documentation, see [CART_DOCUMENTATION.md](./CART_DOCUMENTATION.md)

## 🎨 Key Components

### Header
- Sticky navigation
- Search functionality
- Cart drawer toggle
- Real-time cart count
- Responsive design

### Cart Drawer
- Slides from right
- Shows cart items
- Quantity controls
- Remove items
- View cart/Continue shopping buttons

### Product Page
- Product details
- Add to cart
- Quantity selector
- Related products

### Category Section
- Responsive carousel
- Category navigation
- Featured categories

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Environment Setup

Create a `.env.local` file for environment variables:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

## 📝 Scripts

- `yarn dev` - Start development server
- `yarn build` - Create production build
- `yarn start` - Run production server
- `yarn lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Shadcn for the beautiful UI components
- Zustand for simple state management
- React Icons for comprehensive icon library
