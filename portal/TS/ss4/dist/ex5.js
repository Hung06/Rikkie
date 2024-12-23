"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Course {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}
class Enrollment {
    constructor(student, course, scheduleTime) {
        this.student = student;
        this.course = course;
        this.scheduleTime = scheduleTime;
    }
}
class StudyManager {
    constructor() {
        this.students = [];
        this.courses = [];
        this.enrollments = [];
    }
    addStudent(name) {
        let id = this.students.length + 1;
        let student = new Student(id, name);
        this.students.push(student);
    }
    addCourse(title) {
        let id = this.courses.length + 1;
        let course = new Course(id, title);
        this.courses.push(course);
    }
    enrollStudent(studentId, courseId, scheduleTime) {
        let student = this.students.find(student => student.id === studentId);
        let course = this.courses.find(course => course.id === courseId);
        if (student && course) {
            let enrollment = new Enrollment(student, course, scheduleTime);
            this.enrollments.push(enrollment);
        }
    }
    listEnrollments() {
        this.enrollments.forEach(enrollment => {
            console.log(enrollment.student.id, enrollment.student.name, enrollment.course.id, enrollment.course.title, enrollment.scheduleTime);
        });
    }
}
class Main5 {
    run() {
        const studyManager = new StudyManager();
        let choice = 0;
        while (choice !== 4) {
            console.log("1. Thêm sinh viên");
            console.log("2. Thêm khóa học");
            console.log("3. Đăng ký học");
            console.log("4. Thoát");
            switch (choice) {
                case 1:
                    let name = prompt("Nhập tên sinh viên: ");
                    if (!name) {
                        console.log("Tên không hợp lệ");
                    }
                    else {
                        studyManager.addStudent(name);
                    }
                    break;
                case 2:
                    let title = prompt("Nhập tên khóa học: ");
                    if (!title) {
                        console.log("Tên không hợp lệ");
                    }
                    else {
                        studyManager.addCourse(title);
                    }
                    break;
                case 3:
                    let studentId = prompt("Nhập mã sinh viên: ");
                    let courseId = prompt("Nhập mã khóa học: ");
                    let scheduleTime = prompt("Nhập thời gian học: ");
                    if (!studentId || !courseId || !scheduleTime || isNaN(Number(studentId)) || isNaN(Number(courseId))) {
                        console.log("Thông tin không hợp lệ");
                    }
                    else {
                        studyManager.enrollStudent(Number(studentId), Number(courseId), scheduleTime);
                    }
                    break;
                case 4:
                    studyManager.listEnrollments();
                    break;
                case 5:
                    console.log("Thoát");
                    break;
                default:
                    console.log("Không hợp lệ");
                    break;
            }
        }
    }
}
const main5 = new Main5();
main5.run();
