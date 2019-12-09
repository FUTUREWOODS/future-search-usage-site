## Usage
環境立ち上げ
```
$ docker-compose up --build

もしくは
$ docker-compose build --no-cache
$ docker-compose start
```

## Development

`docker-compose up` 後に以下でviewへアクセス
[http://localhost:3000/](http://localhost:3000/)

`docker-compose up` 後に以下で管理画面(wordpress)へアクセス
[http://localhost:9000/](http://localhost:9000/)

## db dump
```
docker exec -it future_search_usage_db sh -c 'mysqldump wordpress -u wp_user -pdatabase_password 2> /dev/null' > db/data/mysql.dump.sql 
```