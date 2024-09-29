import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { AlertCircle } from "lucide-react"


export function Login() {
 const [values, setValues] = useState({
    email: '',
    password: ''
 })

 const navigate = useNavigate()

 const [error,setError] = useState(null)

 //to display the cookies in the cookies storage of console
 axios.defaults.withCredentials=true;

 const handleSubmit = (event) => {
    event.preventDefault()

    axios.post('http://localhost:3000/auth/adminLogin', values)
    .then(result => {
      if(result.data.loginStatus){
        navigate('/dashboard')
      }else{
        setError(result.data.Error)
      }
    })
    .catch(err => console.log(err))
 }

    return(
   

<form onSubmit={handleSubmit}>



<div className="min-h-screen justify-center flex items-center">

<Card className="w-full max-w-sm ">
<div className="text-red-500 bold pl-5 pt-5 block">
    {error && error}
  </div>


<CardHeader>
  <CardTitle className="text-2xl font-bold">Login</CardTitle>
  <CardDescription>
    Enter your email below to login to your account.
  </CardDescription>

</CardHeader>
 
<CardContent className="grid gap-4">
  <div className="grid gap-2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" 
    placeholder="m@example.com"
     required
     onChange = {(e) => setValues({...values, email: e.target.value})}
      />
  </div>

  {/* PASSWORD */}
  <div className="grid gap-2">
    <Label htmlFor="password">Password</Label>
    <Input id="password" 
    placeholder='password' 

    required
    onChange={(e) => setValues({...values, password: e.target.value})}
    />
  </div>
</CardContent>

<CardFooter>
  <Button className="w-full">Sign in</Button>
</CardFooter>
</Card>

</div>
</form>
      
   
    
    )

}
