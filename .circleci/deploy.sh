git config user.name "$USER_NAME"
git config user.email "$USER_EMAIL"

git stash
git checkout circleci
git pull origin circleci

find . -maxdepth 1 ! -name '_site' ! -name '.git' ! -name '.gitignore' ! -name '.circleci' -exec rm -rf {} \;
mv _site/* .
rm -R _site/

git add -fA
git commit --allow-empty -m "Page release ${CIRCLE_BUILD_NUM} from ${CIRCLE_BRANCH}"
git push -q --force https://${GITHUB_TOKEN}@github.com/nuzulul/ngawur.git:circleci

echo "deployed successfully"