## Installing Nginx
* sudo apt update
* sudo apt install nginx :  Command ini digunakan untuk menginstall Nginx.
## Checking your Web Server

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
  : Digunakan untuk memeriksa system untuk memastikan layanannya berjalan dengan cara mengetik didalam terminal.
```
## Setting Up Server Blocks (Recommended)
* sudo mkdir -p /var/www/your_domain/html : Command tersebut digunakan untuk membuat directory baru.
* sudo chown -R $USER:$USER /var/www/your_domain/html : Command tersebut digunakan untuk menetapkan kepemilikan dengan menggunakan variabel $USER.
* sudo chmod -R 755 /var/www/your_domain : Command tersebut memungkinkan pemiliknya untuk membaca, menulis, dan mengeksekusi berkas tersebut sambil hanya memberikan izin untuk membaca dan eksekusi kepada grup dan yang lainnya.
* nano /var/www/your_domain/html/index.html
* <html>
    <head>
        <title>Welcome to your_domain!</title>
    </head>
    <body>
        <h1>Success!  The your_domain server block is working!</h1>
    </body>
</html>
  :Command tersebut digunakan untuk membuat ontoh halaman index.html dengan menggunakan nano atau text editor lainnya.
 * sudo nano /etc/nginx/sites-available/your_domain :
