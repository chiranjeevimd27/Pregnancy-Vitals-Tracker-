# Pregnancy-Vitals-Tracker-

# Pregnancy Vitals Tracker with Reminders

## 📌 Assignment Overview
The **Pregnancy Vitals Tracker** is an Android application that allows users to log and track pregnancy-related vitals efficiently. The app ensures timely health monitoring by sending reminders every 5 hours.

## 🕒 Timeline
**Completion Time:** 24 hours

---
## 📂 Project Requirements
### **Main Features**
1. **Main Screen**
   - Displays a list of vitals logs using **LazyColumn**.
   - Auto-updates the list when new entries are added.

2. **Add Vitals Dialog**
   - A floating **"Add Vitals"** button to open a Jetpack Compose **Dialog**.
   - Form Fields:
     - **Blood Pressure (Sys/Dia)**
     - **Heart Rate**
     - **Weight**
     - **Baby Kicks Count**
   - **Submit Button**
     - Saves the entry to **Room Database**.
     - Auto-updates the main screen using **LiveData/StateFlow**.

3. **Reminder System** (Using WorkManager)
   - Sends a **notification every 5 hours** to remind users to log vitals.
   - Clicking the notification opens the app directly on the logging screen.

4. **Notification Details**
   - **Title:** "Time to log your vitals!"
   - **Message:** "Stay on top of your health. Please update your vitals now!"
   - Clicking the notification **launches the app**.

---
## 🛠 Tech Stack
- **Language:** Kotlin
- **UI:** Jetpack Compose
- **Architecture:** MVVM
- **Database:** Room
- **State Management:** StateFlow or LiveData
- **Background Work:** WorkManager

---
## 🎨 UI Design
The app follows a well-structured UI design as per the Figma mockups.
**Figma Link:** [Pregnancy Vitals Tracker UI](https://www.figma.com/design/rbNhibdu0ZHt4Os85vY6Tm/Android-Intern?t=ArNxzkA4xeongda9-0)

---
## 🚀 How to Run the Project
1. Clone this repository.
2. Open the project in **Android Studio**.
3. Sync Gradle dependencies.
4. Run the app on an emulator or physical device.

---
## 📌 Future Enhancements
- Add **Graphical Reports** for vitals trends.
- Integrate **Firebase for cloud backup**.
- Implement **User Authentication** for personalized tracking.

---
### 🔥 Stay healthy and take care! ❤️

