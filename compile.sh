npm i -g uglify-js
npm i -g uglifycss
cp *.css dist/
cp *.js dist/
uglifyjs dist/ushio-footer.js -o dist/ushio-footer.min.js --source-map url='dist/ushio-footer.min.js.map'
uglifyjs dist/ushio-head.js -o dist/ushio-head.min.js --source-map url='dist/ushio-head.min.js.map'
uglifyjs dist/jquery.md5.js -o dist/jquery.md5.min.js --source-map url='dist/jquery.md5.min.js.map'
uglifycss dist/ushio-js.css > dist/ushio-js.min.css
uglifycss dist/ushio-js.mobile.css > dist/ushio-js.mobile.min.css
uglifycss dist/ushio-js.tips.css > dist/ushio-js.tips.min.css
