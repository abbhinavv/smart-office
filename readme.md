# Smart Office – Offline Document Editor (POC)

## Overview

This project is a minimal proof of concept for an offline-first, browser-based document editing system.

It demonstrates:

- Local Node.js server
- Browser-based rich text editing
- Saving and loading documents
- Template support
- Export to PDF
- Fully offline operation over LAN

The goal is to show practical system thinking rather than production-level polish.

---

## Features Implemented

- Text editing in browser
- Basic rich text formatting
- Save document to local server
- Load document from server
- One predefined template
- Export document as PDF
- Runs completely offline

---

## How to Run

### Prerequisites

- Node.js installed

### Steps

1. Install dependencies:
 npm install

2. Start the server:
 node server.js
3. Open in browser:
 http://localhost:3000

 ---

## Architecture

Browser Editor <----HTTP----> Node.js Server <----> Local File System


- The browser handles all editing and formatting  
- The Node server only manages saving and loading files  
- All data stays on the local machine  
- No internet or cloud services are required  

---

## Design Decisions
<img width="1463" height="705" alt="System Design" src="https://github.com/user-attachments/assets/6a2cbe2e-4510-45d6-af5c-b8b963e3ae1a" />

### Offline First

Everything is designed to work without internet:

- No external APIs
- No cloud storage
- Local file system only
- No online speech services, WebSpeechAPI (inbuilt in    browser) used
- Frontend: HTML
- Backend: Node Express server for HTTP requests
### Simple Storage

Documents are stored as HTML files.

Reason:

- Easy to implement
- Human readable
- No database required
- Works well for small internal systems

### Minimal Editor

Used native browser contenteditable instead of complex frameworks to keep the POC lightweight and easy to understand. Basic editing is given.
For advanced editing I will use Quill because of easy to edit for tables, allignment, tabs, lists, fonts etc. It's open, lightweight and offline.

### Voice To text (Browser Speech Recognition API)
Inbuilt in Modern Browsers(Client Side)

User clicks “Voice Input” -> Microphone turns ON -> Browser Speech Recognistion in browser listens -> Words are converted to text locally -> Text inserted(using Javascript) into editor at cursor position in editor. 

### Templates 

Right now a single template is being used, but further more templates such as Letter, Report, Official memo can be added.
As by using HTML templates are standardized like layout, placeholder fields, predeifined styles.

### PDF Export

Implemented using browser print-to-PDF because:

- Works offline
- No extra dependencies
- Simple and reliable

---

## Trade-offs

I intentionally did NOT implement:

- Real-time collaboration like Websockets
- Multiple templates
- User authentication
- Database storage
- Advanced formatting like Quill.js

These were avoided to keep the POC simple and focused.

Technical Shortcuts I would avoid:
1. Avoid Storing Everything Only in Browser Storage
2. Avoid “Last Save Wins” Logic
3. Avoid Custom-Built Editors
4. Avoid Hardcoding Templates
5. Avoid Internet Dependencies
---

## What I Would Improve Next

Given more time I would add:

- Quill or TipTap editor for better formatting
- Multiple document support by storing & editing on server side in database
- Multi user editing conflicts by locking in/version control/websockets
- Better error handling
- Optional DOCX export

---

## Conclusion

This POC demonstrates a simple, practical, offline-first approach to building a browser-based document editor using minimal technology and clear design trade-offs.
