## Installing Nginx
``` bash
* sudo apt update
* sudo apt install nginx :  Command ini digunakan untuk menginstall Nginx.

```
## Checking your Web Server
### Digunakan untuk memeriksa system untuk memastikan layanannya berjalan dengan cara mengetik didalam terminal
``` bash
* systemctl status nginx
* output : nginx.service - A high performance web server and a reverse proxy server
   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
   Active: active (running) since Fri 2022-03-01 16:08:19 UTC; 3 days ago
     Docs: man:nginx(8)
 Main PID: 2369 (nginx)
    Tasks: 2 (limit: 1153)
   Memory: 3.5M
   CGroup: /system.slice/nginx.service
           ├─2369 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
           └─2380 nginx: worker process
  .
```
## Setting Up Vhost Domain
#### Command ```mkdir``` untuk membuat directory baru.
``` bash
   * sudo mkdir -p /var/www/your_domain/html
```
#### Command ```chown``` untuk menetapkan kepemilikan dengan menggunakan variabel $USER.
``` bash
   * sudo chown -R $USER:$USER /var/www/your_domain/html 
```
#### Command ``` chmod``` untuk mengeksekusi berkas & memberikan izin untuk membaca dan eksekusi.
``` bash
   * sudo chmod -R 755 /var/www/your_domain 
```
#### Command ```var``` untuk membuat contoh halaman index.html.
``` bash

* nano /var/www/your_domain/html/index.html
```
``` bash
* <html>
    <head>
        <title>Welcome to your_domain!</title>
    </head>
    <body>
        <h1>Success!  The your_domain server block is working!</h1>
    </body>
</html>
```


####  Command ```sites-available``` untuk menyajikan konten yang telah dibuat.
 ``` bash
   sudo nano /etc/nginx/sites-available/your_domain
 ``` 
  ``` bash
       server {
              listen 80;
              listen [::]:80;
      
              root /var/www/your_domain/html;
              index index.html index.htm index.nginx-debian.html;
      
              server_name your_domain www.your_domain;
      
              location / {
                      try_files $uri $uri/ =404;
              }
         }
   ```
#### Command ```sites-enabled``` untuk mengaktifkan file yang dapat dibaca oleh Nginx saat startup.
 ``` bash
* sudo ln -s /etc/nginx/sites-available/your_domain /etc/nginx/sites-enabled/ 
```
#### Command ```nginx.conf``` untuk menghindari kemungkinan masalah pada memori hash bucket.
``` bash
* sudo nano /etc/nginx/nginx.conf
```
#### Command ```nginx -t``` untuk memastikan tidak ada masalah syntax dalam salah satu file Nginx.
``` bash
* sudo nginx -t
```
#### Command ```restart``` untuk memulai ulang Nginx.
``` bash
* sudo systemctl restart nginx
```
### Note = Untuk domain diisi dengan domain kita sendiri.
#### contoh : ```your_domain``` menjadi ```hello.com```
