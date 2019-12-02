npm i uglifyjs
npm i uglifycss
cp *.css dist/
cp *.js dist/
uglifyjs dist/ushio-footer.js -o dist/ushio-footer.min.js --source-map url='dist/ushio-footer.min.js.map'
uglifyjs dist/ushio-head.js -o dist/ushio-head.min.js --source-map url='dist/ushio-head.min.js.map'
uglifycss dist/ushio-js.css > dist/ushio-js.min.css
uglifycss dist/ushio-js.mobile.css > dist/ushio-js.mobile.min.css
uglifycss dist/ushio-js.tips.css > dist/ushio-js.tips.min.css