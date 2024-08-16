## Documentation for components: src/Components

# 1) src/Components/Navbar

- this component contains the navbar for the application.
- the navbar contains links to all the pages in the application.
- upon clicking a link, the page is rendered between the navbar and footer in place of Outlet in App.jsx hence preventing reload of entire page.
- links are made using the Link component from react-router-dom.

# 2) src/Components/Footer

- this component contains the footer for the application.
- footer is divided into three sections/columns
- each column contains relevant information or links (with classNames as foot-col-1/2/3).
- the footer is rendered at the bottom of the page.

# 3) src/Components/TitleCard

- this reusable component is used in various other pages.
- it contains a title and a background image as props.

# 4) src/Components/MemberCard

- this reusable card component is used to to represent a member in the PresentMembers page.
- it contains the name, qualification, image and category of the member as props.
