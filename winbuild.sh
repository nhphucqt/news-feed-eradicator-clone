npm install
mkdir -p build
mkdir -p build/icons
cp src/icons/* build/icons/
cp src/manifest.json build/manifest.json
cp src/options/options.html build/options.html
cp src/background/background.html build/background.html
cp assets/icon16.png build/icon16.png
cp assets/icon32.png build/icon32.png
cp assets/icon48.png build/icon48.png
cp assets/icon64.png build/icon64.png
cp assets/icon128.png build/icon128.png
./node_modules/.bin/rollup -c --watch