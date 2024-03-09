import "./register.css";
import { redirect } from "next/navigation";
import SweetAlertComponent from "@/components/SweetAlertComponent";
import { Suspense } from "react";

export default function RegisterPage() {
  const handleRegister = async (formData: FormData) => {
    "use server";

    const name = formData.get("name") as string;
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, username, email, password }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return redirect("/register?error=" + result.error);
    }

    return redirect("/login");
  };

  return (
    <main
      className="flex min-h-screen w-full justify-center items-center"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Suspense fallback={<div>Loading error message...</div>}>
        <SweetAlertComponent />
      </Suspense>
      <div className="card">
        <div className="card2">
          <form className="form" action={handleRegister}>
            <p id="heading">Register</p>
            <div className="field">
              <input
                type="text"
                className="input-field"
                placeholder="Name"
                autoComplete="off"
                name="name"
              />
            </div>
            <div className="field">
              <input
                type="text"
                className="input-field"
                placeholder="Username"
                autoComplete="off"
                name="username"
              />
            </div>
            <div className="field">
              <input
                className="input-field"
                placeholder="Email"
                autoComplete="off"
                name="email"
              />
            </div>
            <div className="field">
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                name="password"
              />
            </div>
            <div className="btn">
              <button type="submit" className="button1">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
