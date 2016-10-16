import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [{
                "title": "About",
                "skill": "Professional web engineer with a passion for solving problems, the pursuit of knowledge, and teaching.<br>Diverse experience in web development, web design, graphic design, leadership, and project management.<br>Proven ability to meet tight deadlines, troubleshoot, problem solve and increase productivity."
            }, {
                "title": "Education",
                "skill": "Web Programming, Associate&nbsp;of&nbsp;Applied&nbsp;Science <br>" +
                    "Rasmussen College, GPA: 4.0 <br>" +
                    "Anticipated Graduation: 12/2017 <br>" +
                    "Dean’s List: Winter 2016, Spring 2016<br>" +
                    "<br>" +
                    "Graphic Design, Diploma <br>" +
                    "Minneapolis Business College, GPA: 3.71 <br>" +
                    "Graduation: 8/2005 <br>"
            }, {
                "title": "Coursework",
                "skill": "Business Systems Concepts and Computer Applications, Java, Logic and Troubleshooting, Microsoft Office Suite, Mobile&nbsp;Application&nbsp;Development, Object&nbsp;Oriented&nbsp;Programming, PHP / MYSQL, Programming Fundamentals, Python, Relational&nbsp;Databases, VISUAL Basic"
            }, {
                "title": "Qualifications",
                "skill": "Adobe Creative Suite, Build Automation, Debugging, Design Sprints, DOM Manipulation, GitHub&nbsp;Source&nbsp;Control, MVC Architecture, Responsive Web Design, Single&nbsp;Page&nbsp;Applications, Test-Driven&nbsp;Development, Unix Command Line, Web&nbsp;Design"
            }, {
                "title": "Programming Languages",
                "skill": "CSS, Elixir, Go, HTML, JavaScript, Ruby, SQL"
            }, {
                "title": "Operating Systems",
                "skill": "MacOS, Windows, Linux Ubuntu"
            }, {
                "title": "Soft Skills And Collaborative Skills",
                "skill": "Business Communications, Critiquing, Foundational Learning, Human Relations, Lean Production Strategies, Professional Development, Professional Stamina, Project Management, Self-Directed Learning, Self-Motivation, Team Leadership, Teamwork"
            }, {
                "title": "Professional Experience",
                "skill": "Digital&nbsp;Pre-Press&nbsp;Engineer and Digital&nbsp;Press&nbsp;Operator <br>" +
                    "8/2011 to Present <br>" +
                    "Ideal Printers Inc., Saint Paul, MN <br>" +
                    "•Schedule, design, preflight, and troubleshoot 25+ design projects within a 4-hour turnaround each day.<br>" +
                    "•Use SQL queries to generate accurate variable data files from raw customer data.<br>" +
                    "•Use programming logic to manipulate variable data to match client specifications.<br>" +
                    "•Design and engineer workflow automation programs to reduce project turnaround times.<br>" +
                    "•Proof, print, and maintain quality for client orders within a 12-24 hour timeframe.<br>" +
                    "•Troubleshoot mechanical and software malfunctions on several large scale digital printers.<br>"
            }

        ];
    }

});
