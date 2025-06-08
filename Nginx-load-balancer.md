## Virtualisasi menggunakan multipass & implementasi Nginx Load Balancer 

### Command untuk mencantumkan instance yang tersedia.
```bash
* Multipass List
```
### Command untuk menambahkan instance baru ubuntu di dalam mesin.
```bash
* multipass launch 22.04 --name nginx-webserver-01
```
### Command untuk membuka sesi shell dengan instance yang sudah ditentukan.
```bash
* multipass shell  nginx-webserver-01/etc/nginx/sites-enabled$ cat load-balancer.conf 
```
### nginx upstream Proxy server merupakan sistem yang bertugas sebagai perantara jaringan. Seperti saat mengakses suatu halaman dari sebuah website.

```bash
{
   upstream backend {
      server 10.92.101.120; 
      server 10.92.101.42;
      server 10.92.101.98;
     
   }


   server {
      listen 80 default_server;
      listen [::]:80; 
      
      server_name yessy.com 10.92.101.209;
      location / {
          proxy_pass http://backend;
	  proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
      }
   }




```
