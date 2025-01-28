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
<img width="860" alt="Screenshot 2025-01-28 102954" src="https://github.com/user-attachments/assets/6ed3f7e4-6c17-46b9-802b-d89097aa2e2d" />
<img width="857" alt="Screenshot 2025-01-28 1030201" src="https://github.com/user-attachments/assets/5902de55-3cf6-4bd4-8ac0-43787d38d845" />

Check if Nginx is running:
```sh
sudo systemctl status nginx
```
<img width="857" alt="Screenshot 2025-01-28 103020" src="https://github.com/user-attachments/assets/fe7ef477-03b0-4663-bc85-61359bf9cfea" />

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
<img width="368" alt="image" src="https://github.com/user-attachments/assets/d838f06f-bacf-46a7-8d44-b43f595e18f3" />

Clone your GitHub repository:
```sh
sudo git clone https://github.com/your-username/your-repo.git .
```
<img width="857" alt="image" src="https://github.com/user-attachments/assets/a705f2d8-e963-451e-8291-a8df63bb3de9" />

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
   <img width="629" alt="image" src="https://github.com/user-attachments/assets/88a4ae32-061e-477d-9174-3355eb45a99e" />

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
<img width="742" alt="image" src="https://github.com/user-attachments/assets/b511fb7a-1e19-47c8-829c-5d75310473c8" />

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
<img width="729" alt="Screenshot 2025-01-28 103218" src="https://github.com/user-attachments/assets/553b4ece-88b2-4580-a5f0-eef6b0c88a19" />


Let me know if you need further help! 🚀
