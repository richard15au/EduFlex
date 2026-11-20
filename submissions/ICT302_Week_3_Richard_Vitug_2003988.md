# ICT302 Information Technology Project 2 (T3 2026)
## Week 3 – Individual Submission

**Student Name:** Richard Maceda Vitug  
**Student ID:** 2003988  
**Course:** ICT302 Information Technology Project 2  
**Lecturer:** Sarita KOIRALA  
**Project Title:** EduFlex – A Lightweight Course Management Tool  

## Project Overview

EduFlex is a lightweight web-based course management system designed to simplify teaching and learning in educational institutions. The system provides essential features such as course management, tutorials, assignments, quizzes, and role-based access for administrators, instructors, and students. EduFlex focuses on providing a simple, responsive, and user-friendly platform that supports everyday teaching and learning activities while avoiding the complexity found in many existing learning management systems.

## Assigned Section

For this week, I was assigned to work on Task 3.1 (Instructor Grading Server Actions in src/actions/instructor.ts) for the Staff Portals milestone. My responsibility was to build the backend grading actions so instructors can view submitted student assignments, enter scores and feedback, and release final grades to our Neon PostgreSQL database.

My work for this week covered the following parts:

- Checking instructor and administrator permissions on the server before allowing any grading actions
- Loading the latest student assignment submissions and released grade records from Neon
- Validating scores and rubric totals and calculating the matching grade band (HD, DI, CR, P, or F)
- Saving the graded submission and releasing the grade record using Neon server timestamps

## Instructor Grading Server Actions

I created the Instructor Grading Server Actions inside src/actions/instructor.ts. First, I added a helper function (requireInstructorOrAdmin) that checks the user's session and makes sure only an Instructor or Administrator can load the grading queue or submit marks. Next, I built getInstructorGradingQueueAction to fetch each student's latest submitted assignment (isLatest: true) and existing grade records directly from our Neon database.

I also built gradeSubmissionAction so instructors can grade a student's work with a score, feedback, and optional rubric breakdown. It checks that the score is valid, calculates the percentage and grade label, updates the submission status to GRADED, and saves the result in the GradeRecord table using Neon's server time.

| Part Completed | What It Does in EduFlex |
| --- | --- |
| Role Check (requireInstructorOrAdmin) | Verifies the user's server session and blocks students from accessing instructor grading actions. |
| Grading Queue (getInstructorGradingQueueAction) | Loads the latest student assignment submissions and released gradebook records from Neon PostgreSQL. |
| Grade & Release (gradeSubmissionAction) | Validates scores, calculates percentage and grade bands (HD to F), updates the submission to GRADED, and saves the released grade in GradeRecord. |

## Self-Reflection

This week's task helped me understand how the Student Portal and Instructor Portal connect to the same database tables in EduFlex. While building src/actions/instructor.ts, I learned how updating an assignment submission and saving a GradeRecord together ensures that a student sees their released mark and feedback right away. It also showed me why checking the user's role on the server is important so only instructors or administrators can change grades.

This activity also improved how I organise backend checks and handle edge cases. One challenge was making sure that when a student resubmits an assignment, the grading queue only pulls their latest attempt while keeping the gradebook record updated without creating duplicate rows. Handling this inside the Server Actions gave me a clearer idea of how our grading workflow will connect with file storage and backups in the next stage.
