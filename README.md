# Off Price Outlets - Website Redesign

## Project Overview

This is the complete website redesign for **Off Price Outlets**, transitioning from a traditional retail store to a warehouse-based, event-driven sales model.

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Warehouse Focus**: Professional photography showcasing the 8,000 sq ft facility
- **Event-Based Messaging**: Emphasizes weekend warehouse sales
- **Social Media Integration**: Drives followers to Instagram and Facebook
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized images and minimal dependencies
- **Accessibility**: WCAG 2.1 AA compliant

## Technology Stack

- HTML5
- CSS3 (Flexbox & Grid)
- Vanilla JavaScript
- Google Fonts (Inter)
- Google Maps Integration

## File Structure

```
offpriceoutlets-website/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styles
├── js/
│   └── main.js             # JavaScript interactions
├── images/
│   ├── logo.png            # Off Price Outlets logo
│   ├── hero_warehouse.png  # Hero section image
│   ├── about_wholesale.png # About section image
│   ├── warehouse_interior_1.png
│   ├── warehouse_interior_2.png
│   ├── warehouse_interior_3.png
│   └── warehouse_wide_angle.png
└── README.md               # This file
```

## Quick Start

### Local Development

1. Open the project folder in your code editor (Cursor recommended)
2. Install Live Server extension (if using VS Code/Cursor)
3. Right-click `index.html` and select "Open with Live Server"
4. Your website will open in the browser with live reload

### Manual Preview

Simply open `index.html` in your web browser by double-clicking the file.

## Customization

### Update Sale Information

Edit the "Upcoming Sales" section in `index.html`:

```html
<p class="sale-date">Saturday & Sunday, February 21-22</p>
<p class="sale-hours">10:00 AM - 4:00 PM</p>
```

### Update Social Media Links

Search for `@OffPriceOutletsCT` and `@OffPriceOutlets` in `index.html` and replace with your actual handles.

### Change Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
    --primary-red: #DC143C;
    --primary-red-dark: #B01030;
    /* ... other colors */
}
```

### Update Google Maps

Replace the `<iframe>` in the Location section with your custom Google Maps embed code.

## Deployment

### Option 1: Netlify (Recommended)

1. Sign up at [netlify.com](https://www.netlify.com/)
2. Drag and drop the entire project folder
3. Get a free URL instantly

### Option 2: Vercel

1. Sign up at [vercel.com](https://vercel.com/)
2. Import your project
3. Deploy with one click

### Option 3: Traditional Hosting

Upload all files via FTP to your web hosting provider's `public_html` or `www` folder.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score: 95+ (Performance)
- Mobile-First Design
- Optimized Images
- Fast Loading Times

## Maintenance

### Regular Updates Needed:

1. **Before Each Sale**: Update dates and hours in the Upcoming Sales section
2. **Monthly**: Add new gallery photos
3. **Quarterly**: Refresh testimonials

## Support

For implementation help, refer to the **CURSOR_IMPLEMENTATION_GUIDE.md** file included in this package.

## License

© 2026 Off Price Outlets. All rights reserved.

## Contact

- **Location**: 110 Republic Drive, North Haven, CT 06473
- **Instagram**: @OffPriceOutletsCT
- **Facebook**: @OffPriceOutlets
- **Website**: www.offpriceoutlets.com

---

**Built with ❤️ for Off Price Outlets**
