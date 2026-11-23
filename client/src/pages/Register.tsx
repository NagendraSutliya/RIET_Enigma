import { useEffect } from "react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdboLzWGuW84d9MhK9b59nWlYbKe3iHlPCuq6_qF3EXlqgMvQ/viewform?usp=header";
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/Edu1sqGp4HFHzk3t9A0VUG?s=cl&p=a&iam=2";

export default function Register() {
  useEffect(() => {
    // Redirect to Google Form immediately
    window.location.href = GOOGLE_FORM_URL;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-4">Redirecting to Registration Form...</h1>
        <p className="text-muted-foreground mb-6">
          If you are not redirected automatically,{" "}
          <a href={GOOGLE_FORM_URL} className="text-primary underline">
            click here
          </a>
        </p>
        <div className="p-4 rounded border border-emerald-500/30 bg-emerald-500/10 text-xs">
          <p className="text-emerald-300 font-semibold mb-2">Already registered or looking for teammates?</p>
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-emerald-500 text-black font-mono font-bold rounded"
          >
            Join Official WhatsApp Group
          </a>
        </div>
      </div>
    </div>
  );
}
