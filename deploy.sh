mkdir -p dist
npm install
npm run build
git add dist
git subtree push --prefix dist origin gh-pages
