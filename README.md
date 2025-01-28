# frontend-Deploy-in-EC2-instance-Test
---

### **🚀 Steps to Deploy Your Static Website on EC2**
#### **Step 1: Launch an EC2 Instance**
1. Go to **AWS Management Console** → **EC2**.
2. Click **Launch Instance** and configure:
   - **AMI**: Choose **Ubuntu 22.04** (or any preferred OS).
   - **Instance Type**: Select **t2.micro** (Free Tier).
   - **Security Group**: Allow **ports 22 (SSH) and 80 (HTTP)**.
   - **Key Pair**: Create or select an existing key pair.

---

#### **Step 2: Connect to Your EC2 Instance**
Use SSH to connect to your EC2 instance:
```sh
ssh -i your-key.pem ubuntu@your-ec2-public-ip
```
<img width="862" alt="Screenshot 2025-01-28 102843" src="https://github.com/user-attachments/assets/bcf31f50-6ec9-4e34-8f9e-7b199e856439" />

---

#### **Step 3: Install Nginx and Git**
Update and install **Nginx** and **Git**:
```sh
sudo apt update -y && sudo apt upgrade -y
sudo apt install -y nginx git
```
Check if Nginx is running:
```sh
sudo systemctl status nginx
```
If not running, start it:
```sh
sudo systemctl start nginx
```

---

#### **Step 4: Clone Your GitHub Repository**
Navigate to the **Nginx root directory**:
```sh
cd /var/www/html
sudo rm -rf *
```
Clone your GitHub repository:
```sh
sudo git clone https://github.com/your-username/your-repo.git .
```

---

#### **Step 5: Set Permissions**
Make sure Nginx can read your files:
```sh
sudo chmod -R 755 /var/www/html
sudo chown -R www-data:www-data /var/www/html
```

---

#### **Step 6: Configure Nginx**
1. Open the **default Nginx config file**:
   ```sh
   sudo nano /etc/nginx/sites-available/default
   ```
2. Replace existing content with:
   ```nginx
   server {
       listen 80;
       server_name your-ec2-public-ip;

       root /var/www/html;
       index index.html;

       location / {
           try_files $uri $uri/ =404;
       }
   }
   ```
3. Save and exit (`CTRL + X`, then `Y`, then `Enter`).
4. Restart Nginx:
   ```sh
   sudo systemctl restart nginx
   ```

---

#### **Step 7: Allow Traffic on EC2**
1. Go to **AWS EC2 > Security Groups**.
2. Edit **Inbound Rules**:
   - Allow **HTTP (port 80) for everyone (0.0.0.0/0)**.

---

#### **Step 8: Access Your Website**
Now, open your browser and visit:
```
http://your-ec2-public-ip or use ip address
```
Your static website should now be live! 🎉  

Let me know if you need further help! 🚀
