import { useEffect } from "react";

const UNSTOP_REGISTRATION_URL = "https://unstop.com/o/aSClEqd?lb=use8upTu&utm_medium=Share&utm_source=enigmrie19036&utm_campaign=Online_coding_challenge";
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/Edu1sqGp4HFHzk3t9A0VUG?s=cl&p=a&iam=2";

export default function Register() {
  useEffect(() => {
    // Redirect to Unstop registration immediately
    window.location.href = UNSTOP_REGISTRATION_URL;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-4">Redirecting to Unstop Registration...</h1>
        <p className="text-muted-foreground mb-6">
          If you are not redirected automatically,{" "}
          <a href={UNSTOP_REGISTRATION_URL} className="text-primary underline">
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
