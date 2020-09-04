#npm i -g uglify-js
#npm i -g uglifycss
cp *.css dist/
cp *.js dist/
cd dist/
terser ./ushio-footer.js -m -o ./ushio-footer.min.js --source-map url='/ushio-footer.min.js.map'
uglifyjs ./ushio-head.js -m -o ./ushio-head.min.js --source-map url='/ushio-head.min.js.map'
uglifyjs ./jquery.md5.js -m -o ./jquery.md5.min.js --source-map url='/jquery.md5.min.js.map'
uglifycss ./ushio-js.css > ./ushio-js.min.css
uglifycss ./ushio-js.mobile.css > ./ushio-js.mobile.min.css
uglifycss ./ushio-js.tips.css > ./ushio-js.tips.min.css
