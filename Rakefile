# Rakefile

task :default do
  puts "Running CI tasks..."

  # Dengan menjalankan perintah jekyll build di production environment
  # Travis CI akan membuat _site/ direktori yang berisi
  # file static site yang siap untuk di publish
  sh("JEKYLL_ENV=production bundle exec jekyll build")
  puts "Jekyll successfully built!"
end