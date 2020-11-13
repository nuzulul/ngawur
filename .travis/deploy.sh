# cleanup "_site"
rm -rf _site
mkdir _site

# clone remote repo to "_site"
git clone https://${GITHUB_TOKEN}@github.com/nuzulul/ngawur.git --branch site _site
cd _site
git rm -rf .
cd ..

# build with Jekyll into "_site"
bundle exec jekyll build

cd _site

git config user.name "${GITHUB_NAME}"
git config user.email "${GITHUB_EMAIL}"

git add --all
git commit --allow-empty -m "Page release #$TRAVIS_BUILD_NUMBER [ci skip] [skip ci]"
git push -q --force https://${GITHUB_TOKEN}@github.com/nuzulul/ngawur.git HEAD:site

echo "deployed successfully"