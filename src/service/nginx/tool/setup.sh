#!/bin/bash

$LOCAL && openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout $REACT_CERTS_KEY -out $REACT_CERTS -subj "/C=MO/L=KH/O=1337/OU=student/CN=www.$DOMAIN_NAME"
$LOCAL && openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout $NESTJS_CERTS_KEY -out $NESTJS_CERTS -subj "/C=MO/L=KH/O=1337/OU=student/CN=dev.$DOMAIN_NAME"

sed -i "s|react_port|$REACT_PORT|g" /etc/nginx/sites-available/default
sed -i "s|nestjs_port|$NESTJS_PORT|g" /etc/nginx/sites-available/default
sed -i "s|my_domain|$DOMAIN_NAME|g" /etc/nginx/sites-available/default
sed -i "s|react_certs_key|$REACT_CERTS_KEY|g" /etc/nginx/sites-available/default
sed -i "s|react_certs|$REACT_CERTS|g" /etc/nginx/sites-available/default
sed -i "s|nestjs_certs_key|$NESTJS_CERTS_KEY|g" /etc/nginx/sites-available/default
sed -i "s|nestjs_certs|$NESTJS_CERTS|g" /etc/nginx/sites-available/default

#sed -i '40s/.*/\tlog_format debug '\''$remote_addr - $remote_user [$time_local] '\'' '\''"$request" $status $body_bytes_sent '\'' '\''"$http_referer" "$http_user_agent"'\'';/' /etc/nginx/nginx.conf
#sed -i '41s/.*/\taccess_log \/var\/log\/nginx\/access.log debug;/' /etc/nginx/nginx.conf
#sed -i '42s/.*/\terror_log \/var\/log\/nginx\/error.log debug;/' /etc/nginx/nginx.conf

#cat /etc/nginx/nginx.conf

nginx -g "daemon off;"