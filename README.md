# 🧭 Trip Planner — React Native CLI App

A simple mobile trip planning app built with **React Native CLI**. Users can create trips, view trip lists, and manage their profile with a clean UI.

---

## 📱 Features

- **Login Screen**
  - Email/password-based simulated login
  - Stores user session locally

- **Home Screen**
  - Select Load Location
  - Select Unload Location
  - Date & Time Picker
  - Create Trip and store in local storage

- **Trips Screen**
  - View saved trips
  - Load → Unload info with Date & Time
  - Trip card with image preview
  - Optional Delete trip

- **Settings Screen**
  - Displays static user info
  - Logout button clears session and navigates to login

---

## 🔐 Login Credentials

Use the following credentials to log in:

- **Email:** `user@demo.com`
- **Password:** `123456`

---

## 📦 Tech Stack

- **React Native CLI** (not Expo)
- **React Navigation v7**
- **AsyncStorage** for local trip storage
- **Context API** for user auth management
- **NativeWind** (Tailwind CSS for React Native)
- **react-native-modal**
- **react-native-datetimepicker**

---

## 📦 Requirements

- Node.js ≥ 18.x
- Yarn (recommended)
- Android Studio or Xcode (for running on devices/emulators)
- JDK ≥ 17

---

## ✅ Completion Checklist

- [x] Login system with fake credentials
- [x] Tab-based layout (Home, Trips, Settings)
- [x] Reusable components (inputs, modals, buttons)
- [x] AsyncStorage for trip persistence
- [x] Date formatting using `formatDateTime.js`
- [x] Location selection via custom modal
- [x] Tailwind-based UI with NativeWind
- [x] Context API for managing auth state

---

## 📁 Folder Structure

tripPlanner/                                                                                                                                                                                                                                     
├── src/                                                                                                                                                                                                                                         
│ ├── assets/ # Static assets (fonts, images, icons)                                                                                                                                                                                             
│ │ ├── icons/                                                                                                                                                                                                                                   
│ │ ├── images/                                                                                                                                                                                                                                  
│ │ └── fonts/                                                                                                                                                                                                                                   
│ │                                                                                                                                                                                                                                              
│ ├── components/ # Reusable UI components                                                                                                                                                                                                       
│ │ ├── Button.js                                                                                                                                                                                                                                
│ │ ├── BottomSelectModal.js                                                                                                                                                                                                                     
│ │ ├── InputField.js                                                                                                                                                                                                                            
│ │ ├── LocationInput.js                                                                                                                                                                                                                         
│ │ ├── TripCard.js                                                                                                                                                                                                                              
│ │ └── DateTimeInput.js                                                                                                                                                                                                                         
│ │                                                                                                                                                                                                                                              
│ ├── context/ # Context API setup                                                                                                                                                                                                               
│ │ └── AuthContext.js                                                                                                                                                                                                                           
│ │                                                                                                                                                                                                                                              
│ ├── navigation/ # Navigation (stack + tabs)                                                                                                                                                                                                    
│ │ ├── AuthNavigator.js                                                                                                                                                                                                                         
│ │ └── MainTabNavigator.js                                                                                                                                                                                                                      
│ │                                                                                                                                                                                                                                              
│ ├── screens/ # App screens                                                                                                                                                                                                                    
│ │ ├── LoginScreen.js                                                                                                                                                                                                                           
│ │ ├── HomeScreen.js                                                                                                                                                                                                                            
│ │ ├── TripsScreen.js                                                                                                                                                                                                                           
│ │ └── SettingsScreen.js                                                                                                                                                                                                                        
│ │                                                                                                                                                                                                                                              
│ ├── utils/ # Helper functions                                                                                                                                                                                                                  
│   └── formatDateTime.js                                                                                                                                                                                                                        
│                                                                                                                                                                                                                                              
│── global.css # Tailwind (NativeWind) style config                                                                                                                                                                                              
│── App.js # App root with providers and navigation                                                                                                                                                                                              
├── README.md                                                                                                                                                                                                                                    
├── package.json                                                                                                                                                                                                                                 
└── yarn.lock                                                                                                                                                                                                                                    

---

## 🛠️ Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd tripPlanner

# Install dependencies
yarn install

# Install pods (for iOS only)
cd ios && pod install && cd ..

# Start Metro
yarn start

# Run on Android
yarn android

# Run on iOS
yarn ios

```

## ✍️ Author

**Md. Habibur Rahman Shohel**  
Software Engineer  
Email: [md.hrshohel@gmail.com](mailto:md.hrshohel@gmail.com)  
GitHub: [@mdhrshohel](https://github.com/mdhrshohel)

---

## 📝 License

This project is licensed for **demonstration and educational purposes only**.  
All rights reserved © 2025 Md. Habibur Rahman Shohel.

