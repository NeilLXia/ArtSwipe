# ArtSwipe

ArtSwipe is a mobile app concept that combines the swipe left/right feature of Tinder with the buying and selling of artwork on eBay. The idea behind ArtSwipe is to make the process of buying and selling art more accessible, interactive, and engaging for users, simplifying the process of buying art.

## Authors

[Aidan Fisher](https://www.github.com/aidanFisher97) - [Swipe Stack](#swipestack)\
[Jacob Sifodaskalakis](https://www.github.com/jacob-sifodaskalakis) - [Artist Alley](#artistalley)\
[Neil Xia](https://www.github.com/NeilLXia) - [Messaging](#messaging)\
[Dennis Hsu](https://github.com/denniseh7) - Project Manager - [Art Event](#artevent)\
[Mason Lang](https://github.com/masonisblue) - [Profile](#profile)\
[Jessica Tong](https://github.com/jessicatong43) - UI Design Lead - [Wireframe](#wireframe), [Art Event](#artevent), & forms for [Profile](#profile)\
[Markus Leben](https://github.com/markus-leben) - Architecture Owner - Art Info

## Built With

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![React Navigation](https://img.shields.io/badge/React%20Navigation-46B5D1?style=for-the-badge&logo=react&logoColor=white)[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-000.svg?style=for-the-badge&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)

## Project Summary

### Key Features

- Firebase authentication
<image of login screen>
- Firestore database
- Redux global state management

# ArtSwipe

ArtSwipe is a mobile app concept that combines the swipe left/right feature of Tinder with the buying and selling of artwork on eBay. The idea behind ArtSwipe is to make the process of buying and selling art more accessible, interactive and engaging for users, especially for art enthusiasts who are looking for a unique and personalized experience.

<a name="swipestack"></a>
# Swipe Stack

### Features

- Streamlined bidding through swiping left to reject and right to bid.
- Auction duration is displayed on the top left of the screen.
- Artwork can be bookmarked.
- Active bids are displayed when a user clicks the gavel icon on the top right.
- Card stack is sorted by bookmarked, and the artwork the user bid on but is not the most recent bidder. Each group is sorted by duration left on auction.

<dl><dd><dl><dd><dl><dd><dl><dd>
<img src="https://user-images.githubusercontent.com/29281223/235525505-c94ec1bf-5b80-4fe0-86f6-1e4ce88f0f84.gif" alt="Swipe Stack" width="250">
</dd></dl></dd></dl></dd></dl></dd></dl>

<a name="artistalley"></a>
# Artist Alley
## Features:

- Lazy Loading:

<dl><dd><dl><dd><dl><dd><dl><dd>
 <img src="https://user-images.githubusercontent.com/29281223/235517590-501b2100-d753-420d-ac98-88d50a5f112c.gif" alt="Lazy Loading" width="200px">
</dd></dl></dd></dl></dd></dl></dd></dl>


- Filtering:

<dl><dd><dl><dd><dl><dd><dl><dd>
  <img src="https://user-images.githubusercontent.com/29281223/235498713-1b5dc443-f5d6-4586-9a0b-062aa7750ccb.gif" alt="Filter" width="200">
</dd></dl></dd></dl></dd></dl></dd></dl>

- Dynamic Layout:

<dl><dd><dl><dd><dl><dd><dl><dd>
  <img src="https://user-images.githubusercontent.com/29281223/235514421-0603368e-824c-4ffe-96e5-1b225c85b923.gif" alt="Dynamic Layout" width="200">
</dd></dl></dd></dl></dd></dl></dd></dl>

- Regular Tiles:

<dl><dd><dl><dd><dl><dd><dl><dd>
  <img src="https://user-images.githubusercontent.com/29281223/235556681-dcc5ca71-0efe-4f11-8081-fc1ca2e9927c.gif" alt="Regular Tiles" width="200">
</dd></dl></dd></dl></dd></dl></dd></dl>

# Messaging
- Real time listening for database updates for new messages

- Post messages to database

- Keyboard responsive design
<dl><dd><dl><dd><dl><dd><dl><dd>
  <img src="https://user-images.githubusercontent.com/29281223/235565049-9baef6d8-ca2d-4c25-a93a-1af61e0e3333.gif" alt="Messages" width="250">
</dd></dl></dd></dl></dd></dl></dd></dl>

<a name="artevent"></a>
## Art Events
### Features
- Scrolling view of nearby art gallery events with lazy loading
- Events can be clicked on for further description
- Can Create a new event or Edit an existing event for each user
- Uses a date/time picker to set the event date

<dl><dd><dl><dd><dl><dd><dl><dd>
  <img src="https://user-images.githubusercontent.com/7811764/235326379-bec373de-87ff-4a14-80cc-a8e1118f1aed.gif" alt="EventsDemo" width="250">
</dd></dl></dd></dl></dd></dl></dd></dl>

<a name="profile"></a>
# Profile

<dl><dd><dl><dd><dl><dd><dl><dd>
  <img src="https://user-images.githubusercontent.com/29281223/235565370-50bff4e1-cd13-44e4-be76-dbd986fa2bad.gif" alt="LoginProfileDemo" width="250">
</dd></dl></dd></dl></dd></dl></dd></dl>

<a name="wireframe"></a>
# Wireframe
<dl><dd><dl><dd><dl><dd><dl><dd>
  <img src="https://user-images.githubusercontent.com/29281223/235526036-afdd92b3-f77d-4de7-a9b4-0813fae75cc8.gif" alt="Wireframe Tiles" width="250">
</dd></dl></dd></dl></dd></dl></dd></dl>

## Getting Started

### Requirements
- Expo iOS Simulator

# Installation
1. Clone the repository
    ```
        git clone https://github.com/TeamAsteroidea/ArtSwipe.git
    ```
2. Navigate into the repository folder, then install the dependencies
    ```
        npm install
    ```
3. Create your .env file with the following and fill out the fields:
    ```
        API_KEY = "Insert your Firebase API token here"
        APP_ID = “Insert App ID from Firebase here”
    ```
4. Run the following script to open the app on Expo:
    ```
        npx expo --ios --clear
    ```

## Installation (Ubuntu)

1. Install expo-cli
    ```
        npm -i -g expo-cli
    ```
2. Clone the repository
    ```
        git clone https://github.com/TeamAsteroidea/ArtSwipe.git
    ```
3. Navigate into the repository folder, then install the dependencies
    ```
        npm install
    ```
4. Create your .env file with the following and fill out the fields:
    ```
        API_KEY = "Insert your Firebase API token here"
        APP_ID = “Insert App ID from Firebase here”
    ```
5. Run the following script to start Expo:
    ```
        expo-cli start --tunnel --no-dev
    ```
6. Scan the QR code from your phone to run on the Expo Go app

<br>
