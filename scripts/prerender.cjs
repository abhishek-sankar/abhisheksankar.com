const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const routes = [
  { path: '/', filename: 'index.html' },
  { path: '/projects', filename: 'projects.html' },
  { path: '/reading', filename: 'reading.html' },
  { path: '/blogs', filename: 'blogs.html' },
  { path: '/engagements', filename: 'engagements.html' }
];

const baseUrl = 'http://localhost:4173'; // Vite preview server

async function prerenderRoutes() {
  console.log('Starting pre-rendering process...');
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Create dist directory if it doesn't exist
  const distDir = path.join(__dirname, '../dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  for (const route of routes) {
    try {
      console.log(`Pre-rendering ${route.path}...`);
      
      // Navigate to the route
      await page.goto(`${baseUrl}${route.path}`, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      // Wait a bit more for React to fully render
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Get the rendered HTML
      const html = await page.content();
      
      // Enhance HTML with better SEO tags based on route
      const enhancedHtml = enhanceHtmlForSEO(html, route.path);
      
      // Write to file
      const filePath = path.join(distDir, route.filename);
      fs.writeFileSync(filePath, enhancedHtml);
      
      console.log(`✅ Generated ${route.filename}`);
    } catch (error) {
      console.error(`❌ Error pre-rendering ${route.path}:`, error.message);
    }
  }
  
  await browser.close();
  console.log('Pre-rendering completed!');
}

function enhanceHtmlForSEO(html, routePath) {
  let title, description, keywords;
  
  switch (routePath) {
    case '/':
      title = 'Abhishek Sankar - Software Engineer & Full Stack Developer';
      description = 'Abhishek Sankar - Software Engineer and Full Stack Developer. Explore my projects, blog posts, reading lists, and public engagements.';
      keywords = 'Abhishek Sankar, Software Engineer, Full Stack Developer, React, JavaScript, TypeScript';
      break;
    case '/projects':
      title = 'Projects - Abhishek Sankar';
      description = 'Explore the software projects and applications built by Abhishek Sankar, showcasing skills in full-stack development.';
      keywords = 'Projects, Software Development, Full Stack, React, Node.js, Abhishek Sankar';
      break;
    case '/reading':
      title = 'Reading Lists - Abhishek Sankar';
      description = 'Monthly curated reading lists by Abhishek Sankar featuring articles on software engineering, AI, technology, and personal development.';
      keywords = 'Reading Lists, Articles, Software Engineering, AI, Technology, Curated Content, Abhishek Sankar';
      break;
    case '/blogs':
      title = 'Blog - Abhishek Sankar';
      description = 'Read technical blog posts and insights from Abhishek Sankar on software engineering, web development, and technology.';
      keywords = 'Blog, Technical Writing, Software Engineering, Web Development, Abhishek Sankar';
      break;
    case '/engagements':
      title = 'Public Engagements - Abhishek Sankar';
      description = 'View public speaking engagements, conferences, and community involvement by Abhishek Sankar.';
      keywords = 'Public Speaking, Conferences, Community, Engagements, Abhishek Sankar';
      break;
    default:
      title = 'Abhishek Sankar - Software Engineer';
      description = 'Abhishek Sankar - Software Engineer and Full Stack Developer.';
      keywords = 'Abhishek Sankar, Software Engineer';
  }
  
  // Replace or add meta tags
  let enhancedHtml = html
    .replace(/<title>.*?<\/title>/i, `<title>${title}</title>`)
    .replace(/<meta name="description".*?>/i, `<meta name="description" content="${description}">`)
    .replace(/<meta name="keywords".*?>/i, `<meta name="keywords" content="${keywords}">`);
  
  // Add missing SEO meta tags if they don't exist
  if (!enhancedHtml.includes('<meta name="description"')) {
    enhancedHtml = enhancedHtml.replace(
      '<meta name="viewport"',
      `<meta name="description" content="${description}">\n    <meta name="viewport"`
    );
  }
  
  if (!enhancedHtml.includes('<meta name="keywords"')) {
    enhancedHtml = enhancedHtml.replace(
      '<meta name="description"',
      `<meta name="keywords" content="${keywords}">\n    <meta name="description"`
    );
  }
  
  // Replace existing Open Graph and Twitter meta tags with route-specific ones
  enhancedHtml = enhancedHtml
    .replace(/<meta property="og:title".*?>/i, `<meta property="og:title" content="${title}">`)
    .replace(/<meta property="og:description".*?>/i, `<meta property="og:description" content="${description}">`)
    .replace(/<meta property="og:url".*?>/i, `<meta property="og:url" content="https://abhisheksankar.com${routePath}">`)
    .replace(/<meta name="twitter:title".*?>/i, `<meta name="twitter:title" content="${title}">`)
    .replace(/<meta name="twitter:description".*?>/i, `<meta name="twitter:description" content="${description}">`)
    .replace(/<link rel="canonical".*?>/i, `<link rel="canonical" href="https://abhisheksankar.com${routePath}">`);
  
  // Add any missing SEO tags if they don't exist
  if (!enhancedHtml.includes('<meta name="robots"')) {
    enhancedHtml = enhancedHtml.replace('</head>', `    <meta name="robots" content="index, follow">\n  </head>`);
  }
  
  return enhancedHtml;
}

if (require.main === module) {
  prerenderRoutes().catch(console.error);
}

module.exports = { prerenderRoutes }; 