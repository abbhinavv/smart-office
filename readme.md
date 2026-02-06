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
The system works as when user edits the document, and when it clicks save button, the request is send to Node server and it reads the requests and save the updated file to file storage.

### System Design

Everything is designed to work without internet:

- No external APIs
- No cloud storage
- Local file system only
- No online speech services, WebSpeechAPI (inbuilt in browser) used
- Frontend: HTML
- Backend: Node Express server for HTTP requests
### Simple Storage

Documents are stored as HTML files.

Reason:

- Easy to implement
- Human readable
- No database required
- Works well for small internal systems

### Document Editor - Minimal Editor

Used native browser contenteditable instead of complex frameworks to keep the POC lightweight and easy to understand. Basic editing is given.
For advanced editing we can use third party packages because of easy to edit such as headings, bold, tables, allignment, tabs, lists, fonts etc. Because it will give us more advance features to work with.

### Voice To Text (Browser Speech Recognition API)
Inbuilt in Modern Browsers(Client Side)

User clicks “Voice Input” -> Microphone turns ON -> Browser Speech Recognistion in browser listens -> Words are converted to text locally -> Text inserted(using Javascript) into editor at cursor position in editor. 

### Templates 

Right now a single template is being used, but further more templates such as Letter, Report, Official memo templates can be added.
As by using HTML templates content inside the templates are standardized like layout, placeholder fields, predeifined styles.
For standardized format of document, right now we are using HTML to save the document which is easy for the browser to load. For printing we are using pdf but later we can implement docx formats too.

### PDF Export

Implemented using browser print-to-PDF because:

- Works offline
- No extra dependencies
- Simple and reliable

---

## Trade-offs

As a POC I did NOT implement:

- Real-time collaboration
- Multiple templates
- User authentication
- Database storage
- Advanced formatting tools

These were avoided to keep the POC simple and focused.

Technical Shortcuts I would avoid:
1. Avoid Storing Everything Only in Browser Storage
2. Avoid Custom-Built Editors
3. Avoid Hardcoding Templates
4. Avoid Internet Dependencies
---

## What I Would Improve Next

Given adequate resources and time I would add:

- Word/Google-doc like editor for better formatting
- Multiple document support by storing & editing on server side in database
- Multi user editing conflicts
- Optional DOCX export

---

## Conclusion

This POC demonstrates a simple, practical, offline-first approach to building a browser-based document editor using minimal technology and clear design trade-offs.
