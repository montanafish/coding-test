# Coding Test

## Note

- Utilised styled-components to build responsive show title page
- Used Next.js for server-side rendering to optimise for SEO and mobile devices
- Configured eslint, prettier and airbnb style guide to enforce coding styles
- Orginised base styling files into styles folder to make future maintenance easier
- Created a flexbox base responsive Grid componet to show a show title.  This component can show multiple show titles
- Added api folder to simulate a rest api for show titles
- Configured jest to test components
- Optimised the size of images. e.g. og-image, favicon, etc.
- Added basic og tags to make the page easier to share
- Added Google Roboto font and avoided FOUT (a Flash of Unstyled Text)

## Things that are not implemented but needed for the production environment

- Add React Helmet for better meta tag management
- Add React Router to manage the routes
- Add a Web App Manifest and use service workers to support offline access
- Add Redux and redux-thunk with ducks file structure for state management
- Add Flow to check for errors through static type annotations
- Add BrowserStack to automate crosbrowser testing
- Add Json-Server to create a fake REST API to speed up development
- Add Event tracking tools like Mixpanel and Segment to record user activities for future personalisation
- Add React Intl if neccessary to support another language
- Add Moment-timezone to mangage timezone
- Implement Lazy image loading for fallback image for a show title art
- Implement shouldComponentUpdate to optimise for the speed
- Implement ThemeProvider to add theme if neccessary
- Implement code splitting to reduce the intial load time
- Implement LRUCache to cache server-side rendering
- Implement Elasticsearch API to enable users to search show titles
- Implement Sentry API to track errors realtime
- Implement Pingdom API to monitor availability

## How to run

Install and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```