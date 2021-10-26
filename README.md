## This project is an attempt to create [Medium.com](https://angular.realworld.io/) clone called conduit.

## More here: [GitHub repo](https://github.com/gothinkster/realworld) and RealWorld [API Spec](https://github.com/gothinkster/realworld/tree/master/api)

---

## This app is based on React and was begin during studying course [[Oleksandr Kocherhin] React Hooks – Writing Real Project [RUS, 2019]](https://www.udemy.com/course/react-hooks-writing-real-project/). The result is deployed [here](https://medium-clone-start.pages.dev/) and its repo is [here](https://github.com/s-p-ko/medium_clone_start)

---

---

## This repo is my attemption to refine the above app.

## The app is deployed by [cloudflare pages*](https://medium-clone.pages.dev/)

## What it has done:

- Added the button to follow/unfolow for authorized users
- Added the ability to see coments and to add and remove a comment under the article for authorized users. An unauthorized user cannot see comments. Authorized users can delete only own comment.
- Added the Logout component and the logout button in the header for authorized users (as an alternative to logout in the Settings component)
- The footer has been added to the site
- After successfully editing the profile, the user is redirected to own profile page (in old version user stayed on the same page).
- Improved date output.
- Added userImage component to display an authorized user’s image. It is used in topBar.
- Fixed a problem with changing user profile page according clicked user (for example, when we clicked a profile name, the list of articles have been stayed from the previous user and could change only after manually refreshing the page).
- Fixed issue with likes and canceling likes. Hitherto any user could like others and his own posts. After solving the problem: an unauthorized user cannot like/cancel like for any article; an authorized user can like/cancel like only for other users’ articles, not own ones and can see the number of likes for own articles.

## See intermediate result [here*](https://medium-clone.pages.dev/)

---

#### *Sometimes there is such problem with CORS policy, so attempt visit site later

![Application](/img/pic-1.png?raw=true)

## _Note (Oct 14, 2021): Because of [API Limitations](https://gothinkster.github.io/realworld/docs/specs/frontend-specs/api/#api-limitations) part of functionality of the app cannot be demonstrated_
