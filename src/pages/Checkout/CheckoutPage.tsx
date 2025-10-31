import { GalleryVerticalEnd } from "lucide-react"
import { SignupForm } from "@/components/signup-form"

import { CheckoutField } from "@/components/checkout-field.tsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CheckoutPage()
{
    return (
        <>
            <div className="bg-muted flex min-h-svh flex-row items-center justify-center p-6 md:p-10 gap-20">
                <Card className="w-xl p-5">
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl">Create your account</CardTitle>
                      <CardDescription>
                        Enter your email below to create your account
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <CheckoutField />
                    </CardContent>
                </Card>
                <div className="bg-red-100 w-200 h-100">

                </div>
            </div>
        </>
    )
}

// export function CheckoutPage() {
//   return (
//     <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
//     </div>
//   )
// }
