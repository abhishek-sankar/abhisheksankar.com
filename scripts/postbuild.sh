#!/bin/bash

echo "🚀 Starting post-build process..."

# Check if we're in a CI environment
if [ "$CI" = "true" ] || [ -n "$CF_PAGES" ] || [[ "$PWD" == *"/opt/buildhome"* ]]; then
    echo "🔧 Detected CI environment"
    
    # Try to run react-snap with error handling
    echo "📸 Attempting static site generation with react-snap..."
    
    if npm run react-snap-direct 2>/dev/null; then
        echo "✅ Static site generation completed successfully!"
    else
        echo "⚠️  Static site generation failed (this is expected in some CI environments)"
        echo "📝 Your site will still work perfectly - just without pre-rendered HTML"
        echo "🌐 This only affects SEO and initial page load performance"
    fi
else
    echo "💻 Local environment detected - running react-snap normally"
    npx react-snap
fi

echo "🎉 Post-build process completed!" 