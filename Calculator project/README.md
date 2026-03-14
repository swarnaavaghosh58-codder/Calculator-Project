# DS29 Hybrid Scientific Calculator

A versatile, high-performance **Hybrid Calculator** designed for both everyday arithmetic and advanced scientific computation. Featuring a "Glass-3D" interface and a dual-drawer system, it adapts to your needs with a single tap.

**[🚀 CLICK HERE TO OPEN THE LIVE HYBRID APP](https://dikshaasudha29.github.io/DS29-Calculator/calcDikshaaSudha.html)**

---

## Interface Preview

| 🌙 Midnight Dark Mode | ☀️ Lavender Light Mode |
|:---:|:---:|
| ![Dark Mode](./ssdarkmode.jpg) | ![Light Mode](./sslightmode.jpg.png) |

---

## Detailed Functionality

The DS29 is a **Hybrid engine** split into three main modules: the **Standard Pad**, the **Scientific Drawer**, and the **History Vault**.

### 1. The Hybrid Advantage
| Mode | Features | Ideal For |
|:---|:---|:---|
| **Simple Mode** | `+`, `-`, `×`, `÷`, `%`, `⌫` | Quick daily calculations and basic percentages. |
| **Scientific Mode** | `sin`, `cos`, `tan`, `log`, `ln`, `!`, `√` | Complex engineering, physics, and calculus problems. |
| **Persistence** | `LocalStorage History` | Keeping track of results across browser sessions. |

### 2. The "Cool" UX Features
* **Hybrid Sliding Drawers:** Keep it simple or go scientific. The advanced functions are hidden in an animated drawer that slides out smoothly, preventing screen clutter.
* **Tactile 3D Buttons:** Every button uses a dual-layer `box-shadow`. When clicked, the button "sinks" into the screen using `transform: translateY(4px)` to simulate a real mechanical feel.
* **Dynamic Feedback (The Glow):** The **"="** button features a unique active-state. When tapped, it changes color and glows, providing instant visual confirmation that your result is being processed.
* **Smart Parsing:** The logic uses **Regular Expressions (RegEx)** to translate user-friendly symbols (like `π`, `^`, or `!`) into executable JavaScript code instantly.

---

## Technical Architecture

### **The Stack**
* **Structure:** HTML5 using semantic elements for web accessibility.
* **Styling:** CSS3 Grid for the keypad and Flexbox for the side panels.
* **Logic:** Vanilla JavaScript (ES6+).
* **Persistence:** Web Storage API (`localStorage`) to keep your history saved even after you refresh or close the tab.

### **Scientific Precision**
The engine handles unit conversion dynamically. When switched to **Degree Mode**, the system automatically applies the conversion formula:

$$\text{rad} = \text{deg} \times \left(\frac{\pi}{180}\right)$$

This ensures that trigonometric inputs like `sin(90)` return exactly `1`.

---

## 📝 Project Status & Change Log
* **v1.0:** Initial release with Dark/Light mode toggle.
* **v1.1:** Added Hybrid Scientific drawer and Degree/Radian support.
* **v1.2:** Implemented persistent history logic via LocalStorage.
* **Current Status:** Fully Deployed & Operational.
