## Virtualisasi menggunakan multipass & implementasi Nginx Load Balancer 

### Command berfungsi untuk mencantumkan instance yang tersedia.
```bash
* Multipass List
```
multipass launch 22.04 --name nginx-webserver-01
multipass list
multipass shell  nginx-webserver-01
