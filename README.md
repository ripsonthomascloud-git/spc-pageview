# Page Flip Book - React Application

A beautiful, interactive page flip book application built with React that works seamlessly on both desktop and mobile devices.

## Features

- **3D Page Flip Animation**: Realistic page turning effect using CSS 3D transforms
- **Responsive Design**: Automatically adapts to desktop and mobile screens
- **Touch Enabled**: Swipe gestures for mobile devices
- **Dynamic Styling**: Each page can have custom backgrounds and content
- **Smooth Transitions**: Fluid animations with cubic-bezier easing
- **Navigation Controls**:
  - Previous/Next buttons
  - Page indicator dots
  - Interactive page corner curls with subtle hints
  - Touch/swipe support on mobile
  - Click navigation on desktop

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Adding Pages

Edit the `pages` array in `src/App.jsx`:

```javascript
const pages = [
  {
    id: 1,
    content: (
      <div className="page-content">
        <h1>Your Title</h1>
        <p>Your content here</p>
      </div>
    ),
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  // Add more pages...
]
```

### Styling

Modify `src/styles.css` to customize colors, fonts, animations, and layout.

## Browser Support

Works on all modern browsers that support CSS 3D transforms:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT
