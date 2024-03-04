import "./register.css";

export default function RegisterPage() {
  return (
    <main
      className="flex min-h-screen w-full justify-center items-center"
      style={{
        backgroundImage: "url('/regisbackground.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="card">
        <div className="card2">
          <form className="form">
            <p id="heading">Register</p>
            <div className="field">
              <input
                type="text"
                className="input-field"
                placeholder="Name"
                autoComplete="off"
              />
            </div>
            <div className="field">
              <input
                type="text"
                className="input-field"
                placeholder="Username"
                autoComplete="off"
              />
            </div>
            <div className="field">
              <input
                type="email"
                className="input-field"
                placeholder="Email"
                autoComplete="off"
              />
            </div>
            <div className="field">
              <input
                type="password"
                className="input-field"
                placeholder="Password"
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
