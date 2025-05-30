db.employees.aggregate([
    {$sort : { salary : -1 }},
    {$limit:3},


    {$project :{
        name:1,
        salary:1,
        brand:{
           $cond: {
             if: {$gt: ["$age",40]},
             then:"Brand A",
             else:"Brand B",
           }
        }
    }
},


    {$project :{
        name:1,
        email:1,
        monthlySalary: "$salary",
        annualSalary: {$multiply:["$salary",12]}
    }}

]);