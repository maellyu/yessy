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
``` bash
   * sudo chown -R $USER:$USER /var/www/your_domain/html : Command tersebut digunakan untuk menetapkan kepemilikan dengan menggunakan variabel $USER.
```
``` bash
   * sudo chmod -R 755 /var/www/your_domain : Command tersebut memungkinkan pemiliknya untuk membaca, menulis, dan mengeksekusi berkas tersebut sambil hanya memberikan izin untuk membaca dan eksekusi kepada grup dan yang lainnya.
```
``` bash
#### Command tersebut digunakan untuk membuat contoh halaman index.html dengan menggunakan nano atau text editor lainnya.
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


####  Agar Nginx dapat menyajikan konten yang telah dibuat, dengan cara membuat blok server, yaitu dengan menjalankan command tersebut.
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
* sudo ln -s /etc/nginx/sites-available/your_domain /etc/nginx/sites-enabled/ : mengaktifkan file tersebut dengan membuat tautan dari sana ke direktori sites-enabled, yang dapat dibaca oleh Nginx saat startup.
* sudo nano /etc/nginx/nginx.conf : Untuk menghindari kemungkinan masalah pada memori hash bucket yang mungkin saja muncul akibat penambahan nama server tambahan, perlu untuk menyesuaikan satu nilai yang ada didalam berkas dengan Command tersebut.
* sudo nginx -t : Gunakan Command ini untuk memastikan tidak ada masalah syntax didalam salah satu file Nginx.
* sudo systemctl restart nginx : Gunakan Command ini untuk memulai ulang Nginx untuk mengaktifkan perubahan yang telah dibuat.
* Lalu akan muncul seperti ini : Success! The your_domain server block is working!
* note = Untuk domain diisi dengan domain kita sendiri.
```
