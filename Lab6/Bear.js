let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let students = [{id:5935512039, name:'Sakul', surname: 'Somkerwwhan', Major:'CoE', GPA:2.65}
];

//-------------------------------------------------------------
// router.route('/bears').get((req, res) =>  res.json(bears) );
//------------------------------------------------------------

//READ
//-------------------------------------------------------------
// let bearIndex=2;
router.route('/students')
   // get all bears
   .get( (req, res) =>  res.json(students) ) 

   // insert a new bear
   .post( (req, res)=> {
       var student = {};
       student.id =  req.body.id;
       student.name = req.body.name
       student.surname = req.body.surname
       student.Major = req.body.Major
       student.GPA = req.body.GPA
       students.push(student);
       res.json( {message: 'student created!'} )
   })
//------------------------------------------------------------

// Update and Delete
router.route('/students/:student_id')
   .get ( (req,res) => res.json(students[req.params.student_id]))  // get a bear

   .put ( (req,res) => {                               // Update a bear
       var id = req.params.student_id-1
       students[id].name = req.body.name;   
       students[id].surname = req.body.surname;
       students[id].Major = req.body.Major;
       students[id].GPA = req.body.GPA;   
       res.json({ message: 'Student updated!' + req.params.student_id});
   })

   .delete ( (req,res) => {                   // Delete a bear
       students = students.filter((item) => item.id != req.params.student_id)
       res.json({ message: 'Student deleted: ' + req.params.student_id});
   })



app.use("*", (req,res) => res.status(404).send('404 Not found') );
app.listen(8000,  () => console.log("Server is running") );