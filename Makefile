install:
    install ci

publish: 
    npm.publish --dry-run

gendiff: 
    node bin/gendiff.js