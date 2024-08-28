# Documentation for Pages: src/pages

## 1) Home (src/pages/Home.jsx)

- The Home page of the CPS website, having various components as described in Components MD.
- First section is the lab name with the images slider.
- Second section has the topic cards displayed.
- Third section is for applying for internships and routes the website to Join Us page.
- Fourth section contains information about the lab.
- Fifth section is about the Research Domains available at CPS.
- Sixth section is to be implemented and is the News and Updates section.
- Seventh and final section is for applying to work with CPS lab.

## 2) Research Focus (src/pages/Research.jsx)

- Research Focus page is made up of a TitleCard component and mapped ResearchCard component (src/components/ResearchCard.jsx).
- The title of each Research Focus page's subpages is the component ResearchCardTitle(src/components/ResearchCardTitle.jsx).

## 3) AI in Healthcare (src/pages/AIHealthcare.jsx)

- A subpage under Research Focus, contains the title card component ResearchCardTitle.
- Contains 3 sections of parsed text, along with line dividers.

## 4) Human Centered Systems (src/pages/HumanCenteredSystems.jsx)

- A subpage under Research Focus, contains the title card component ResearchCardTitle.
- Contains 2 sections of parsed text, along with line dividers.

## 5) Cybersecurity (src/pages/Cybersecurity.jsx)

- A subpage under Research Focus, contains the title card component ResearchCardTitle.
- Contains 3 sections of parsed text, along with line dividers.

## 6) Wearables (src/pages/Wearables.jsx)

- A subpage under Research Focus, contains the title card component ResearchCardTitle.
- Contains 3 sections of parsed text, along with line dividers.

## 7) Join Us (src/pages/JoinUs.jsx)

- Application information page which lays down the steps on how to apply for the same.
- It has an introduction section and a step-by-step instruction manual(the steps are mapped components).
- Next section is an accordian displaying the problem domains in which an internship can be done.
- The last section is about the important points to be noted.

## 8) Contact Us (src/pages/ContactUs.jsx)

- this page contains the location on a map (using react-leaftlet) and the contact details of the lab.
- the map can be resized and zoomed in/out.

## 9) PresentMembers (src/pages/PresentMembers.jsx)

- this page contains a list of all the present members of the lab.
- the members are displayed in a card format.
- MemberCard component is used to display the details of each member.
- Each section is split into a heading (denoting category) and the list of members in that category.

## 10 Publications (src/pages/Publications.jsx)

- this page contains the table of all the publications.
- the table is made using ag-grid-react.
- the table is sortable, filterable by columns and paginated.
- these settings can be changed in the `columns` variable.
- `publicationsData` is used as data source. Contents within it can be easily modified.
- The button below the table is used to download current entries in the table to JSON format.
