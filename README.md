This is the repository for Pretty Stuff, it runs on the [Ghost CMS](https://ghost.org)

## Run locally 💻
- Clone this repository
- The data folder with the actually blog content and images is _not_ part of it, you have to create sample data yourself
- run `npm install --production`
- run `npm start`

## Deployment 🚀
- Add the new remote repository where you want to deploy the site
  `git remote add web ssh://root@prettystuff.io/home/joshua/prettystuff.io`
- Now `git remote -v` gives you a list to both the server and you can deploy the site using `git push web`
