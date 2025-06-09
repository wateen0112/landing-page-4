
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/ThemeToggle"
import { LanguageSwitch } from "@/components/LanguageSwitch"
import { BarChart3 } from "lucide-react"
import { Link } from "react-router-dom"
import { useLanguage } from "@/hooks/useLanguage"
import { useTranslation } from "@/utils/i18n"

const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const { language, isRTL } = useLanguage();
  const t = useTranslation(language);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }
    console.log("Sign up:", { name, email, password })
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className={`absolute top-4 flex items-center space-x-2 ${isRTL ? 'left-4 flex-row-reverse space-x-reverse' : 'right-4'}`}>
        <LanguageSwitch />
        <ThemeToggle />
      </div>
      
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <Link to="/" className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <BarChart3 className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">DataFlow</span>
          </Link>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className={`text-2xl font-bold ${isRTL ? 'text-right' : 'text-center'}`}>
              {t.auth.signUp.title}
            </CardTitle>
            <CardDescription className={isRTL ? 'text-right' : 'text-center'}>
              {t.auth.signUp.subtitle}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className={isRTL ? 'text-right block' : ''}>{t.auth.signUp.name}</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={isRTL ? 'text-right' : ''}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className={isRTL ? 'text-right block' : ''}>{t.auth.signUp.email}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={isRTL ? 'text-right' : ''}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className={isRTL ? 'text-right block' : ''}>{t.auth.signUp.password}</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={isRTL ? 'text-right' : ''}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className={isRTL ? 'text-right block' : ''}>{t.auth.signUp.confirmPassword}</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className={isRTL ? 'text-right' : ''}
                />
              </div>
              <Button type="submit" className="w-full">
                {t.auth.signUp.button}
              </Button>
            </form>
            <div className={`mt-4 text-sm ${isRTL ? 'text-right' : 'text-center'}`}>
              {t.auth.signUp.hasAccount}{" "}
              <Link to="/signin" className="text-primary hover:underline">
                {t.auth.signUp.signIn}
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SignUp
