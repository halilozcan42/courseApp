// Storage Controller
const StorageController = (function() {




})();



// Course Controller
const CourseController = (function() {

    // private
    const Course = function(name, id, year, point, place, coursecode, date, period) {
        this.name = name;
        this.id = id;
        this.year = year;
        this.point = point;
        this.place = place;
        this.coursecode = coursecode;
        this.date = date;
        this.period = period;
    }

    const data = {
        courses: [
            { name: 'Matte', id: 'MatMat', year: 2020, point: '100 poäng', place: 'komvux', coursecode: 'KH Mat', date: '12 december 2020', period: 'day' },
            { name: 'Matte', id: 'MatMat', year: 2020, point: '100 poäng', place: 'komvux', coursecode: 'KH Mat', date: '12 december 2020', period: 'day' },
            { name: 'Matte', id: 'MatMat', year: 2020, point: '100 poäng', place: 'komvux', coursecode: 'KH Mat', date: '12 december 2020', period: 'day' },
        ],
        selectedCourse: null,
        totalPoint: 0
    }

    // public
    return {
        getCourses: function() {
            return data.courses;
        },
        getData: function() {
            return data;
        }
    }

})();


// UI Controller

const UIController = (function() {
    const Selectors = {
        courseList: "#courses"
    }

    return {
        createCourseList: function(courses) {
            let html = '';

            courses.forEach(course => {
                html += `
                    <tr>
                                <th scope="col">${course.name}</th>
                                <th scope="col">${course.id}</th>
                                <th scope="col">${course.year}</th>
                                <th scope="col">${course.point}</th>
                                <th class="pt-3 text-right" rowspan="2">
                                    <button class="btn btn-primary" id="chooseBtn">Välj kurs</button>
                                </th>
                            </tr>
                            <tr>
                                <td>${course.place}</td>
                                <td>${course.coursecode}</td>
                                <td>${course.date}</td>
                                <td>${course.period}</td>
                                <td></td>
                            </tr>
                `;
            });

            document.querySelector(Selectors.courseList).innerHTML = html;
        },
        getSelectors: function() {
            return Selectors;
        }
    }


})();


// App Controller
const App = (function(CourseCtrl, UICtrl) {

    return {
        init: function() {
            console.log('starting app...');
            const courses = CourseCtrl.getCourses();

            UICtrl.createCourseList(courses);

        }
    }


})(CourseController, UIController);

App.init();