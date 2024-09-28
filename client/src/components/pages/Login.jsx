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
import axios from "axios"
import { useState } from "react"


export function Login() {
 const [values, setValues] = useState({
    email: '',
    password: ''
 })

 const handleSubmit = (event) => {
    e.preventDefault()

    axios.post('http://locahost:3000/auth/adminLogin')
    .then(result => console.log(result))
    .catch(err => console.log(err))
 }

    return(
        <div className="min-h-screen justify-center flex items-center">
  
        <Card className="w-full max-w-sm " onSubmit = {handleSubmit}>
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
    )

}
