import { Button } from '@mui/material'
import React,{useState,useEffect}from 'react'
import { TextField,Stack,palette} from '@mui/material'
import './ajout.css';
import axios, { Axios } from 'axios'


const Ajout=()=>{
   
      const [nom2, setNom] = useState("");
  const[prenom2,setPrenom]=useState("");
  const[age2,setAge]=useState(2);
  const[errnom,setErrnom]=useState("");
  const[errprenom,setErrprenom]=useState("");
  const[errage,setErrage]=useState("");
  const [affiche,setAffiche]=useState([]) 
  const user={
    "nom":nom2,
    "prenom":prenom2,
    "age":age2
  }
  const updite=()=>{
    const user={
      "nom":nom2,
      "prenom":prenom2,
      "age":age2
    }
    axios.post(`http://localhost:3000/api/user/adduser`,user).then(res=>{ setAffiche(res.data)
  }).catch(err=>{
    console.log("err")
  })
  /*  axios.delete("http://localhost:8080/api/user/${age2}")
    .then(res=>{ setAffiche(res.data)
    })
    .catch(err=>{
      console.log("err")
    })*/
  }
  const submitee=(data)=>{
    if(nom2==="")
    {
     setErrnom("champs obligatoire")
    }else{
      setErrnom("")
    }
    if(prenom2==="")
    {
     setErrprenom("champs obligatoire")
    }else{
      setErrprenom("")
    }
    if(age2==null)
    {
     setErrage("champs obligatoire")
    }else if(age2!=null){
      setErrage("")
    }
  const formData = new FormData();
    console.log(nom2)
formData.append('nom',nom2);
formData.append('prenom',prenom2);
formData.append('age',age2)

axios.post(`http://localhost:8080/api/user/adduser`,formData)
.then(res => {
console.log(res)
}).catch(err=> console.log(err))
}

const add=(e)=>{
  e.preventDefault();

  const formData = new FormData();
  console.log(nom2)
formData.append('nom',nom2);
formData.append('prenom',prenom2);
formData.append('age',age2)
console.log(user);
  axios.post('http://localhost:8080/api/user/adduser',(formData))
  .then(res=>console.log("succ"))
  .catch(err=>console.log("err"))
}


const loadarticles=()=>{
  axios.get("http://localhost:8080/api/user/getalluser")
  .then(res=>{ setAffiche(res.data)
  })
  .catch(err=>{
    console.log("data not found")
  })
}
useEffect(()=>{
  loadarticles()
 },[])
  return ( 
     <div>
  <div className='cadre'>
 <h1 className='title'>Inscription</h1>
 <form onSubmit={add}>
  <input type='text' name="nom" value={nom2} onChange={(e)=> setNom(e.target.value)}/>
  <input type='text' value={prenom2} onChange={(e)=> setPrenom(e.target.value)}/>
<input  type='number' value={age2} onChange={(e)=> setAge(e.target.value)}/>

<button type='submit' className='button'>Inscription</button>
</form>
</div>

        {affiche.map(el=>{
      return ( <><tr>
       
        <td>{el.nom}</td>
        <td>{el.prenom}</td>
        <td>{el.age}</td>
        </tr>
      
      </>
      )
    })}
    <button onClick={updite}>test</button>
</div>
  )
}

export default Ajout 
