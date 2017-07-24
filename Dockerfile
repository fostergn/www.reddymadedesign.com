# Dockerfile
FROM nimmis/apache-php5

RUN apt-get update -y

# basics
RUN apt-get install -y openssh-server git-core openssh-client curl
RUN apt-get install -y build-essential
RUN apt-get install -y openssl libreadline6 libreadline6-dev curl zlib1g zlib1g-dev libssl-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt-dev autoconf libc6-dev ncurses-dev automake libtool bison subversion pkg-config

# install node/npm
RUN apt-get install git nodejs npm -y
RUN ln -s "$(which nodejs)" /usr/bin/node

# Upgrade node to 6.2.2
RUN npm cache clean -f
RUN npm install -g n
RUN n 6.2.2
RUN ln -sf /usr/local/n/versions/node/6.2.2/bin/node /usr/bin/node

# Build Scripts
RUN npm install bower -g
RUN npm install gulp -g
RUN npm install yarn -g

# Configuration Files
COPY docker-apache.conf /etc/apache2/sites-available/000-default.conf
COPY docker-entrypoint.sh /docker-entrypoint.sh

# Expose 80 (HTTP)
EXPOSE 80
EXPOSE 3000

# Permissions and rewrites
RUN a2enmod rewrite
RUN usermod -u 1000 www-data

ENTRYPOINT ["/docker-entrypoint.sh"]