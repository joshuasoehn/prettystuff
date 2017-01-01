#/bin/sh
export NODE_ENV=production
GIT_WORK_TREE=/var/www/prettystuff git checkout -f

cd /var/www/prettystuff
pm2 kill
npm install --production
chown -R ghost:ghost /var/www/prettystuff
pm2 start index.js --name "ghost"
echo "Deployed"
