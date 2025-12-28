import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Logo from "@/components/Logo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only
  };

  return (
    <>
      <Helmet>
        <title>Login - benriii</title>
        <meta
          name="description"
          content="Login to your benriii account to manage your hosting, domains, and automation workflows."
        />
      </Helmet>
      <div className="min-h-screen flex">
        {/* Left Panel */}
        <div className="hidden lg:flex lg:w-1/2 gradient-hero items-center justify-center p-12">
          <div className="max-w-md text-primary-foreground">
            <h1 className="text-4xl font-bold mb-6">
              Welcome Back to benriii
            </h1>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Manage your websites, domains, and automation workflows all in one
              place.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <span className="text-accent font-bold">1</span>
                </div>
                <span>Access your dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <span className="text-accent font-bold">2</span>
                </div>
                <span>Manage all your services</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <span className="text-accent font-bold">3</span>
                </div>
                <span>Get 24/7 support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <Logo className="mb-6" />
              <h2 className="text-2xl font-bold text-foreground">
                Sign in to your account
              </h2>
              <p className="text-muted-foreground mt-2">
                Don't have an account?{" "}
                <Link to="/signup" className="text-accent hover:underline">
                  Sign up
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked as boolean)
                    }
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-muted-foreground cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-accent hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" variant="accent" className="w-full h-12">
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
