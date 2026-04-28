# 🌊 Mediterranean Calendar Booking System

A beautiful, vibrant Next.js application for booking dates in 2026 with Mediterranean-inspired design and multi-user support.

## ✨ Features

- 🎨 **Vibrant Mediterranean Design** - Featuring your preferred Mediterranean blue (#0066CC) with complementary colors (coral, yellow, olive, sand)
- 📅 **Full Year 2026 Calendar** - Interactive month navigation with smooth transitions
- 👥 **Multi-User Support** - Different users can login and manage independent bookings
- 🎯 **Easy Date Selection** - Click to select/deselect booking dates
- 📱 **Fully Responsive** - Beautiful on mobile, tablet, and desktop
- 🚀 **Modern Stack** - Next.js 14, React 18, TypeScript, and Tailwind CSS
- ✅ **Smooth Animations** - Delightful hover effects and transitions

## 🎨 Color Palette

- **Mediterranean Blue**: `#0066CC` - Primary color
- **Mediterranean Coral**: `#FF6B6B` - Accent
- **Mediterranean Yellow**: `#FFD93D` - Highlights
- **Mediterranean Olive**: `#6B9E6F` - Secondary accents
- **Mediterranean Sand**: `#F4E4C1` - Neutral tones

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main dashboard
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── UserLogin.tsx       # Login component
│   │   └── Calendar.tsx        # Calendar with booking
│   └── public/                 # Static assets
├── tailwind.config.ts          # Tailwind configuration with custom colors
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies
```

## 🎯 How to Use

1. **Login**: Enter your name on the welcome screen
2. **View Calendar**: Navigate through 2026 using the month buttons
3. **Select Dates**: Click any date to add/remove from your booking
4. **Manage Bookings**: View all selected dates at the bottom of the calendar
5. **Logout**: Click logout to switch users

## 🔧 Customization

### Change Colors

Edit `tailwind.config.ts` to modify the Mediterranean color palette:

```typescript
colors: {
  "mediterranean-blue": "#YOUR_COLOR",
  // ... other colors
}
```

### Modify Calendar Behavior

Edit `src/components/Calendar.tsx` to customize:
- Date selection logic
- Visual styling
- Month navigation
- Date display format

### Update Branding

Edit `src/app/layout.tsx` to change:
- Page title
- Meta description
- Favicon

## 📝 Features for Future Enhancement

- [ ] Backend integration for persistent bookings
- [ ] Database storage (Firebase, PostgreSQL, MongoDB)
- [ ] Email notifications
- [ ] Booking status indicators
- [ ] Admin dashboard for booking management
- [ ] Export bookings to CSV/PDF
- [ ] Dark mode toggle
- [ ] Internationalization (i18n)
- [ ] Calendar printing support

## 🛠️ Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Beautiful icons
- **ESLint** - Code quality

## 📦 Dependencies

- `next@^14.0.0` - Next.js framework
- `react@^18.2.0` - React library
- `react-dom@^18.2.0` - React DOM
- `lucide-react@^0.263.1` - Icon library
- `tailwindcss@^3.3.0` - CSS framework
- `typescript@^5.0.0` - TypeScript compiler

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 👨‍💼 Author

Created by Sebastian - Test project in workshop

## 🌐 Live Demo

Visit the repository at: https://github.com/rasmussangild-hub/workshop

---

**Made with ❤️ and Mediterranean vibes** 🌊☀️
