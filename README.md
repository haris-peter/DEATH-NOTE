Here is the README file in the format you've requested for the project "DeathNote":

---

# DeathNote 🎯

### Basic Details

- **Team Name**: Solo
- **Team Lead**: Haris Josin Peter - Sahrdaya College of Engineering and Technology

---

## Project Description

**DeathNote** is an encrypted note-taking system integrated with Discord. The project uses Discord channels as secure storage for user notes, providing a web interface to create, retrieve, edit, and manage encrypted notes. Built to be free and scalable, it leverages Discord for back-end storage and Vercel for front-end deployment.

---

## The Problem (that doesn't exist)

**Why write notes the traditional way when you can use Discord channels for that?** Secure, over-the-top encrypted notes for a situation that never asked for it!

---

## The Solution (that nobody asked for)

We take the convenience of Discord and convert it into a note-taking app that stores your notes in encrypted channels and lets you manage them through a custom-built web interface. Because why not?

---

## Technical Details

### Technologies/Components Used

#### For Software:
- **Languages**: JavaScript, HTML, CSS
- **Frameworks**: Node.js
- **Libraries**: 
  - Discord.js (for interacting with Discord API)
  - CryptoJS (for AES encryption)
  - React (for building the web interface)
- **Tools**: Vercel (for deployment), Git, GitHub

---

## Implementation

### For Software:

#### Installation:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/deathnote.git
    cd deathnote
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

#### Run:

1. Start the development server:
    ```bash
    npm run dev
    ```

2. Build for production:
    ```bash
    npm run build
    npm start
    ```

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

![Web Interface - Add Note](screenshot1.png)  
*This shows the web interface where users can add new notes.*

![Web Interface - Retrieve Notes](screenshot2.png)  
*This screenshot displays the notes retrieved from Discord channels.*

![Encryption Process](screenshot3.png)  
*This explains how encryption is applied to secure note storage.*

#### Diagrams

![System Workflow](workflow_diagram.png)  
*This diagram illustrates the workflow of how notes are created, encrypted, stored, and retrieved.*

---

## Challenges Encountered

1. **Message Character Limit**  
   Discord imposes a 2,000-character limit for messages, so we implemented chunking to break long notes into smaller segments.

2. **Handling API Rate Limits**  
   Optimized input handling with the `onBlur` event to reduce API calls and avoid hitting Discord’s rate limits.

3. **Efficient Note Editing**  
   Integrated the Myers diff algorithm to compute differences between old and new notes for accurate updates.

4. **Encryption of Channel Names**  
   Channel names can't include special characters required for encrypted strings. A future solution will involve using file metadata to store encrypted names.

---

## Future Improvements

- **Encrypt Channel Names**: Add encrypted metadata for storing channel names.
- **Better Handling of Large Notes**: Use file-based methods for storing large notes.
- **Enhanced Authentication**: Introduce user login and authentication.
- **Improved UI/UX**: Enhance the front-end for better user interaction.
- **Fix Deployment Issues**: Refine the build process for smoother deployment on platforms like Vercel.

---

## Project Demo

### Video
[Add your demo video link here]  
*This video demonstrates how to add, edit, and retrieve notes using the web interface and Discord bot.*

---

## Team Contributions

- **Haris Josin Peter**: Developed both the backend Discord bot and the frontend web interface, integrated AES encryption for note security, and deployed the application using Vercel.

---

Made with ❤️ at TinkerHub Useless Projects

---

Let me know if you'd like any further changes or additions!
