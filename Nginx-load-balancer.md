## Virtualisasi menggunakan multipass & implementasi Nginx Load Balancer 

### Command Multipass list
```bash
* berfungsi untuk mencantumkan instance yang tersedia
```
multipass launch 22.04 --name nginx-webserver-01
multipass list
multipass shell  nginx-webserver-01
