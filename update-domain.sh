#!/bin/bash

# SEO Domain Update Script for Het Patel's Portfolio
# This script helps you update your domain across all SEO files

echo "🚀 SEO Domain Update Script"
echo "=========================="
echo ""

# Get the new domain from user
read -p "Enter your domain (e.g., https://yourdomain.com): " NEW_DOMAIN

# Remove trailing slash if present
NEW_DOMAIN=${NEW_DOMAIN%/}

echo ""
echo "Updating domain to: $NEW_DOMAIN"
echo ""

# Update robots.txt
echo "📝 Updating robots.txt..."
sed -i "s|https://your-domain.com|$NEW_DOMAIN|g" client/public/robots.txt
echo "✅ robots.txt updated"

# Update sitemap.xml
echo "📝 Updating sitemap.xml..."
sed -i "s|https://your-domain.com|$NEW_DOMAIN|g" client/public/sitemap.xml
echo "✅ sitemap.xml updated"

# Update index.html
echo "📝 Updating index.html..."
sed -i "s|https://your-domain.com|$NEW_DOMAIN|g" client/index.html
echo "✅ index.html updated"

echo ""
echo "🎉 Domain update completed!"
echo ""
echo "Next steps:"
echo "1. Replace 'YOUR_GOOGLE_VERIFICATION_CODE' in client/index.html with your actual verification code"
echo "2. Create social media images (og-image.jpg, twitter-image.jpg)"
echo "3. Create favicon files"
echo "4. Submit your sitemap to Google Search Console"
echo "5. Verify your site in Google Search Console"
echo ""
echo "For detailed instructions, see SEO_SETUP_GUIDE.md"
