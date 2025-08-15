# Intigro - Automation Testing Training Website

A modern, responsive website for Intigro, a professional automation testing training company specializing in Selenium WebDriver and C# automation training.

## 🚀 Features

### Core Features
- **Google Authentication**: Secure login/logout system with Google OAuth
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI/UX**: Beautiful animations and smooth interactions using Framer Motion
- **Multi-page Navigation**: Seamless navigation between different sections
- **User Dashboard**: Personalized learning dashboard for registered users

### Pages
- **Home**: Hero section, features, course overview, and call-to-action
- **About Us**: Company differentiators, team information, and core values
- **Contact**: Multiple contact methods, social media links, and contact form
- **Learning Content**: Comprehensive course curriculum and learning materials
- **Dashboard**: User progress tracking and learning management
- **Login/Register**: Authentication system with Google integration

### Technical Features
- **React 18**: Latest React features and hooks
- **React Router**: Client-side routing and navigation
- **Framer Motion**: Smooth animations and transitions
- **CSS Variables**: Consistent design system with CSS custom properties
- **Responsive Grid**: CSS Grid and Flexbox for modern layouts
- **Icon Integration**: React Icons for consistent iconography

## 🛠️ Technology Stack

- **Frontend**: React 18, React Router, Framer Motion
- **Styling**: CSS3 with CSS Variables, CSS Grid, Flexbox
- **Icons**: React Icons (FontAwesome)
- **Authentication**: Custom auth context with Google OAuth simulation
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- **Modern web browser** (Chrome, Firefox, Safari, Edge)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd intigro-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm start
```

The website will open automatically in your default browser at `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js      # Navigation component
│   ├── Footer.js      # Footer component
│   └── *.css          # Component-specific styles
├── contexts/           # React contexts
│   └── AuthContext.js # Authentication context
├── pages/             # Page components
│   ├── Home.js        # Home page
│   ├── About.js       # About Us page
│   ├── Contact.js     # Contact page
│   ├── Content.js     # Learning content page
│   ├── Login.js       # Authentication page
│   ├── Dashboard.js   # User dashboard
│   └── *.css          # Page-specific styles
├── App.js             # Main app component
├── index.js           # Entry point
├── index.css          # Global styles
└── App.css            # App-specific styles
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2563eb) - Main brand color
- **Secondary**: Orange (#f59e0b) - Accent color
- **Accent**: Green (#10b981) - Success/positive actions
- **Text**: Dark gray (#1f2937) - Primary text
- **Background**: White (#ffffff) and light gray (#f9fafb)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately across device sizes

### Components
- **Cards**: Consistent card design with hover effects
- **Buttons**: Primary, secondary, and outline button variants
- **Forms**: Clean, accessible form inputs with validation
- **Navigation**: Sticky navigation with mobile menu

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔐 Authentication System

### Current Implementation
- **Local Storage**: User sessions stored in browser localStorage
- **Mock Google OAuth**: Simulated Google login for demonstration
- **Protected Routes**: Dashboard access requires authentication

### Production Implementation
To implement real Google OAuth:
1. Set up Firebase Authentication or Google OAuth
2. Replace mock functions in `AuthContext.js`
3. Add proper error handling and validation
4. Implement secure session management

## 🎯 Key Features Explained

### 1. Interactive Course Modules
- Expandable course sections with detailed lesson information
- Progress tracking for each module
- Resource tags and lesson types (video, hands-on, project)

### 2. Learning Path Visualization
- Timeline-based learning path display
- Alternating left/right layout for visual interest
- Responsive design that adapts to mobile

### 3. User Dashboard
- **Overview Tab**: Statistics, quick actions, recent activity
- **Progress Tab**: Visual progress tracking with circular progress
- **Schedule Tab**: Upcoming sessions and live events

### 4. Contact System
- Multiple contact methods (email, phone, address, social media)
- Interactive contact form with validation
- Social media integration
- FAQ section for common questions

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on git push

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in project directory
3. Follow prompts to deploy

### Traditional Hosting
1. Run: `npm run build`
2. Upload `build` folder contents to your web server
3. Configure server for SPA routing

## 🔧 Customization

### Branding
- Update colors in `src/index.css` CSS variables
- Replace logo and brand images
- Modify company information in components

### Content
- Update course modules in `Content.js`
- Modify team information in `About.js`
- Change contact details in `Contact.js`

### Styling
- Modify CSS variables for consistent theming
- Update component styles in respective CSS files
- Add custom animations using Framer Motion

## 📊 Performance Optimization

### Built-in Optimizations
- **Code Splitting**: React Router for lazy loading
- **Optimized Images**: Placeholder images for demonstration
- **CSS Optimization**: Efficient CSS with variables and modern properties
- **Animation Performance**: Hardware-accelerated animations

### Additional Optimizations
- **Image Optimization**: Use WebP format and proper sizing
- **Lazy Loading**: Implement lazy loading for images and components
- **Service Worker**: Add PWA capabilities
- **CDN**: Use CDN for static assets

## 🧪 Testing

### Manual Testing
- Test all navigation links
- Verify responsive design on different screen sizes
- Test authentication flow
- Validate form submissions

### Automated Testing
```bash
npm test
```

## 🐛 Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Kill process on port 3000
   npx kill-port 3000
   ```

2. **Dependencies Issues**
   ```bash
   # Clear npm cache and reinstall
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build Errors**
   ```bash
   # Clear build cache
   npm run build -- --reset-cache
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions:
- **Email**: info@intigro.com
- **Phone**: +1 (555) 123-4567
- **Website**: [intigro.com](https://intigro.com)

## 🎉 Acknowledgments

- **React Team** for the amazing framework
- **Framer Motion** for smooth animations
- **React Icons** for comprehensive icon library
- **Google Fonts** for beautiful typography

---

**Intigro** - Empowering professionals with world-class automation testing training.
