# Experiment 2: Exercises to implement a Web based application that uses NoSQL databases (MongoDB)

---

## How to Get MongoDB Atlas Connection URL

### Step 1: Create a MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Sign up or log in.

### Step 2: Create a Cluster
1. Click **"Create a New Cluster"**.
2. Select a **free-tier cluster** (or choose a paid one if needed).
3. Choose a cloud provider (AWS, GCP, or Azure) and region.
4. Click **"Create Cluster"** (This may take a few minutes).

### Step 3: Set Up Database Access
1. Navigate to **"Database Access"**.
2. Click **"Add New Database User"**.
3. Set a **username** and **password** (Remember these!).
4. Choose **"Read and Write to Any Database"**.
5. Click **"Add User"**.

### Step 4: Allow Network Access
1. Go to **"Network Access"**.
2. Click **"Add IP Address"**.
3. Select **"Allow Access from Anywhere"** (or add your own IP for security).
4. Click **"Confirm"**.

### Step 5: Get the Connection String
1. Navigate to **"Clusters"**.
2. Click **"Connect"** on your cluster.
3. Select **"Connect your application"**.
4. Copy the **connection string** (it will look like this):
   ```
   mongodb+srv://<username>:<password>@cluster1.e8efn.mongodb.net/?retryWrites=true&w=majority
   ```

### Step 6: Modify the Connection String
- Replace `<username>` and `<password>` with your actual credentials.
- Append your **database name** at the end (e.g., `todoDB`):
   ```
   mongodb+srv://thesarvagyakumar:yourpassword@cluster1.e8efn.mongodb.net/todoDB?retryWrites=true&w=majority
   ```

Now, use this connection string in your `.env` file for Prisma or other database tools. 🚀

---

## MongoDB Starter Template Setup

### Step 1: Clone the Starter Package
The MongoDB setup is already included in the codebase. Simply clone the repository:
```sh
git clone https://github.com/sarvagyakrcs/experiment-2-starter-template.git
cd experiment-2-starter-template
```

### Step 2: Configure Environment Variables
Create a `.env` file in your project root and add your MongoDB connection string:
```env
MONGODB_URI=<your-mongodb-connection-string>
```
Replace `<your-mongodb-connection-string>` with your actual MongoDB connection string from MongoDB Atlas.

### Step 3: Install Dependencies
Run the following command to install dependencies:
```sh
bun install
```

### Step 4: Start the Development Server
Run the project locally:
```sh
bun dev
```

Your MongoDB setup is complete! 🎉 Just add your `.env` file and start building.

