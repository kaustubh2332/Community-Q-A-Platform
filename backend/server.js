const express = require("express");
const mysql = require('mysql');
//const bodyParser = require('body-parser');
const cors = require("cors");
const bcrypt = require('bcrypt');
const { response } = require("express");
const saltRounds = 10;

//const bodyParser = require('body-parser')
//const cookieParser = require('cookie-parser')
//const expressSession = require('express-session')


 
const app = express();
app.use(express.urlencoded({ extended: true }));
/*app.use(cors({
    origin: ['http://192.168.51.84:3001/Login'],
    methods: ['GET','POST'],
    credentials: true

}
));*/
// parse application/json
app.use(express.json());
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(cookieParser())

/*app.use(expressSession({
  key: "userId",
  secret: "brjctk",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60*60,
  },
}))*/

app.use(cors());
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  next(); 
})
  
//create database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123123',
  database: 'students'
});
 
//connect to database
db.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});

/*try {
   db.authenticate();
  console.log('Database connected...');
} catch (error) {
  console.error('Connection error:', error);
}*/


app.post("/Register",(req,res) => {

  const name = req.body.Name;
  const gender = req.body.Gender;
  const age = req.body.Age;
  const emailid = req.body.EmailId;
  const password = req.body.Password;
  const confirm_password = req.body.ConfirmPassword;

  //const sqlInsert = "INSERT INTO Registration (FirstName,LastName,Gender,Age,EmailId,Password,ConfirmPassword) VALUES (?,?,?,?,?,?,?)"

  bcrypt.hash(password,saltRounds, (err,hash) => {
    if(err) {
      console.log(err)
    }
    db.query("INSERT INTO Registration2 (Name,EmailId,Password,ConfirmPassword,Gender,Age) VALUES (?,?,?,?,?,?);", 
  [name,emailid,hash,confirm_password,gender,age,],(err,result) => {
    //console.log(result.FirstName);
    console.log(err);
    if(result) {
      res.redirect("/Login");
    }

  })

 
  })
  
}) 

/*app.get("/Login",(req,res) => {
  if(res.expressSession) {
    res.send({loggedIn : true,user: req.expressSession.user});
  }
  else {
    res.send({loggedIn: false});
  }
})*/
let EMAILID = '';
app.post("/Login",(req,res) => {
  const emailid = req.body.emailid;
  const password = req.body.password;
  EMAILID = emailid;
  db.query("SELECT * FROM Registration2 WHERE EmailId = ?;",
  emailid, (err,result) => {
    if(err) {
      res.send({err: err});
    }
    if(result.length > 0) {
      //console.log(result[0].Password);
      bcrypt.compare(password,result[0].Password, (error,response) => {
        if(response) {
          //req.expressSession.user = result;
          //console.log(req.expressSession.user);
          //res.send({redirect:"http://192.168.51.84:3001/AccHome"});
          //res.send({redirect:'http://192.168.51.84:3002/AccHome'});
          
          //res.redirect('http://192.168.51.84:3002/AccHome');
          res.send({message:"Login Successful"})
          } else {
          res.send({message: "Incorrect Password"});
        }
      })
    }
    else {
      res.send({message: "User doesn't exist"});
    }
  
  })
  

}) 

app.post("/self-test",(req,res) => {
  const emailid = req.body.emailid
  const internationaltravel = req.body.internationaltravel;
  const domestictravel = req.body.domestictravel;
  const closecontact = req.body.closecontact;
  const temperature = req.body.temperature;
  const fatigue = req.body.fatigue;
  const limb_pain = req.body.limb_pain;
  const sneezing = req.body.sneezing;
  const cough = req.body.none_symptoms;
  const none_symptoms = req.body.none_symptoms;
  const lung_disease = req.body.lung_disease;
  const diabetes = req.body.diabetes;
  const heart_disease = req.body.heart_disease;
  const obesity = req.body.obesity;
  const none_complications = req.body.none_complications;

  db.query("INSERT INTO self_assessment (international_travel,domestic_travel,close_contact,temperature,fatigue,limb_pain,chills_sneezing_sore_throat,persistent_cough,none_symptoms,lung_disease,diabetes,heart_disease,obesity,none_complications,EmailId) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", 
  [internationaltravel,domestictravel,closecontact,temperature,fatigue,limb_pain,sneezing,cough,none_symptoms,lung_disease,diabetes,heart_disease,obesity,none_complications,emailid
  ],(err,result) => {
    console.log(err);
  
  })

  if((temperature=='High fever(103-104)'||temperature=='Very high fever(more than 104)')&& (cough=='Yes')||(closecontact=='Yes')||(sneezing=='Yes')) {
    res.send({message:"Your symptoms are highly matching with the Covid symptoms.Hence we advise you take a Covid Test"})
  }

  else if(temperature=='High fever(103-104)'||temperature=='Medium fever(101-102)'&&((cough=='Yes')||(sneezing=='Yes'))&&(lung_disease=='Yes' || diabetes=='Yes' || heart_disease == 'Yes'||obesity=='Yes')) {
    res.send({message:"Your symptoms are highly matching with the Covid symptoms.Hence we advise you take a Covid Test"})
  }
  else if(temperature=='Medium fever(101-102)'&&(cough=='Yes'||sneezing=='Yes') || (closecontact=='Yes')) {
    res.send({message:"Your symptoms are partially matching with the Covid symptoms.Hence we advise you to consult a doctor for further expertise"})

  }
  else if(temperature=='Mild fever(98.6-100)'&&((cough=='Yes')||(sneezing=='Yes')) || closecontact=='Yes') {
    res.send({message:"You have very mild Covid symptoms.Hence in our opinion you DON'T need a Covid Test"})
  }
  else if(temperature=='Mild fever(98.6-100)' && limb_pain=='Yes') {
    res.send({message:"In our opinion you DON'T need a Covid Test"})
  }
  else {
    res.send({message:"Your results are difficult to comprehend.Please consult a doctor for further expertise."})
  }

})

app.post("/AccHome/Vac", (req,res) => {
  const emailid = req.body.emailid;
  const birth_date = req.body.birth_date;
  const vacc_status = req.body.vacc_status;
  const doses = req.body.doses;
  const date_dose1 = req.body.date_dose1;
  const date_dose2 = req.body.date_dose2;
  const duedate_dose2 = req.body.duedate_dose2;

  db.query("INSERT INTO vaccination_details (birth_date,vacc_status,doses,date_dose1,date_dose2,duedate_dose2,EmailId) VALUES (?,?,?,?,?,?,?)",
  [birth_date,vacc_status,doses,date_dose1,date_dose2,duedate_dose2,emailid],(err,result) => {
    console.log(err);
  })

  /*db.query("UPDATE vaccination_details SET doses = 'Not Vaccinated' WHERE vacc_status = 'No'",(err,result) => {
    console.log(err);
  })*/

  /*db.query("SELECT doses FROM vaccination_details WHERE EmailId = ?",emailid, (err,result) => {
    if(err) {
      console.log(err);
    }
    else {
      console.log(result);
      const vacc_status = result[0].doses;
      db.query("UPDATE Registration2 SET VaccStatus = ? WHERE EmailId = ?",[vacc_status,emailid],(err,results) => {
        if(err) {
          console.log(err);
        }
      })
    }
    
  })*/
})

app.get("/AccHome/User",(req,res) => {
  //console.log(result[0].EmailId);
//const emailid = result[0].EmailId;
 db.query("SELECT Name,EmailId,Gender,Age,VaccStatus,CovidStatus FROM Registration2 WHERE EmailId = ?",EMAILID,(err,responses) => {
   if(err) {  
    console.log(err);
     res.send({err:err});
     
   }
   else {
     console.log(responses);
     //res.send({message:"HelloWorld"});
     res.send(responses);
   }
 })

})


let recovered_cases = 0;

app.post("/AccHome/User",(req,res) => {
  const vacc_status = req.body.vacc_status;
  const covid_status = req.body.covid_status;
  const emailid = req.body.emailid;
  
  db.query("SELECT CovidStatus FROM Registration2 WHERE EmailId = ?",emailid,(err,response) => {
    console.log(response);
    console.log(response[0].CovidStatus == 'Positive');
    console.log(covid_status == 'Negative');
    if(err) {
      console.log(err);
    }
    else if(response[0].CovidStatus=='Positive' && covid_status=='Negative') {
        recovered_cases = recovered_cases + 1;
        console.log(recovered_cases);
      }
      app.get("/RecoveredStats",(req,res) => {
      res.send({value:recovered_cases});
    })
  })
  db.query("UPDATE Registration2 SET VaccStatus = ?,CovidStatus = ? WHERE EmailId = ?",[vacc_status,covid_status,emailid],(err,response) => {
    if(err) {
      console.log(err);
      res.send({err:err});
    }
    else {

    }
    
  })
})

app.get("/Stats",(req,res) => {
  //let count = 0;
  db.query("SELECT COUNT(CovidStatus) AS count FROM Registration2 WHERE CovidStatus = 'Positive'",(err,response) => {
    if(err) {
      console.log(err);
    }
    else {
      res.send(response);
    }
  })
})

 /*app.get("/AccHome/User",(req,res) => {
  res.send({message:"Hello World"});
 })*/
   
  app.listen(3003, () => {
    console.log("Server running successfully on 3003");
  });


  