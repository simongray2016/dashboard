#install nodejs
node -v
npm -v

#install pug
npm install pug-cli -g
pug --version

#build code
pug -w ./src/view/page -o ./dist/html -P

#end build code
Ctrl+C -> Y

