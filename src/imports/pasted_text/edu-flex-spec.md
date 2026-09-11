Analyze the entire current EduFlex project and extract its complete design and UI implementation specification.

Do not redesign, modify, or generate a new interface.

I want you to inspect the existing EduFlex application and document everything necessary for another AI coding tool such as Bolt.new to accurately recreate the application.

Treat the current EduFlex project as the source of truth.

1. Project Structure

Identify and document:

All pages
All routes
All portals
All user roles
Navigation structure
Shared layouts
Shared components
Page-specific components
Modals/dialogs
Forms
Tables
Filters
Search components
Buttons
Cards
Notifications
Other reusable UI elements

Clearly separate:

Student Portal

Instructor Portal

Administration Portal

2. Design System

Extract the complete visual design system from the existing application.

Provide exact values wherever possible.

Colors

Identify:

Primary blue
Sidebar blue
Active sidebar blue
Background
Card background
Primary text
Secondary text
Muted text
Border
Success
Warning
Error
Purple
Green
Orange
Red
Any other accent colors

Provide HEX values.

Typography

Identify:

Font family
Heading sizes
Heading weights
Body sizes
Body weights
Navigation text
Button text
Labels
Table headers
Captions
Line heights
Letter spacing

Document the typography hierarchy.

Important: Determine whether titles use title case, sentence case, or uppercase. Preserve the existing capitalization style.

3. Layout Measurements

Extract approximate or exact measurements for:

Sidebar width
Header height
Main content margins
Page padding
Card padding
Card gaps
Grid gaps
Section spacing
Button heights
Input heights
Table row heights
Border radius
Border width
Shadow values

Document the layout system used throughout the application.

4. Sidebar

Document each portal's sidebar.

For every sidebar item provide:

Label
Icon
Icon style
Position
Active state
Hover state
Inactive state
Spacing

Document the sidebar separately for:

Student

Dashboard
My Courses
Assignments
Quizzes
Learning Materials
Grades
Calendar
Announcements
Messages
Profile
Settings

Instructor

Dashboard
My Courses
Students
Assignments
Quizzes
Learning Materials
Grades
Announcements
Calendar
Messages
Profile
Settings

Administrator

Dashboard
User Management
Course Management
Enrollment
Reports & Analytics
Announcements
Messages
Academic Calendar
System Settings

Also document the correct icon used for Announcements and ensure it is visually distinct from Grades.

5. Header

Extract the complete header design.

Document:

Search bar
Search placeholder
Search icon
Message icon
Notification icon
Notification indicator
User name
User role
Avatar
Header spacing
Header height
Responsive behavior

Document differences between Student, Instructor, and Administrator headers.

6. Footer

Document the shared footer.

Include:

Footer background color
Height
Links
Social icons
Typography
Spacing
Positioning behavior

Important:

The footer should behave as follows:

Short page: Footer is pushed to the bottom of the viewport.

Long page: Footer appears naturally after the page content.

It must never overlap content.

Document how this should be implemented as a reusable global layout component.

7. Student Portal Pages

Document every Student Portal page in detail:

Dashboard
My Courses
Assignments
Quizzes
Learning Materials
Grades
Calendar
Announcements
Messages
Profile
Settings

For each page document:

Route
Page title
Subtitle
Breadcrumb
Layout
Components
Cards
Tables
Buttons
Filters
Forms
Data displayed
Empty states
Interactions
Responsive behavior
8. Instructor Portal Pages

Document:

Dashboard
My Courses
Students
Assignments
Quizzes & Assessments
Learning Materials
Grades
Announcements
Calendar
Messages
Profile
Settings

Include all UI elements, interactions, layouts, and data.

Pay particular attention to:

Quiz management
Assignment management
Student management
Course management
Instructor announcements
9. Administration Portal Pages

Document:

Dashboard
User Management
Course Management
Enrollment
Reports & Analytics
Announcements
Messages
Academic Calendar
System Settings

Document all tables, forms, filters, buttons, statistics, charts, and actions.

10. Role Permissions

Extract the application's role-based permissions.

Clearly document what each role can do.

Student

What can students:

View?
Submit?
Edit?
Enroll?
Message?
Manage?
Instructor

What can instructors:

Create?
Edit?
Publish?
Grade?
Manage students?
Manage courses?
Manage quizzes?
Manage assignments?
Administrator

What can administrators:

Manage users?
Create courses?
Enroll students?
Manage instructors?
Manage announcements?
Manage academic calendar?
Manage system settings?

Important: The administrator directly enrolls students into courses. There is no student enrollment approval/rejection workflow.

11. Components

Create a complete reusable component inventory.

For each component document:

Component name
Purpose
Variants
Props/data
States
Dimensions
Colors
Typography
Spacing
Interactions

Include:

Sidebar
Header
Footer
PageHeader
StatCard
CourseCard
AssignmentCard
QuizCard
AnnouncementCard
Table
Badge
Button
Input
Select
DatePicker
Toggle
Modal
Calendar
MessageList
MessageConversation
ProfileCard
SettingsSection
Charts
12. Responsive Design

Document how the application behaves at:

Desktop
Laptop
Tablet
Mobile

Explain:

Sidebar behavior
Header behavior
Card grids
Tables
Forms
Calendar
Messages
Footer
Navigation
13. Data Model

Analyze the existing UI and infer the required data entities.

Document entities such as:

User
Student
Instructor
Administrator
Course
Enrollment
Assignment
Quiz
Grade
Learning Material
Announcement
Message
Calendar Event
Notification
Academic Semester

For each entity, list likely fields and relationships based on the existing application.

Do not invent unnecessary features.

14. Interactions

Document all existing interactions:

Navigation
Search
Filtering
Sorting
Creating
Editing
Deleting
Approving where applicable
Enrolling
Submitting
Messaging
Notifications
Profile editing
Settings
Calendar events
15. Routes

Produce a complete route map for the application.

Example format:

/student
/student/courses
/student/assignments
/student/quizzes
...

/instructor
/instructor/courses
/instructor/students
...

/admin
/admin/users
/admin/courses
...

Use the actual routes from the project rather than inventing routes where possible.

16. Bolt.new Implementation Specification

Finally, transform everything you discovered into a developer-ready implementation specification for Bolt.new.

Structure the final output as:

Project overview
Technology recommendations
Design tokens
Global layout
Component architecture
Student Portal
Instructor Portal
Administration Portal
Role permissions
Data model
Routes
Responsive behavior
Interactions
Implementation notes

Be extremely precise.

Do not redesign anything.

Do not simplify away existing functionality.

Do not replace existing components with generic dashboard components.

The goal is to extract enough information that Bolt.new can recreate the current EduFlex application as accurately as possible.

At the end, provide a concise section called:

“EduFlex Build Specification for Bolt.new”

containing the final consolidated instructions that can be copied directly into Bolt.new.