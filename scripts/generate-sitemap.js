const fs = require('fs');
const path = require('path');

const domain = 'https://abhisheksankar.com';

// Function to get blog data
function getBlogRoutes() {
  try {
    // Read the blogs data file
    const blogsDataPath = path.join(__dirname, '../src/data/blogs.ts');
    const blogsData = fs.readFileSync(blogsDataPath, 'utf8');
    
    // Extract blog IDs using regex
    const blogIdMatches = blogsData.match(/id:\s*["']([^"']+)["']/g);
    
    if (!blogIdMatches) {
      console.warn('No blog IDs found in blogs.ts');
      return [];
    }
    
    const blogIds = blogIdMatches.map(match => {
      const idMatch = match.match(/id:\s*["']([^"']+)["']/);
      return idMatch ? idMatch[1] : null;
    }).filter(Boolean);
    
    return blogIds.map(id => ({
      path: `/blogs/${id}`,
      changefreq: 'monthly',
      priority: '0.7'
    }));
  } catch (error) {
    console.warn('Error reading blog data:', error.message);
    return [];
  }
}

const staticRoutes = [
  { path: '/', changefreq: 'monthly', priority: '1.0' },
  { path: '/projects', changefreq: 'monthly', priority: '0.8' },
  { path: '/blogs', changefreq: 'weekly', priority: '0.8' },
  { path: '/engagements', changefreq: 'monthly', priority: '0.7' }
];

// Combine static routes with dynamic blog routes
const routes = [...staticRoutes, ...getBlogRoutes()];

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routes.forEach(route => {
    sitemap += `
  <url>
    <loc>${domain}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  const publicDir = path.join(__dirname, '../public');
  const distDir = path.join(__dirname, '../dist');
  
  // Write to both public and dist directories
  if (fs.existsSync(publicDir)) {
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log('✅ Generated sitemap.xml in public directory');
  }
  
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
    console.log('✅ Generated sitemap.xml in dist directory');
  }
}

function generateRobotsTxt() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml`;

  const publicDir = path.join(__dirname, '../public');
  const distDir = path.join(__dirname, '../dist');
  
  // Write to both public and dist directories
  if (fs.existsSync(publicDir)) {
    fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
    console.log('✅ Generated robots.txt in public directory');
  }
  
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt);
    console.log('✅ Generated robots.txt in dist directory');
  }
}

if (require.main === module) {
  generateSitemap();
  generateRobotsTxt();
}

module.exports = { generateSitemap, generateRobotsTxt }; 