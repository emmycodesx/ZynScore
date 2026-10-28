"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, ShieldCheck, Check, Zap, Bell, BarChart2 } from "lucide-react";
import ZynScoreLogo from "@/components/ZynScoreLogo";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedSport, setSelectedSport] = useState("football");
  const [agreedTerms, setAgreedTerms] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const calculatePasswordStrength = () => {
    if (!password) return { score: 0, label: "None", color: "bg-neutral-200" };
    if (password.length < 6) return { score: 1, label: "Weak", color: "bg-red-500" };
    if (password.length < 10) return { score: 2, label: "Good", color: "bg-amber-500" };
    return { score: 3, label: "Strong", color: "bg-emerald-500" };
  };

  const strength = calculatePasswordStrength();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !password || !agreedTerms) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1000);
  };

  const sportOptions = [
    { id: "football", label: "⚽ Football" },
    { id: "basketball", label: "🏀 Basketball" },
    { id: "tennis", label: "🎾 Tennis" },
    { id: "all", label: "🔥 All Sports" },
  ];

  return (
    <div className="flex min-h-screen w-full bg-[#FAFAFA] text-[#111827] font-body selection:bg-black selection:text-white">
      <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-12">
        
        {/* Left Side: Brand Value Showcase (5 cols on lg) */}
        <div className="relative hidden lg:flex lg:col-span-5 flex-col justify-between overflow-hidden bg-[#0B0F19] p-10 xl:p-14 text-white">
          {/* Background sports action image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/basketball.jpg"
              alt="ZynScore Basketball Coverage"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
              className="object-cover object-center opacity-35 mix-blend-luminosity scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-[#0B0F19]/90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_50%)]" />
          </div>

          {/* Top: Brand Logo */}
          <div className="relative z-10">
            <Link href="/" className="inline-block group">
              <ZynScoreLogo size="lg" theme="dark" />
            </Link>
          </div>

          {/* Middle: Feature Highlights */}
          <div className="relative z-10 my-auto py-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-white/5 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 backdrop-blur-sm">
              <span>Free Account • No Credit Card</span>
            </div>

            <h2 className="font-heading text-3xl xl:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Experience sports like never before.
            </h2>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-800 text-white border border-neutral-700">
                  <Zap className="h-4 w-4 text-amber-400" />
                </div>
                <div>
                  <div className="font-heading text-sm font-bold text-white">
                    Sub-Second Live Telemetry
                  </div>
                  <div className="text-xs text-neutral-400 leading-relaxed">
                    Direct stadium optical tracking feeds streaming in &lt;300ms.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-800 text-white border border-neutral-700">
                  <BarChart2 className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <div className="font-heading text-sm font-bold text-white">
                    Advanced xG & Shot Charts
                  </div>
                  <div className="text-xs text-neutral-400 leading-relaxed">
                    Deep statistical modeling evaluated across 30+ micro-variables.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-800 text-white border border-neutral-700">
                  <Bell className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <div className="font-heading text-sm font-bold text-white">
                    Custom Goal & Clutch Alerts
                  </div>
                  <div className="text-xs text-neutral-400 leading-relaxed">
                    Personalized mobile notifications for your favorite teams and leagues.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Community trust badge */}
          <div className="relative z-10 flex items-center gap-3 text-xs font-mono text-neutral-400 border-t border-neutral-800/80 pt-6">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Trusted by 250,000+ passionate sports fans worldwide</span>
          </div>
        </div>

        {/* Right Side: Form Column (7 cols on lg) */}
        <div className="flex col-span-1 lg:col-span-7 flex-col justify-between p-6 sm:p-12 lg:p-16 xl:p-20 overflow-y-auto">
          
          {/* Mobile-only logo header */}
          <div className="flex lg:hidden items-center justify-between mb-8">
            <Link href="/" className="inline-block">
              <ZynScoreLogo size="md" />
            </Link>
            <Link href="/" className="text-xs font-semibold text-neutral-500 hover:text-black">
              Back to Home
            </Link>
          </div>

          {/* Form Container */}
          <div className="mx-auto w-full max-w-md my-auto">
            
            {/* Header */}
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-black">
                Create your account
              </h1>
              <p className="mt-2 text-sm text-neutral-600">
                Join ZynScore to track live matches with unmatched telemetry precision.
              </p>
            </div>

            {/* Social Auth Buttons */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2.5 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-xs font-bold text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300 transition-colors shadow-sm"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Google</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2.5 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-xs font-bold text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300 transition-colors shadow-sm"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 1.01-2.87-.9.04-1.99.6-2.64 1.35-.58.65-1.09 1.71-1.01 2.76 1.01.08 2.02-.49 2.64-1.24z"/>
                </svg>
                <span>Apple</span>
              </button>
            </div>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-neutral-200" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                or sign up with email
              </span>
              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            {/* Form */}
            {success ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 text-center space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-emerald-950">
                  Account Created Successfully!
                </h3>
                <p className="text-xs text-emerald-700">
                  Welcome to ZynScore, <span className="font-bold text-black">{fullName}</span>! Your match dashboard is ready.
                </p>
                <Link
                  href="/"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-xl bg-black px-5 py-2.5 text-xs font-bold text-white hover:bg-neutral-800 transition-colors"
                >
                  <span>Explore Live Telemetry</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jordan Sterling"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full rounded-xl border border-neutral-200 bg-white py-3 pl-10 pr-4 text-sm text-black placeholder:text-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black shadow-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                    <input
                      type="email"
                      required
                      placeholder="jordan@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-neutral-200 bg-white py-3 pl-10 pr-4 text-sm text-black placeholder:text-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black shadow-sm"
                    />
                  </div>
                </div>

                {/* Password with Strength Meter */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                      Password
                    </label>
                    {password && (
                      <span className="text-[11px] font-mono font-bold text-neutral-500">
                        {strength.label}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Minimum 8 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-xl border border-neutral-200 bg-white py-3 pl-10 pr-10 text-sm text-black placeholder:text-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {/* Strength Bar */}
                  {password && (
                    <div className="mt-2 flex gap-1 h-1 w-full bg-neutral-100 rounded-full overflow-hidden">
                      <div className={`h-full flex-1 ${strength.score >= 1 ? strength.color : "bg-neutral-200"}`} />
                      <div className={`h-full flex-1 ${strength.score >= 2 ? strength.color : "bg-neutral-200"}`} />
                      <div className={`h-full flex-1 ${strength.score >= 3 ? strength.color : "bg-neutral-200"}`} />
                    </div>
                  )}
                </div>

                {/* Favorite Primary Sport Picker */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Primary Sport Interest
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {sportOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedSport(opt.id)}
                        className={`rounded-xl border py-2 text-xs font-bold transition-all text-center ${
                          selectedSport === opt.id
                            ? "border-black bg-black text-white shadow-sm"
                            : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Agree to Terms */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={agreedTerms}
                      onChange={(e) => setAgreedTerms(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-black focus:ring-black"
                    />
                    <span className="text-xs text-neutral-600 leading-normal">
                      I agree to the{" "}
                      <Link href="/terms" className="font-semibold text-black underline hover:text-neutral-700">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="font-semibold text-black underline hover:text-neutral-700">
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3.5 text-xs font-bold text-white transition-all hover:bg-neutral-800 disabled:opacity-50 shadow-sm"
                >
                  {loading ? (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <span>Create Free Account</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Switch to Sign In */}
            <div className="mt-8 text-center text-xs text-neutral-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-black underline underline-offset-4 hover:text-neutral-700"
              >
                Sign in here
              </Link>
            </div>

          </div>

          {/* Bottom Footer Note */}
          <div className="mt-8 text-center text-[11px] text-neutral-400">
            ZynScore guarantees complete data sovereignty. We never sell your personal information.
          </div>

        </div>

      </div>
    </div>
  );
}
