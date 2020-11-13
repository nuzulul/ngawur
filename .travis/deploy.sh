git config user.name "${GITHUB_NAME}"
git config user.email "${GITHUB_EMAIL}"

git stash
git checkout site
git pull origin site

find . -maxdepth 1 ! -name '_site' ! -name '.git' ! -name '.gitignore' ! -name '.travis' -exec rm -rf {} \;
mv _site/* .
rm -R _site/

git add -fA
git commit --allow-empty -m "[ci skip] [skip ci] Page release #$TRAVIS_BUILD_NUMBER"
git push -q --force https://${GITHUB_TOKEN}@github.com/nuzulul/ngawur.git HEAD:site

echo "deployed successfully"