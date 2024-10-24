# CyberPunk-Themed Webpage
This project is a responsive, gaming-themed webpage created with HTML, Tailwind CSS, and custom JavaScript. The design features a navigation bar with links to popular game websites, an animated dropdown menu, and interactive hover effects. The page includes a background image of the "CyberPunk" logo with modern visual effects, such as blurs, glows, and contrast adjustments, creating a visually appealing layout.

This project is a **3D model viewer** built using **Three.js**, showcasing the capabilities of the **GLTFLoader** to load 3D models, **post-processing effects**, and **animations**.

#### Key Features:
- **Three.js** library used for rendering 3D scenes.
- Integration of **GLTFLoader** to load and display a 3D model (e.g., `DamagedHelmet.gltf`).
- **OrbitControls** allow interactive camera movement around the scene.
- **Post-processing** effects using the **EffectComposer** and **RGBShiftShader** for added visual depth.
- **GSAP animations** for smooth transitions and interactions.
- **LocomotiveScroll** integrated for smooth scrolling effects.
- Real-time **HDRI environment mapping** using an external HDR image for realistic lighting and reflections.
- **Mouse interaction** that rotates the model based on the user's pointer movement.
- Responsive design handling with a **resize listener** to adjust the renderer and camera settings dynamically.

#### How It Works:
- A 3D scene is set up with a **PerspectiveCamera** and a **WebGLRenderer** for rendering the scene onto a canvas.
- The **DamagedHelmet** 3D model is loaded into the scene, and **GSAP** is used to animate the model's rotation based on mouse movements.
- **Post-processing** is applied to the renderer, including a subtle **RGB shift effect** for a stylized look.
- **LocomotiveScroll** ensures smooth scrolling through the page, enhancing the user experience.

#### Dependencies:
- **Three.js**
- **GSAP**
- **LocomotiveScroll**
- **GLTFLoader**
- **RGBELoader**
- **EffectComposer** for post-processing.

#### Demo: 



https://github.com/user-attachments/assets/e115801c-77aa-46b3-a905-08e0ec610d18



This project serves as a foundation for building **interactive 3D model viewers** with customizable post-processing effects and responsive user interaction.
